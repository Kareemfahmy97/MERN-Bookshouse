import React from "react";
import { Navigation, Pagination, A11y, FreeMode, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css/effect-fade";
import "swiper";
import "swiper/css/bundle";

const HeaderSwiper = ({ headerArray }) => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[A11y, FreeMode, Autoplay]}
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="container"
        
        freeMode
        a11y
      >
        <SwiperSlide style={{padding:"0px 20%"}}>
          <h1 className="fw-bold pb-3 text-center">BooksHouse</h1>
  <p className="pb-5 fs-5"><b>Bookshouse</b> is definitely the best place to help you start filling your shelves with all the books you love!
In <b>Bookshouse</b>, we believe in the power of a single book which is why we have made the process of navigating through thousands of books as easy as a scroll of a finger!
( <b>Bookshouse</b> provides thousands of books worldwide at the scroll of your finger! )</p>

<p className="fs-5"><b>Bookshouse</b> believes in talent which is why we offer every writer an equal chance at recognition.
Display your book on Bookshouse and get the chance to have it exclusively reviewed by our team members.
<b>Bookshouse</b> will help you provide readers of the world with the most honest reviews of your book!</p>
</SwiperSlide>
        {/* <Mapping header data/> */}
        {headerArray.map((item, index) => {
          return (
            <SwiperSlide className="bg-transparent" key={index}  style={{padding:"0px 20%"}}>
              <div className="hero__content">
                <h2 className="hero__subtitle mb-5 fw-bold">Our Services</h2>
                <h4 className="pb-5">{item.title}</h4>
                <p className="pb-5">{item.desc}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="buy__btn mb-5 btn btn-warning"
                >
                  <Link to={item.path}>{item.btn}</Link>
                </motion.button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeaderSwiper;
