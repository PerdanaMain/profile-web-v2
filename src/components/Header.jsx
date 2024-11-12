import { useState } from "react";
import Hamburger from "../assets/icons/List.png";
import Rocket from "../assets/icons/rocket.png";
import { menulists } from "../libs/MenuLists";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container bg-[#2A2F28] rounded-[20px] px-5 sm:px-3">
      <nav className="flex justify-between lg:justify-center items-center mt-10 p-3 text-[#ECDFCC]">
        <div className="lg:hidden">
          <a href="/">
            <img src={Rocket} alt="Rocket" className="w-12" />
          </a>
        </div>

        <div className="lg:hidden text-primary text-center">
          <p>perdanamain</p>
        </div>

        <div className="hidden lg:flex">
          {menulists.map((item, index) => (
            <a href={item.link} className="mx-5 hover:text-primary" key={index}>
              {item.title}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={Hamburger} alt="Menu" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-[#2A2F28] text-[#ECDFCC] mt-2 p-3 rounded-b-[20px] text-center">
          {menulists.map((item, index) => (
            <a
              href={item.link}
              className="block my-2 hover:text-primary"
              key={index}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
