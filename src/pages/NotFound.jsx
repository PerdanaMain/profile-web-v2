import { useEffect, useRef } from "react";
import NotFoundImg from "../assets/images/not-found.png";

const NotFound = () => {
  const particlesRef = useRef(null);

  // Fungsi untuk membuat elemen bintang secara dinamis
  const createStars = () => {
    const stars = [];
    for (let i = 0; i < 150; i++) {
      // Tambah jumlah bintang untuk efek lebih kaya
      const style = {
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 2}s`, // Animasi delay acak
      };
      stars.push(
        <div key={i} className="stars animate-blink" style={style}></div>
      );
    }
    return stars;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const particles = particlesRef.current;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      particles.style.transition = "transform 0.1s ease-out"; // Transisi lebih halus
      particles.style.transform = `translate(-${x / 20}%, -${y / 20}%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark">
      <div className="container mx-auto relative z-10">
        <div id="particles" ref={particlesRef}>
          {createStars()}
        </div>

        <div className="container mx-auto my-52 px-5 sm:px-3 text-center">
          <h1 className="text-primary text-center text-4xl sm:text-6xl font-bold mb-10">
            404 - Not Found
          </h1>
          <p className="text-secondary text-lg sm:text-xl">
            The page you&apos;re trying to access isn&apos;t available. It might
            have been moved or deleted. Please go back or visit the homepage.
          </p>

          <img
            src={NotFoundImg}
            alt="Not Found"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
