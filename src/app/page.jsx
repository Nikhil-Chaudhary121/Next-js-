import Link from "next/link";
export default function HomePage() {
  return (
    <main className=" flex flex-col justify-center items-center h-full p-20">
      <h1 className=" text-4xl font-semibold">Welcome Home </h1>
      <p>
        New to this?
        <Link href={"/register"} className=" text-slate-gray">
          {" "}
          Create One
        </Link>
      </p>
    </main>
  );
}
