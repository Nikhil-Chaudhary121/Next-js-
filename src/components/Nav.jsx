"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];
  const pathName = usePathname();
  return (
    <nav className=" bg-[#151515] fixed w-full p-5 top-0 flex justify-between">
      <h1 className=" text-2xl font-semibold tracking-wider">
        <Link href="/">Home</Link>
      </h1>

      <div className=" flex justify-end items-center gap-10">
        {navLinks.map((navLink) => {
          const isActive = pathName.startsWith(navLink.href);
          return (
            <h1 className={isActive ? "underline underline-offset-4" : ""}>
              <Link href={navLink.href} key={navLink.name}>
                {navLink.name}
              </Link>
            </h1>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
