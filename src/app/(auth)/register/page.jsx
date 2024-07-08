import Link from "next/link";

const Register = () => {
  return (
    <main className=" p-20 h-full">
      <div className=" h-full flex flex-col justify-center items-center">
        <h1 className=" text-4xl">Register</h1>
        <p>
          Already have an account?
          <Link href={"/login"} className=" text-slate-gray">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
