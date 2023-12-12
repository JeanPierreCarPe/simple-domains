import { titleImage } from "@/public/assets/images";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-screen min h-screen bg-home bg-cover bg-center m-0 p-0">
      <div className="w-full h-full bg-gradient-to-r from-transparent to-black flex justify-start items-center pl-32 pr-16 gap-8">
      <Image src={titleImage} alt="title-image.png" />
      <p className="font-poppins font-light text-base text-white tracking-wider leading-8 w-96">
        Explore the untapped potential of premium domain names that go beyond
        the ordinary. Our curated collection is designed for trailblazers like
        you, ready to make a mark in the cannabis industry. Each domain is a
        gateway to a unique opportunity, a canvas waiting for your visionary
        touch.
      </p>
      </div>
    </div>
  );
};

export default Hero;
