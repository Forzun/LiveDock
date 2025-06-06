import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/icons/logo.svg";
import logoIcon from "../public/assets/icons/logo-icon.svg";
import { cn } from "@/lib/utils";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div
      className={`min-h-[92px] flex-nowrap bg-dark-100 flex w-full items-center justify-between gap-2 px-4 ${className}`}
    >
      <Link href="/" className="md:flex-1">
        <Image
          src={logo}
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src={logoIcon}
          alt="Logo"
          width={32}
          height={32}
          className="block md:hidden"
        />
      </Link>

      {children}
    </div>
  );
};

export default Header;
