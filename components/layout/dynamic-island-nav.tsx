"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function DynamicIslandNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const height = useTransform(scrollY, [0, 100], ["5rem", "4rem"]);
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(20, 20, 30, 0.5)", "rgba(20, 20, 30, 0.95)"]
  );

  return (
    <motion.header
      style={{ height, background }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl backdrop-blur-lg rounded-full border border-purple-900/30 shadow-lg shadow-purple-500/10 z-50 flex items-center justify-between px-6"
    >
      <Link href="/" className="flex items-center space-x-2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          AenFinite
        </motion.div>
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative group text-gray-300 hover:text-white transition-colors"
          >
            {item.name}
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"
              initial={false}
            />
          </Link>
        ))}
        <Button
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
        >
          <Rocket className="mr-2 h-4 w-4" />
          Get Started
        </Button>
      </nav>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-white"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" },
        }}
        className={cn(
          "absolute top-full right-0 mt-2 w-64 bg-gray-900 rounded-2xl shadow-xl shadow-purple-500/10 p-4",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 w-full"
          >
            <Rocket className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </nav>
      </motion.div>
    </motion.header>
  );
}