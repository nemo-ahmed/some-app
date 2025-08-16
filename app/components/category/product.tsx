import { useLoaderData } from "@remix-run/react";

function Product() {
  const data = useLoaderData();
  return <div>Product {JSON.stringify(data)}</div>;
}

export default Product;
