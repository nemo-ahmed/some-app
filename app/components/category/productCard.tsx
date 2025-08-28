import { Link } from "@remix-run/react";
import { encodeDynamicPath } from "~/utils/dynamicUrlsHandler";

function ProductCard({ title }: { title: string }) {
  return (
    <div className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between w-[14.38rem] h-72 bg-french-gray-900 dark:bg-french-gray-100 group-hover:bg-french-gray-800/90 dark:group-hover:bg-french-gray-100/90 group">
      <div className="h-5/6 p-4 bg-french-gray-700 dark:bg-french-gray-200 group-hover:bg-french-gray-700/90 dark:group-hover:bg-french-gray-200/90 rounded-lg" />
      <h2 className="text-xl font-semibold">
        <Link to={encodeDynamicPath(title)}>Product {title}</Link>
      </h2>
    </div>
  );
}

export default ProductCard;
