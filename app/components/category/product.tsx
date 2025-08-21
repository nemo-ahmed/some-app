import { useLoaderData, useOutletContext } from "@remix-run/react";
import Breadcrumbs from "../breadcrumbs";
import ProductCard from "./productCard";

function Product() {
  const contextData = useOutletContext<{
    params: Record<string, string>;
    products: { title: string }[];
  }>();
  const data = useLoaderData();

  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col gap-2 px-4 py-2">
        Product {JSON.stringify(data)}
      </div>

      <div className="flex items-center mt-4 px-1 py-4 gap-4 flex-wrap">
        {contextData.products.map((product) => (
          <ProductCard key={product.title} title={product.title} />
        ))}
      </div>
    </>
  );
}

export default Product;
