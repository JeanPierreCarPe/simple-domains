import ProductCard from "../components/ProductCard";
import data from "../data";

const Products = () => {
  return (
    <div id="products" className="w-screen h-auto bg-black flex justify-center items-center p-16">
      <div className="w-full h-[650px] flex flex-wrap gap-[40px] justify-center items-center">
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
