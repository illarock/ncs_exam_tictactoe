import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 py-3 border-b border-muted">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-lg lg:text-xl tracking-widest uppercase">
          Tic<span className="text-primary">Tac</span>Toe
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
