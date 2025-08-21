import ProductCard from "./productCard";

function Products({ data }: { data: Record<string, string> }) {
  return (
    <div>
      <ul className="flex items-center px-1 py-4 gap-4 flex-wrap">
        <ProductCard title="123" />
        <ProductCard title="12" />
        <ProductCard title="23" />
        <ProductCard title="3" />
        <ProductCard title="34" />
        <ProductCard title="33" />
        <ProductCard title="32" />
      </ul>
    </div>
  );
}

export default Products;
