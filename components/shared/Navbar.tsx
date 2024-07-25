"use client";
import React from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className=" mt-4 flex items-center justify-center">
      <div className="z-10 flex gap-6 rounded-3xl bg-white p-2">
        <Button
          className={`rounded-3xl ${pathName === "/" ? "bg-black" : "bg-white text-black"} `}
          onClick={() => router.push("/")}
        >
          Dashboard
        </Button>
        <Button
          className={`rounded-3xl ${pathName === "/claims" ? "bg-black" : "bg-white text-black"} `}
          onClick={() => router.push("/claims")}
        >
          Claims
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
