import { useNavigate } from "react-router-dom";
import nodejs from "../assets/icons/akar-icons_node-fill.png";
import laravel from "../assets/icons/flowbite_laravel-solid.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stars from "../components/Stars";
import MainLayout from "../containers/MainLayout";

const DetailProject = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container mx-auto relative z-10">
        <Stars />
        <Header />

        <div className="my-10 px-5 sm:px-1">
          <button
            className="flex items-center gap-2 hover:bg-primary bg-transparent border-[1px] border-main text-secondary py-2 px-5 rounded-lg"
            onClick={() => navigate("/project")}
          >
            <i className="fa-solid fa-chevron-left"></i> Back
          </button>
        </div>

        <div className="container mx-auto my-5 px-5 sm:px-1">
          <h1 className="text-primary text-center text-4xl sm:text-5xl font-bold mb-10">
            Project 1
          </h1>

          <img
            src="https://nextui.org/images/hero-card-complete.jpeg"
            alt="Project showcase"
            className="block object-cover my-5 w-full max-w-full max-h-[500px] mx-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="container mx-auto my-5 px-5 sm:px-1">
          <div className="flex flex-row justify-start items-center space-x-4">
            <span className="flex items-center text-sm text-green-200 bg-green-900 py-1 px-3 rounded-md">
              <i className="fa-solid fa-check-circle mr-2"></i> Complete
            </span>

            <span className="text-main text-2xl">|</span>

            <a
              href="https://linkedin.com/in/firmanperdana"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-sm text-blue-400 hover:text-blue-500"
            >
              <i className="fa-solid fa-link mr-2"></i>
              <span className="text-md hover:underline hover:underline-offset-4">
                Live Site
              </span>
            </a>
          </div>
        </div>

        <div className="container mx-auto my-5 px-5 sm:px-1">
          <h1 className="text-primary text-start text-2xl font-bold mb-5">
            Technologies Used
          </h1>

          <div className="flex flex-row justify-start items-center space-x-4 mt-3">
            <img src={laravel} alt="Tech Logo" />
            <img src={nodejs} alt="Tech Logo" />
          </div>
        </div>

        <div className="container mx-auto my-5 px-5 sm:px-1">
          <h1 className="text-primary text-start text-2xl font-bold mb-5">
            Overview
          </h1>

          <p className="text-secondary text-lg text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            nobis! Eaque voluptatem architecto dicta illo accusantium sapiente
            sunt at incidunt, ad placeat autem officiis iure saepe explicabo
            perspiciatis, dignissimos enim molestiae, rerum maxime minus quasi
            nisi dolor! Amet voluptates a nobis nam perspiciatis dolores
            perferendis eligendi cupiditate rem, eaque doloremque fuga natus
            provident fugit laboriosam possimus. Eius soluta impedit velit, aut
            consequatur aliquid magnam reiciendis fuga rerum architecto
            voluptate esse vero, dicta fugiat, id sequi iste. Laboriosam soluta
            saepe qui.
          </p>
        </div>

        <div className="container mx-auto my-5 px-5 sm:px-1">
          <h1 className="text-primary text-start text-2xl font-bold mb-5">
            Minimum Viable Product
          </h1>

          <p className="text-secondary text-lg text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            nobis! Eaque voluptatem architecto dicta illo accusantium sapiente
            sunt at incidunt, ad placeat autem officiis iure saepe explicabo
            perspiciatis, dignissimos enim molestiae, rerum maxime minus quasi
            nisi dolor! Amet voluptates a nobis nam perspiciatis dolores
            perferendis eligendi cupiditate rem, eaque doloremque fuga natus
            provident fugit laboriosam possimus. Eius soluta impedit velit, aut
            consequatur aliquid magnam reiciendis fuga rerum architecto
            voluptate esse vero, dicta fugiat, id sequi iste. Laboriosam soluta
            saepe qui.
          </p>
        </div>

        <div className="container mx-auto my-5 px-5 sm:px-1">
          <h1 className="text-primary text-start text-2xl font-bold mb-5">
            My Responsibility
          </h1>

          <p className="text-secondary text-lg text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            nobis! Eaque voluptatem architecto dicta illo accusantium sapiente
            sunt at incidunt, ad placeat autem officiis iure saepe explicabo
            perspiciatis, dignissimos enim molestiae, rerum maxime minus quasi
            nisi dolor! Amet voluptates a nobis nam perspiciatis dolores
            perferendis eligendi cupiditate rem, eaque doloremque fuga natus
            provident fugit laboriosam possimus. Eius soluta impedit velit, aut
            consequatur aliquid magnam reiciendis fuga rerum architecto
            voluptate esse vero, dicta fugiat, id sequi iste. Laboriosam soluta
            saepe qui.
          </p>
        </div>

        <div className="border-t border-main opacity-50 my-8" />
        <Footer />
      </div>
    </MainLayout>
  );
};

export default DetailProject;
