"use client";
import { Hero, Products } from "./sections";

const Home = () => {
  return (
    <section className="relative bg-black w-screen max-w-[1440px]">
      <Hero />
      <Products />
    </section>
  );
};

export default Home;
