import React from "react";
import "../styles.css";
import CarouselItem from "./carouselItem";

export default function CarouselItemSet() {
  return (
    <div class="row">
      <div class="col-md-3">
        <CarouselItem />
      </div>
      <div class="col-md-3">
        <CarouselItem />
      </div>
      <div class="col-md-3">
        <CarouselItem />
      </div>
      <div class="col-md-3">
        <CarouselItem />
      </div>
      {/* <!--.row--> */}
    </div>
  );
}
