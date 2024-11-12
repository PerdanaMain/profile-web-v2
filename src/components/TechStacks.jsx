import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardBody, Image } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TechStacks = () => {
  const stacks = [
    {
      img: "https://via.placeholder.com/100x50",
    },
    {
      img: "https://via.placeholder.com/100x50",
    },
    {
      img: "https://via.placeholder.com/100x50",
    },
    {
      img: "https://via.placeholder.com/100x50",
    },
    {
      img: "https://via.placeholder.com/100x50",
    },
    {
      img: "https://via.placeholder.com/100x50",
    },
    {
      img: "https://via.placeholder.com/100x50",
    },
  ];

  return (
    <div className="container mx-auto text-center my-24 px-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // tambahkan Autoplay di sini
        spaceBetween={50}
        slidesPerView={3}
        loop={true} // memungkinkan loop tanpa henti
        autoplay={{ delay: 1500, disableOnInteraction: false }} // konfigurasi autoplay
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {stacks.map((stack, index) => (
          <SwiperSlide key={index}>
            <Card className="py-4 bg-main border[1px] justify-center">
              <CardBody className="overflow-visible items-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={stack.img}
                />
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechStacks;
