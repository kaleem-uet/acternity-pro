import React from "react";
import Link from "next/link";
import Logo from "./logo";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Container from "./container";

export default function Navbar() {
  const navLinks = [
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Product",
      href: "/product",
    },
    {
      title: "Social",
      href: "/social",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className="flex items-center justify-between py-4">
        <div className="flex gap-4">
          <Logo />
          <ModeToggle />
        </div>
        <div className="flex items-center gap-5">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className=" text-sm text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className=" flex gap-4 items-center">
          <Link
            href="/login"
            className=" text-sm text-neutral-600 dark:text-neutral-400 font-medium  "
          >
            Login
          </Link>
          <Button variant="default">Sign Up</Button>
          
        </div>
      </Container>
    </div>
  );
}
