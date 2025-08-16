import { useParams } from "@remix-run/react";
import Products from "./products";
import { paramsDecoder } from "~/utils/dynamicUrlsHandler";

function CategoryPageSwitcher() {
  const data = useParams();
  if (typeof data.id === "string" && data.id.length > 0) {
    return null;
  }
  return <Products data={paramsDecoder(data)} />;
}

export default CategoryPageSwitcher;
