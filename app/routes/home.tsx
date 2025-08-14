import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useSearchParams } from "react-router";

// ? hmm this looks like what we need
// ├── _auth.login.tsx
// │   ├── _auth.register.tsx
// │   ├── _auth.tsx
// │   ├── _index.tsx
// │   ├── concerts.$city.tsx
// │   └── concerts.tsx

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  return (
    <>
      <Welcome />
      <h2 className="text-2xl font-bold text-center pb-2">Search Param</h2>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() =>
            setSearchParams((prev) => {
              if (prev.has("greeting")) {
                prev.delete("greeting");
              } else prev.set("greeting", "Hello");
              return prev;
            })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {searchParams.get("greeting") || "Greeting"}
        </button>
        <button
          onClick={() =>
            setSearchParams((prev) => {
              if (prev.has("name")) {
                prev.delete("name");
              } else prev.set("name", "Mark");
              return prev;
            })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {searchParams.get("name") || "Name"}
        </button>
      </div>
    </>
  );
}
