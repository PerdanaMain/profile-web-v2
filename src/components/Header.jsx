import Hamburger from "../assets/icons/List.png";

const Header = () => {
  return (
    <div className="container bg-[#2A2F28] rounded-[20px]">
      <nav className="flex justify-end lg:justify-center mt-10 p-3 text-[#ECDFCC]">
        <div className="hidden lg:inline-block">
          <a href="/" className="mr-20 hover:text-[#BD904D]">
            Home
          </a>
          <a href="/about" className="mr-20 hover:text-[#BD904D]">
            About
          </a>
          <a href="/contact" className="mr-20 hover:text-[#BD904D]">
            Project
          </a>
        </div>

        <div className="lg:hidden inline-block mr-5">
          <img src={Hamburger} alt="List" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
