import { useState } from "react";
import Hamburger from "../assets/icons/List.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container bg-[#2A2F28] rounded-[20px]">
      <nav className="flex justify-end lg:justify-center items-center mt-10 p-3 text-[#ECDFCC]">
        {/* Menu utama (untuk layar besar) */}
        <div className="hidden lg:flex">
          <a href="/" className="mr-10 hover:text-[#BD904D]">
            Home
          </a>
          <a href="/about" className="mr-10 hover:text-[#BD904D]">
            About
          </a>
          <a href="/contact" className="hover:text-[#BD904D]">
            Project
          </a>
        </div>

        {/* Icon hamburger (untuk layar kecil) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <img src={Hamburger} alt="Menu" />
          </button>
        </div>
      </nav>

      {/* Dropdown menu untuk layar kecil */}
      {menuOpen && (
        <div className="lg:hidden bg-[#2A2F28] text-[#ECDFCC] mt-2 p-3 rounded-b-[20px]">
          <a href="/" className="block mb-2 hover:text-[#BD904D]">
            Home
          </a>
          <a href="/about" className="block mb-2 hover:text-[#BD904D]">
            About
          </a>
          <a href="/contact" className="block hover:text-[#BD904D]">
            Project
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
