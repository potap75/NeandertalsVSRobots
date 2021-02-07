import React from "react";
import "./styles.css";
import CarouselItemSet from "./components/carouselItemSet";

export default function App() {
  return (
    <div class="container cta-100 ">
      <div class="container">
        <div class="row blog">
          <div class="col-md-12">
            <div
              id="blogCarousel"
              class="carousel slide container-blog"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#blogCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#blogCarousel" data-slide-to="1"></li>
              </ol>
              {/* <!-- Carousel items --> */}
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <CarouselItemSet />
                </div>
                <div class="carousel-item ">
                  <CarouselItemSet />
                </div>
                {/* <!--.item--> */}
              </div>
              {/* <!--.carousel-inner--> */}
            </div>
            {/* <!--.Carousel--> */}
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  );
}
