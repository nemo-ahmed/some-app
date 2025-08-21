import { useLoaderData } from "@remix-run/react";
import ProductCard from "./productCard";

function Products({}: {}) {
  const data = useLoaderData<{
    params: Record<string, string>;
    products: { title: string }[];
  }>();

  return (
    <div>
      <div className="flex items-center px-1 py-4 gap-4 flex-wrap">
        {data.products.map((product) => (
          <ProductCard key={product.title} title={product.title} />
        ))}
      </div>
    </div>
  );
}

export default Products;
