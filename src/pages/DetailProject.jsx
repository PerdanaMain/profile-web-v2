import { Button } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DetailProject = () => {
  const particlesRef = useRef(null);

  // Fungsi untuk membuat elemen bintang secara dinamis
  const createStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const style = {
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
      };
      stars.push(<div key={i} className="stars" style={style}></div>);
    }
    return stars;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const particles = particlesRef.current;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      particles.style.transform = `translate(-${x / 20}%, -${y / 20}%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Elemen latar belakang bintang */}
      <div className="container mx-auto relative z-10">
        <div id="particles" ref={particlesRef} className="pointer-events-none">
          {createStars()}
        </div>
        <Header />

        <div className="my-10 px-5 sm:px-10">
          <Button
            color="secondary"
            variant="bordered"
            className="flex items-center gap-2"
          >
            <i className="fa-solid fa-chevron-left"></i> Back
          </Button>
        </div>

        <div className="container mx-auto my-5 px-5 sm:px-10">
          <h1 className="text-primary text-center text-4xl sm:text-5xl font-bold mb-10">
            Project 1
          </h1>

          <img
            src="https://nextui.org/images/hero-card-complete.jpeg"
            alt="Project showcase"
            className="block object-cover my-5 w-full max-w-4xl h-auto mx-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="container mx-auto my-5 px-5 sm:px-10">
          <div className="flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="flex items-center text-sm text-green-200 bg-green-900 py-1 px-3 rounded-md">
              <i className="fa-solid fa-check-circle mr-2"></i> Complete
            </span>

            <span className="hidden sm:block text-main text-2xl">|</span>

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

        <div className="border-t border-main opacity-50 my-8" />
        <Footer />
      </div>
    </div>
  );
};

export default DetailProject;
