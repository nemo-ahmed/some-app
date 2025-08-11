import { useCallback, useEffect, useRef, useState } from "react";

interface Ball {
  x: number;
  y: number;
  radius: number;
  speed: number;
  velocityX: number;
  velocityY: number;
  color: string;
}

interface Paddle {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

export function Pong() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [player, setPlayer] = useState(0);
  const [aI, setAI] = useState(0);
  const start = useCallback(() => {
    if (!canvas.current) {
      console.error("Canvas element not found");
      return;
    }
    const ctx = canvas.current.getContext("2d");
    if (!ctx) {
      console.error("ctx not found");
      return;
    }
    // Game constants
    const PADDLE_WIDTH = 10;
    const PADDLE_HEIGHT = 80;
    const BALL_RADIUS = 8;
    const PLAYER_X = 10;
    const AI_X = canvas.current.clientWidth - PADDLE_WIDTH - 10;

    // Paddle objects
    const player = {
      x: PLAYER_X,
      y: canvas.current.clientHeight / 2 - PADDLE_HEIGHT / 2,
      width: PADDLE_WIDTH,
      height: PADDLE_HEIGHT,
      color: "#0ff",
    };

    const ai = {
      x: AI_X,
      y: canvas.current.clientHeight / 2 - PADDLE_HEIGHT / 2,
      width: PADDLE_WIDTH,
      height: PADDLE_HEIGHT,
      color: "#f00",
    };

    // Ball object
    const ball = {
      x: canvas.current.clientWidth / 2,
      y: canvas.current.clientHeight / 2,
      radius: BALL_RADIUS,
      speed: 5,
      velocityX: 5 * (Math.random() > 0.5 ? 1 : -1),
      velocityY: 5 * (Math.random() > 0.5 ? 1 : -1),
      color: "#fff",
    };

    // Draw functions
    function drawRect(
      x: number,
      y: number,
      w: number,
      h: number,
      color: string
    ) {
      if (!ctx) {
        console.error("ctx not found");
        return;
      }
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
    }

    function drawCircle(x: number, y: number, r: number, color: string) {
      if (!ctx) {
        console.error("ctx not found");
        return;
      }
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();
    }

    function drawNet() {
      if (!canvas.current) {
        console.error("Canvas element not found");
        return;
      }
      for (let i = 0; i < canvas.current.clientHeight; i += 25) {
        drawRect(canvas.current.clientWidth / 2 - 1, i, 2, 15, "#fff");
      }
    }

    function draw() {
      if (!canvas.current) {
        console.error("Canvas element not found");
        return;
      }
      // Clear
      drawRect(
        0,
        0,
        canvas.current.clientWidth,
        canvas.current.clientHeight,
        "#222"
      );
      drawNet();
      drawRect(player.x, player.y, player.width, player.height, player.color);
      drawRect(ai.x, ai.y, ai.width, ai.height, ai.color);
      drawCircle(ball.x, ball.y, ball.radius, ball.color);
    }

    // Mouse control for player
    canvas.current.addEventListener("mousemove", function (evt) {
      if (!canvas.current) {
        console.error("Canvas element not found");
        return;
      }
      let rect = canvas.current.getBoundingClientRect();
      let root = document.documentElement;
      let mouseY = evt.clientY - rect.top - root.scrollTop;
      player.y = mouseY - player.height / 2;
      // Clamp within canvas
      if (player.y < 0) player.y = 0;
      if (player.y + player.height > canvas.current.clientHeight)
        player.y = canvas.current.clientHeight - player.height;
    });
    // Collision detection

    function collision(b: Ball, p: Paddle): boolean {
      return (
        b.x - b.radius < p.x + p.width &&
        b.x + b.radius > p.x &&
        b.y + b.radius > p.y &&
        b.y - b.radius < p.y + p.height
      );
    }

    // AI movement (basic)
    function aiMove() {
      if (!canvas.current) {
        console.error("Canvas element not found");
        return;
      }
      if (!canvas) return;
      let center = ai.y + ai.height / 2;
      if (ball.y < center - 10) {
        ai.y -= 4;
      } else if (ball.y > center + 10) {
        ai.y += 4;
      }
      // Clamp
      if (ai.y < 0) ai.y = 0;
      if (ai.y + ai.height > canvas.current.clientHeight)
        ai.y = canvas.current.clientHeight - ai.height;
    }

    // Ball movement and logic
    function update() {
      if (!canvas.current) {
        console.error("Canvas element not found");
        return;
      }

      ball.x += ball.velocityX;
      ball.y += ball.velocityY;

      // Top & bottom wall collision
      if (
        ball.y - ball.radius < 0 ||
        ball.y + ball.radius > canvas.current.clientHeight
      ) {
        ball.velocityY = -ball.velocityY;
      }

      // Left paddle collision
      if (collision(ball, player)) {
        ball.x = player.x + player.width + ball.radius;
        ball.velocityX = -ball.velocityX;
        // Add some "spin" based on where it hits the paddle
        let collidePoint =
          (ball.y - (player.y + player.height / 2)) / (player.height / 2);
        let angle = collidePoint * (Math.PI / 4); // Max 45deg
        let direction = ball.velocityX > 0 ? 1 : -1;
        ball.velocityX = direction * ball.speed * Math.cos(angle);
        ball.velocityY = ball.speed * Math.sin(angle);
      } else {
      }

      // Right paddle collision
      if (collision(ball, ai)) {
        ball.x = ai.x - ball.radius;
        ball.velocityX = -ball.velocityX;
        // Add some "spin" based on where it hits the paddle
        let collidePoint = (ball.y - (ai.y + ai.height / 2)) / (ai.height / 2);
        let angle = collidePoint * (Math.PI / 4);
        let direction = ball.velocityX > 0 ? 1 : -1;
        ball.velocityX = direction * ball.speed * Math.cos(angle);
        ball.velocityY = ball.speed * Math.sin(angle);
      }

      // Score (reset ball)
      if (
        ball.x - ball.radius < 0 ||
        ball.x + ball.radius > canvas.current.clientWidth
      ) {
        resetBall();
      }

      aiMove();
    }

    function resetBall() {
      if (!canvas.current) return;

      ball.x = canvas.current.clientWidth / 2;
      ball.y = canvas.current.clientHeight / 2;
      ball.velocityX = ball.speed * (Math.random() > 0.5 ? 1 : -1);
      ball.velocityY = ball.speed * (Math.random() > 0.5 ? 1 : -1);
    }
    (function game() {
      update();
      draw();
      requestAnimationFrame(game);
    })();
  }, []);

  // Main game loop

  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <h1 className="-mt-4 text-2xl">Pong</h1>
      <button type="button" onClick={start}>
        Play
      </button>
      <div className="flex items-center justify-center gap-4 my-4 text-4xl">
        <h2>{player}</h2>:<h2>{aI}</h2>
      </div>
      <canvas ref={canvas} id="pong" width="700" height="400" />
    </main>
  );
}
