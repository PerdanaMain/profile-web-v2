import GitHubLogo from "../assets/icons/GithubLogo.png";
import LinkedInLogo from "../assets/icons/LinkedinLogo.png";
import Rocket from "../assets/icons/rocket.png";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 px-4 text-center bg-transparent">
      <div className="mx-auto max-w-4xl h-auto border-none">
        {/* Gunakan ukuran font responsif */}
        <div className="flex items-center justify-center mb-6">
          <img
            src={Rocket}
            alt="Rocket Pict"
            className="w-12 md:w-16 lg:w-20 animate-bounce"
          />
          <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl">
            Perdana Main
          </h1>
          <img
            src={Rocket}
            alt="Rocket Pict"
            className="w-12 md:w-16 lg:w-20 animate-bounce"
          />
        </div>

        <h3 className="mx-auto text-secondary text-base md:text-lg lg:text-xl leading-relaxed">
          👋 Hi, My name is Firman Perdana. I&apos;m an Experienced Full Stack
          Developer with more than a year of experience in Software Engineering.
          My expertise in software design and development enables me to craft
          intuitive user experiences while maintaining smooth functionality.
        </h3>
      </div>
      <div className="my-2 justify-center">
        <a
          href="#projects"
          className="inline-block px-6 py-[13px] mt-3 mr-4 text-lg font-semibold text-secondary bg-secondary rounded-lg hover:bg-[#A77D3D] transition-all duration-200"
        >
          About me
        </a>

        <a
          href="#projects"
          className="inline-block px-5 py-3 mt-3 text-lg font-semibold text-secondary border-[1px] border-main rounded-lg hover:bg-[#A77D3D] transition-all duration-200"
        >
          Resume
        </a>
      </div>
      <div className="my-5 justify">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/perdanamain"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-secondary hover:underline hover:underline-offset-4"
          >
            <img
              src={GitHubLogo}
              alt="GitHub Logo"
              className="w-6 mr-2 max-h-10"
            />
            <span className="text-md">perdanamain</span>
          </a>
          <span className="text-main">|</span>
          <a
            href="https://linkedin.com/in/firmanperdana"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-secondary hover:underline hover:underline-offset-4"
          >
            <img
              src={LinkedInLogo}
              alt="GitHub Logo"
              className="w-6 mr-2 max-h-10"
            />
            <span className="text-md">/in/firmanperdana</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
