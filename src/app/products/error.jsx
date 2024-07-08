"use client";
export default function ErrorBoundary({ error, reset }) {
  return (
    <main className=" w-full h-full flex flex-col justify-center items-center">
      <h1 className=" text-3xl">{error.message} </h1>
      <button className="px-4 py-2 bg-zinc-800 rounded-lg" onClick={reset}>
        Try Again
      </button>
    </main>
  );
}
