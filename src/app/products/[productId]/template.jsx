export const metadata = {
  title: "Leaning Next.js",
  description: "Generated by Next.js",
};

// const getRandomInt = (num) => {
//   return Math.floor(Math.random() * num);
// };
// const num = getRandomInt(2);

// if (num === 1 || 2) {
//   throw new Error("Error in Products");
// }

export default function ProductsLayout({ children }) {
  const getRandomInt = (num) => {
    return Math.floor(Math.random() * num);
  };
  const num = getRandomInt(2);

  if (num === 1 || 2) {
    throw new Error("Error in Reviews");
  }
  return (
    <>
      {/* <input className=" mt-20 ml-20  text-black" type="text" /> */}
      <div className=" absolute top-[60%] translate-x-[-50%] translate-y-[-50%] left-[50%]">
        Featured Products
      </div>
      {children}
    </>
  );
}
