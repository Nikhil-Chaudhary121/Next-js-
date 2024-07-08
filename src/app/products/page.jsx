import ProductBox from "@/src/components/ProductBox";

const ProductsPage = () => {
  return (
    <main className=" flex flex-col h-fit items-center p-20">
      <h1 className=" text-4xl mb-10 text-red-400"> Our Products </h1>
      <div className=" grid grid-cols-4 gap-4">
        <ProductBox imgURL={"/1.jfif"} name={"Chanel"} idx={1} />
        <ProductBox imgURL={"/2.jfif"} name={"CeraVe"} idx={2} />
        <ProductBox imgURL={"/3.jfif"} name={"CeraVe"} idx={3} />
        <ProductBox
          imgURL={"/4.jfif"}
          name={"Cera Ve - Moisturising Lotion "}
          idx={4}
        />
        <ProductBox imgURL={"/5.jfif"} name="Cetaphil" idx={5} />
        <ProductBox imgURL={"/6.jfif"} name={"CeraVe"} idx={6} />
        <ProductBox imgURL={"/7.jfif"} name="LowPh" idx={7} />
        <ProductBox imgURL={"/8.jfif"} name="PinkCloud" idx={8} />
      </div>
    </main>
  );
};

export default ProductsPage;
