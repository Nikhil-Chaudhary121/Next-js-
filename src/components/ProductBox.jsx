import Link from "next/link";

const ProductBox = ({ imgURL, name = "Product", idx }) => {
  return (
    <div className="flex h-fit bg-[#242424] justify-between flex-col p-4 rounded-lg">
      <Link href={`/products/${idx}`} replace={false}>
        <div className=" h-[28rem] mb-4">
          <img
            src={imgURL}
            className=" w-full h-full object-cover rounded-lg "
            alt=""
          />
        </div>
        <div>
          <h2 className="text-lg font-dosis tracking-wider text-white">
            {name}
          </h2>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductBox;
