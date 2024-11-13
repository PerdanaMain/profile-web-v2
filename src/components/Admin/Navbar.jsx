const Navbar = () => {
  return (
    <nav className="text-lg flex items-center justify-between content-center ">
      <div className=" font-semibold text-xl text-gray-800 flex items-center">
        <a href="#" className="me-5 sm:me-0">
          <span className="md:hidden">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </span>
        </a>
        <span>Invoices</span>
      </div>
      <div className="flex space-x-5 md:space-x-10 text-gray-500 items-center content-center text-base ">
        <a className="" href="#">
          <img
            className="rounded-full w-10 h-10 border-2 border-indigo-200 hover:border-indigo-300"
            src="images/avatar.jpg"
            alt=""
            srcSet=""
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
