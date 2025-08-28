import { useLoaderData } from "@remix-run/react";
import ProductCard from "./productCard";

function Products({}: {}) {
  const data = useLoaderData<{
    params: Record<string, string>;
    products: { title: string }[];
  }>();

  return (
    <div className="flex items-center wrap-anywhere justify-start gap-4 py-4 px-5 flex-wrap h-[calc(100dvh-7.1rem)] overflow-auto">
      {data.products.map((product) => (
        <ProductCard key={product.title} title={product.title} />
      ))}
    </div>
  );
}

export default Products;
