import Link from "next/link";

const ForgetPassword = () => {
  return (
    <main className=" p-20 h-full">
      <div className=" h-full flex flex-col justify-center items-center">
        <h1 className=" text-4xl">Forget Password</h1>
        <p>
          Don't have an account?
          <Link href={"/register"} className=" text-slate-gray">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default ForgetPassword;
