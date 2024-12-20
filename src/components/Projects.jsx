import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import ArrowUp from "../assets/icons/ArrowCircleUpRight.png";
import { projects } from "../libs/ProjectLists";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Projects = ({ isPage }) => {
  const cardLists = !isPage ? projects.slice(0, 3) : projects;
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-24 px-4 text-center">
      <h2 className="text-5xl font-semibold text-primary mb-3">
        Featured Projects
      </h2>
      <p className="text-secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam optio est
        iusto tenetur distinctio commodi quibusdam corporis quas, excepturi
        dolor.
      </p>

      {/* Grid Responsif */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-10">
        {cardLists.map(({ title, slug, thumbnail }, index) => (
          <Card
            className="py-4 bg-transparent justify-center border-[1px] border-main gap-2"
            key={index}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-primary text-2xl uppercase font-bold">
                {title}
              </p>
              <small className="text-secondary text-justify my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                libero labore perspiciatis minima eligendi, exercitationem
                consequuntur vel porro beatae tempore.
              </small>
              <div className="flex justify-center space-x-4 mt-3">
                <a
                  href="https://github.com/perdanamain"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-secondary hover:underline hover:underline-offset-4"
                >
                  <span className="text-md">perdanamain</span>
                </a>
                <a
                  href="https://linkedin.com/in/firmanperdana"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-secondary hover:underline hover:underline-offset-4"
                >
                  <span className="text-md">/in/firmanperdana</span>
                </a>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible">
              <img
                src={thumbnail}
                alt="Project showcase"
                className="block object-cover w-full max-w-full max-h-[200px] mx-auto rounded-xl shadow-lg"
              />
            </CardBody>
            <CardFooter>
              <div className="flex justify-between items-center mt-[-20px]">
                <button
                  className="bg-transparent text-secondary px-4 py-2 rounded-lg hover:underline hover:underline-offset-4 hover:decoration-[3px] hover:decoration-[#BD904D] flex items-center group"
                  onClick={() => navigate(`/project/${slug}`)}
                >
                  <span>See More</span>
                  <img
                    src={ArrowUp}
                    alt="Arrow Up"
                    className="w-4 ml-2 inline group-hover:translate-x-1 group-hover:brightness-110 transition-transform duration-300"
                  />
                </button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      {!isPage && (
        <div className="flex justify-between items-center">
          <button
            className="bg-transparent border-[1px] border-main text-white px-4 py-2 rounded-lg hover:bg-primary"
            onClick={() => navigate("/project")}
          >
            See More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
