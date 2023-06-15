import React, { useRef, useState } from "react";
import "../../Styles/Testemonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testemonial = () => {
  return (
    <>
      <div className="Testemonial_MainContaier">
        <div className="TEST_circle"></div>
        <div className="Testemonial_headText">TESTEMONIALS</div>
        <div className="Testemonial_SubContaier">
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            loop="true"
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="test_slide">
              <div className="test_slide_imageDiv">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="test_image_slide"
                />
                <div className="text_slide_image_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, ipsum nam natus minus suscipit eum veniam dicta ut
                  quod recusandae officia ratione molestiae.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="test_slide">
              <div className="test_slide_imageDiv">
              {/* <div className="test_slide_imageContanier"> */}

                <img
                  src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="test_image_slide"
                  />
                  {/* </div> */}
                <div className="text_slide_image_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, ipsum nam natus minus suscipit eum veniam dicta ut
                  quod recusandae officia ratione molestiae.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="test_slide">
              <div className="test_slide_imageDiv">
                <img
                  src="https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="test_image_slide"
                />
                <div className="text_slide_image_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, ipsum nam natus minus suscipit eum veniam dicta ut
                  quod recusandae officia ratione molestiae.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="test_slide">
              <div className="test_slide_imageDiv">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="test_image_slide"
                />
                <div className="text_slide_image_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, ipsum nam natus minus suscipit eum veniam dicta ut
                  quod recusandae officia ratione molestiae.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="test_slide">
              <div className="test_slide_imageDiv">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="test_image_slide"
                />
                <div className="text_slide_image_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, ipsum nam natus minus suscipit eum veniam dicta ut
                  quod recusandae officia ratione molestiae.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="test_slide">
              <div className="test_slide_imageDiv">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="test_image_slide"
                />
                <div className="text_slide_image_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, ipsum nam natus minus suscipit eum veniam dicta ut
                  quod recusandae officia ratione molestiae.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testemonial;
