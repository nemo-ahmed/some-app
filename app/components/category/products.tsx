import { Link } from "@remix-run/react";

function Products({ data }: { data: Record<string, string> }) {
  return (
    <div>
      <ul className="flex items-center gap-2">
        <li>
          <Link to="123">Product 123</Link>
        </li>
        <li>
          <Link to="12">Product 12</Link>
        </li>
        <li>
          <Link to="23">Product 23</Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;
