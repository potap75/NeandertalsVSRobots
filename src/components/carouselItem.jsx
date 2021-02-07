import React from "react";
import "../styles.css";
import Image from "./image";
import Title from "./title";
import Author from "./author";
import Comment from "./comment";
import Text from "./text";
import Button from "./button";

export default function CarouselItem() {
  return (
    <div class="item-box-blog">
      <div class="item-box-blog-image">
        {/* <!--Image--> */}
        <Image />
      </div>
      <div class="item-box-blog-body">
        {/* <!--Heading--> */}
        <Title />
        {/* <!--Data--> */}
        <div class="item-box-blog-data" style={{ padding: `px 15px;` }}>
          <p>
            <Author />
            <Comment />
          </p>
        </div>
        {/* <!--Text--> */}
        <div class="item-box-blog-text">
          <Text />
        </div>
        <Button />
        {/* <!--Read More Button--> */}
      </div>
    </div>
  );
}
