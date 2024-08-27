"use client";

import { useState } from "react";
import { FaBeer, FaBars } from "react-icons/fa";

const navLinks = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Contact",
    path: "/contact",
  },
];

function Header() {
  const [navOpen, setnavOpen] = useState();

  const handleNav = () => {
    setnavOpen(!navOpen);
  };
  console.log(navOpen);

  return (
    <div class="flex justify-between p-6">
      <div>DALÈ</div>
      <div class="md:hidden">
        <button onClick={handleNav}>
          <FaBars />
        </button>
      </div>

      {navOpen === true ? (
        <div class="absolute top-16 right-0 bg-white p-4 shadow-lg">
          {navLinks.map((link, index) => (
            <a key={index} href={link.path}>
              {link.text}
            </a>
          ))}
        </div>
      ) : null}

      <div class="hidden md:block space-x-4">
        {navLinks.map((link, index) => (
          <a key={index} href={link.path}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
