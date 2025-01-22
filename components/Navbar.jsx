"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className="fixed bg-white/[0.8] dark:bg-black/[0.8] backdrop-blur-sm py-3 z-50 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold hover:cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="logo"
              className="w-6 h-6"
              width={40}
              height={40}
            />
            <span>ChatMe</span>
          </Link>
          <nav>
            <ul className="flex items-center justify-end space-x-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-sky-500 hover:cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/forums"
                  className="hover:text-sky-500 hover:cursor-pointer"
                >
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="hover:text-sky-500 hover:cursor-pointer"
                >
                  UserChat
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:text-sky-500 hover:cursor-pointer"
                >
                  Help
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <UserButton />
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="relative p-2 rounded-full hover:bg-transparent/[0.1]"
                >
                  {mounted &&
                    (theme === "light" ? (
                      <Sun className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                      <Moon className="h-[1.2rem] w-[1.2rem]" />
                    ))}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
