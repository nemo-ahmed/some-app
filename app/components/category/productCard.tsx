import { Link } from "@remix-run/react";
import { encodeDynamicPath } from "~/utils/dynamicUrlsHandler";

function ProductCard({ title }: { title: string }) {
  return (
    <div className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between w-[200px] h-[300px] bg-zinc-800 hover:bg-zinc-800/90 group">
      <div className="h-5/6 w-full p-4 bg-zinc-700 group-hover:bg-zinc-700/90 rounded-lg" />
      <h2 className="text-xl font-semibold text-gray-300">
        <Link to={encodeDynamicPath(title)}>{title}</Link>
      </h2>
    </div>
  );
}

export default ProductCard;
