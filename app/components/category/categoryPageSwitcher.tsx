import { useParams } from "@remix-run/react";
import Products from "./products";

function CategoryPageSwitcher() {
  const data = useParams();
  if (typeof data.id === "string" && data.id.length > 0) {
    return null;
  }
  return <Products />;
}

export default CategoryPageSwitcher;
