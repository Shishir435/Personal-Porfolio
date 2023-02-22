import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    id: 1,
    name: "Alica",
    image: AVTR1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit exercitationem quasi labore facilis explicabo eius obcaecati voluptates accusantium accusamus",
  },
  {
    id: 2,
    name: "Charl",
    image: AVTR2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit exercitationem quasi labore facilis explicabo eius obcaecati voluptates accusantium accusamus",
  },
  {
    id: 3,
    name: "Max",
    image: AVTR3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit exercitationem quasi labore facilis explicabo eius obcaecati voluptates accusantium accusamus",
  },
  {
    id: 4,
    name: "Avana",
    image: AVTR4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit exercitationem quasi labore facilis explicabo eius obcaecati voluptates accusantium accusamus",
  },
];
function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2> Testimonials</h2>

        <Swiper
          className="container testimonials__container mySwiper"
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet swiper-pagination-bullet-active`
          }}
          modules={[Pagination]}
        >
          {data.map(({ id, name, image, review }) => {
            return (
              
                <SwiperSlide key={ id} className="testimonial">
                  <div className="client__avatar">
                    <img src={image} alt={name} />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review} </small>
                </SwiperSlide>
             
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default Testimonials;
