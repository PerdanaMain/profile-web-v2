import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Stars from "../components/Stars";
import Techstacks from "../components/TechStacks";
import MainLayout from "../containers/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="container mx-auto relative z-10">
        <Stars />

        <Header />
        <Hero />
        <Techstacks />
        <Projects isPage={false} />
        <div className="border-[1px] opacity-50 border-main" />
        <Footer />
      </div>
    </MainLayout>
  );
};

export default Home;
