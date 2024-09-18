import React from "react";
import { Carousel } from "flowbite-react";
import { carouselTheme } from "../../themes/index";
import "./style.scss";

export default function index() {
  return (
    <section className="hero pt-[130px]">
      <div className="container">
        <h1 className="text-[#87CEEB] text-[60px] font-[700] text-center">
          CRYPTOFOLIO WATCH LIST
        </h1>
        <p className="text-[#A9A9A9] text-center text-[14px] font-[500]">
          Get all the Info regarding your favorite Crypto Currency
        </p>

        <div className="pt-[30px] pb-[20px]">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel theme={carouselTheme} slideInterval={2000}>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
