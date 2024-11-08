import { useState } from "react";
import Hamburger from "../assets/icons/List.png";
import Rocket from "../assets/icons/rocket.png";

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
          <a href="/" className="mr-10 hover:text-primary">
            Home
          </a>
          <a href="/about" className="mr-10 hover:text-primary">
            About
          </a>
          <a href="/contact" className="hover:text-primary">
            Project
          </a>
        </div>
        <div className="lg:hidden mx-start">
          <a href="/">
            <img src={Rocket} alt="Rocket Pict" className="w-10" />
          </a>
        </div>
        <div className="lg:hidden mx-auto">
          <p className="text-primary">perdanamain</p>
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
          <a href="/" className="block mb-2 hover:text-primary">
            Home
          </a>
          <a href="/about" className="block mb-2 hover:text-primary">
            About
          </a>
          <a href="/contact" className="block hover:text-primary">
            Project
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
