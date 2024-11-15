import { useEffect, useRef } from "react";

const Stars = () => {
  const particlesRef = useRef(null);

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
    <div id="particles" ref={particlesRef} className="pointer-events-none">
      {createStars()}
    </div>
  );
};

export default Stars;
