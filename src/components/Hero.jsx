import GitHubLogo from "../assets/icons/GithubLogo.png";
import EmailLogo from "../assets/icons/EnvelopeSimple.png";
import LinkedInLogo from "../assets/icons/LinkedinLogo.png";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 px-4 text-center bg-transparent">
      <div className="mx-auto max-w-4xl h-auto border-none">
        {/* Gunakan ukuran font responsif */}
        <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-10">
          Perdana Main
        </h1>
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
          className="inline-block px-6 py-[13px] mt-3 mr-4 text-lg font-semibold text-secondary bg-[#697565] rounded-lg hover:bg-[#A77D3D] transition-all duration-200"
        >
          about
        </a>

        <a
          href="#projects"
          className="inline-block px-5 py-3 mt-3 text-lg font-semibold text-secondary border-[1px] rounded-lg hover:bg-[#A77D3D] transition-all duration-200"
        >
          resume
        </a>
      </div>
      <div className="my-2 justify">
        <div className="flex justify-center space-x-4">
          <div className="text-secondary text-center">
            <a
              href="#projects"
              className="inline-block p-[2px] mt-3 text-lg font-semibold text-secondary bg-[#697565] rounded-full hover:bg-[#A77D3D] transition-all duration-200"
            >
              <img src={GitHubLogo} alt="GitHub Logo" className="w-5 mx-auto" />
            </a>
            <span className="block text-sm">Github</span>
          </div>

          <div className="text-secondary text-center">
            <a
              href="#projects"
              className="inline-block p-[2px] mt-3 text-lg font-semibold text-secondary bg-[#697565] rounded-full hover:bg-[#A77D3D] transition-all duration-200"
            >
              <img
                src={LinkedInLogo}
                alt="Linked In Logo"
                className="w-5 mx-auto"
              />
            </a>
            <span className="block text-sm">Linked In</span>
          </div>

          <div className="text-secondary text-center">
            <a
              href="#projects"
              className="inline-block p-[2px] mt-3 text-lg font-semibold text-secondary bg-[#697565] rounded-full hover:bg-[#A77D3D] transition-all duration-200"
            >
              <img src={EmailLogo} alt="Email Logo" className="w-5 mx-auto" />
            </a>
            <span className="block text-sm">Email</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
