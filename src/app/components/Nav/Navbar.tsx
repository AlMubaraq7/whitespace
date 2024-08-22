"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../svg/Logo";
import { lato } from "@/app/font";
import clsx from "clsx";
import { Button } from "../Button/Button";

export const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const renderNav = () => (
    <nav
      className={clsx(
        `py-6 px-56 bg-darkblue w-full flex justify-between items-center ${lato.className} antialiased`
      )}
    >
      <div className="w-fit">
        <Logo />
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="text-eggwhite flex gap-4">
          <Link href="/features">Features</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="flex gap-4">
          <Button color="yellow">Login</Button>
          <Button color="blue">Sign Up</Button>
        </div>
      </div>
    </nav>
  );

  return isClient ? renderNav() : "";
};
