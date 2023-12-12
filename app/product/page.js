import { logo4 } from "@/public/assets/images/logos";
import ReturnButton from "../components/ReturnButton";
import Image from "next/image";

const Product = () => {
  return (
    <section className="w-screen h-screen bg-black flex">
      <div className="w-2/4 h-screen bg-home bg-center bg-cover">
        <div className="relative w-full h-full bg-[rgba(0,0,0,.75)] flex flex-col p-16 gap-10">
          <ReturnButton />
          <div className="relative h-full flex flex-col justify-between">
            <div className="relative h-[300px] w-full overflow-hidden flex justify-center items-center">
              <Image src={logo4} height={300} alt="product-image" />
            </div>
            <a
              href="https://www.namebuzzard.com/product-category/all-categories/?product_tag=cannabis"
              className="w-full h-[90px] bg-green rounded-3xl font-poppins font-medium text-xl text-white flex justify-center items-center"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="w-2/4 h-screen bg-black flex flex-col p-16 gap-12">
        <div className="relative flex flex-col gap-3">
          <h5 className="font-poppins text-white text-xl font-semibold">
            DOMAIN NAME
          </h5>
          <h2 className="font-poppins text-white text-4xl">
            nothingbudplants.com
          </h2>
          <p className="font-poppins text-white text-base tracking-wider">
            This is a great name for any retail store that wants to sell growing
            equipment and accessories related to cannabis.
          </p>
        </div>
        <div className="relative flex flex-col gap-5">
          <h5 className="font-poppins text-white text-xl font-semibold">
            BUSINESS SUGGESTIONS
          </h5>
          <div className="flex gap-5">
            <div className="w-6 h-6 rounded-2xl bg-[#B78E2A]"></div>
            <p className="font-poppins font-normal text-base text-white tracking-wider">
              Online Hydroponics Store
            </p>
          </div>
          <div className="flex gap-5">
            <div className="w-6 h-6 rounded-2xl bg-[#B78E2A]"></div>
            <p className="font-poppins font-normal text-base text-white tracking-wider">
              Cannabis Lifestyle Blog
            </p>
          </div>
          <div className="flex gap-5">
            <div className="w-6 h-6 rounded-2xl bg-[#B78E2A]"></div>
            <p className="font-poppins font-normal text-base text-white tracking-wider">
              Botanical Art and Décor Shop
            </p>
          </div>
          <div className="flex gap-5">
            <div className="w-6 h-6 rounded-2xl bg-[#B78E2A]"></div>
            <p className="font-poppins font-normal text-base text-white tracking-wider">
              Educational Resource Hub
            </p>
          </div>
          <div className="flex gap-5">
            <div className="w-6 h-6 rounded-2xl bg-[#B78E2A]"></div>
            <p className="font-poppins font-normal text-base text-white tracking-wider">
              Cannabis-Focused Apparel Line
            </p>
          </div>
          <div className="flex gap-5">
            <div className="w-6 h-6 rounded-2xl bg-[#B78E2A]"></div>
            <p className="font-poppins font-normal text-base text-white tracking-wider">
              Community Forum for Growers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
