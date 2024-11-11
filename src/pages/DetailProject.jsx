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
        <div id="particles" ref={particlesRef}>
          {createStars()}
        </div>
        <Header />
        <div className="border-[1px] opacity-50 border-main" />
        <Footer />
      </div>
    </div>
  );
};

export default DetailProject;
