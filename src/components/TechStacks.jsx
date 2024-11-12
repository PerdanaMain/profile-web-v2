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
import { stacks } from "../libs/TechStackList";

const TechStacks = () => {
  return (
    <div className="container mx-auto text-center my-24 px-4 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={3.5} // Mengatur agar kartu terakhir terpotong setengah
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          350: {
            slidesPerView: 2.5,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 3.5,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 5.5,
          },
        }}
      >
        {stacks.map((stack, index) => (
          <SwiperSlide key={index}>
            <Card className="py-4 bg-main border-[1px] justify-center">
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
