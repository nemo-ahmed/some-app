import { useLoaderData } from "@remix-run/react";
import Breadcrumbs from "../breadcrumbs";

function Product() {
  const data = useLoaderData();
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col gap-2 px-4 py-2">
        Product {JSON.stringify(data)}
      </div>
    </>
  );
}

export default Product;
