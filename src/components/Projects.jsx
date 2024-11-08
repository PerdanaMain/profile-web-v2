import {
  Card,
  CardBody,
  CardHeader,
  Image,
  CardFooter,
} from "@nextui-org/react";

import ArrowUp from "../assets/icons/ArrowCircleUpRight.png";

const Projects = () => {
  const cardList = [
    {
      title: "Orange",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "$10.00",
    },
  ];

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
        {cardList.map((item, index) => (
          <Card
            className="py-4 bg-transparent justify-center border-[1px] border-main gap-2"
            key={index}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-primary text-2xl uppercase font-bold">
                {item.title}
              </p>
              <small className="text-secondary text-justify my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                libero labore perspiciatis minima eligendi, exercitationem
                consequuntur vel porro beatae tempore.
              </small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl w-full h-auto max-h-screen bg-cover bg-center"
                src="https://nextui.org/images/hero-card-complete.jpeg"
              />
            </CardBody>
            <CardFooter>
              <div className="flex justify-between items-center">
                <button className="bg-transparent text-secondary px-4 py-2 rounded-lg hover:underline hover:underline-offset-4 hover:decoration-[3px] hover:decoration-[#BD904D] flex items-center group">
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
      <div className="flex justify-between items-center">
        <button className="bg-transparent border-[1px] border-main text-white px-4 py-2 rounded-lg hover:bg-primary">
          See More Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
