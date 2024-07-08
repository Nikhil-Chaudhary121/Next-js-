"use client";
import { notFound } from "next/navigation";

export default function ReviewDetails({ params }) {
  // const getRandomInt = (num) => {
  //   return Math.floor(Math.random() * num);
  // };
  // const num = getRandomInt(2);

  // if (num === 1) {
  //   throw new Error("Error in Reviews");
  // }

  if (parseInt(params.reviewId) > 100) {
    return notFound();
  }
  return (
    <main className=" w-full h-full flex justify-center items-center">
      <h1 className=" text-2xl">
        Review {params.reviewId} for Product {params.productId}
      </h1>
    </main>
  );
}
