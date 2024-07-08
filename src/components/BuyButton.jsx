"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BuyButton = () => {
  const router = useRouter();
  const handleOrder = () => {
    router.push("/products");
  };
  return (
    <button
      onClick={handleOrder}
      className=" py-4 text-xl font-rubik tracking-wider font-semibold px-8 bg-zinc-800 rounded-xl"
    >
      Order Now
    </button>
  );
};

export default BuyButton;
