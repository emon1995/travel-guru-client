import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [destination, setDestination] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/destination")
      .then((res) => res.json())
      .then((data) => {
        setDestination(data);
        setLoading(false);
      });
  }, []);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeDestination = destination[activeSlideIndex];

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="carousel">
      <div className="carousel-info">
        <h1 className="carousel-title">{activeDestination.title}</h1>
        <p className="carousel-subtitle">
          {activeDestination?.description.slice(0, 200)}...
        </p>
        <Link
          to={`/travel/${activeDestination.id}`}
          className="btn btn-booking"
        >
          Booking <AiOutlineArrowRight />
        </Link>
      </div>
      <div>
        <div className="">
          <Swiper
            effect={"coverflow"}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 70,
              stretch: 10,
              depth: 200,
              modifier: 1,
              slideShadows: true,
              loop: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {destination.map((destination, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div className={`${isActive && "nameCard"} card `}>
                    <img
                      src={destination?.image}
                      alt={destination?.title}
                      className="carousel-img"
                    />
                    <div className="carousel-img-title">
                      <h2 className="card-title">{destination?.title}</h2>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
