import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Stars from "../components/Stars";

const Project = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Elemen latar belakang bintang */}
      <div className="container mx-auto relative z-10">
        <Stars />
        <Header />
        <Projects isPage={true} />
        <div className="border-[1px] opacity-50 border-main" />
        <Footer />
      </div>
    </div>
  );
};

export default Project;
