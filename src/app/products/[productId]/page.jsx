import BuyButton from "@/src/components/BuyButton";

export const generateMetadata = ({ params }) => {
  const metadata = {
    title: params.productId,
  };
  return metadata;
};

const ProductDetails = ({ params }) => {
  const imgURL = `/${params.productId}.jfif`;
  console.log(imgURL);
  return (
    <main className=" w-full h-full p-20">
      <div className="flex flex-col w-full">
        <div className="h-[80vh] w-full ">
          <img
            src={imgURL}
            className=" rounded-lg h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className=" my-6">
          <h1 className=" text-4xl">Product {params.productId}</h1>
          <p className="text-2xl text-slate-gray mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            beatae necessitatibus sapiente doloremque nobis excepturi quae,
            quidem neque quam quas omnis autem earum ducimus sunt. Expedita
            officiis facilis aliquid illum, qui incidunt vero quia cum cumque
            magni consequuntur cupiditate aspernatur laboriosam quasi animi,
            recusandae quidem laborum placeat esse debitis sed?
          </p>
          <BuyButton />
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
