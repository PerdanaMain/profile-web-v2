import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Stars from "../components/Stars";
import MainLayout from "../containers/MainLayout";

const Project = () => {
  return (
    <MainLayout>
      <div className="container mx-auto relative z-10">
        <Stars />
        <Header />
        <Projects isPage={true} />
        <div className="border-[1px] opacity-50 border-main" />
        <Footer />
      </div>
    </MainLayout>
  );
};

export default Project;
