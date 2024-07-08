import Link from "next/link";

const Login = () => {
  return (
    <main className=" p-20 h-full">
      <div className=" h-full flex flex-col justify-center items-center">
        <h1 className=" text-4xl">Login</h1>
        <p>
          <Link href={"/forget-password"} className=" text-slate-gray">
            {" "}
            Forget Password
          </Link>{" "}
          Or{" "}
          <Link href={"/register      "} className=" text-slate-gray">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
