import Products from "./products";

function CategoryPageSwitcher({ data }: { data: Record<string, string> }) {
  if (typeof data.id === "string" && data.id.length > 0) {
    return null;
  }
  return <Products data={data} />;
}

export default CategoryPageSwitcher;
