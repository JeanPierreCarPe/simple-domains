import ProductCard from "../components/ProductCard";
import data from "../data";

const Products = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center px-16">
      <div className="w-full h-[650px] flex flex-wrap gap-[40px]">
        {data.map((product) => (
          <ProductCard
            key={product.title}
            image={product.image}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
