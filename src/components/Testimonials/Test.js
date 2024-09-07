import React from "react";
import { useState } from 'react';
import "./Test.css";
import Carousel from "react-bootstrap/Carousel";

import hrithikRoshan from "./hrithikRoshan.jpg";
import tS from "./tS.jpeg";
import vJ from "./vJ.jpeg";

export default function Test() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <div className="carouselAll">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <h2 className="testimonial-text">
              I no longer have to think about my diet and workout splits. I've
              found the coolest trainer in the market. Woah!
            </h2>
            <img
              style={{ width: "10%", borderRadius: "100%", margin: "20px" }}
              src={hrithikRoshan}
              className="testimonial-img"
              alt="Hrithik Kushan"
            />
            <em>Hrithik Kushan, India</em>
          </Carousel.Item>
          <Carousel.Item>
            <h2 className="testimonial-text">
              I have improved so much since Baaghi. Thanks to GymLions!
            </h2>
            <img
              style={{ width: "10%", borderRadius: "100%", margin: "20px" }}
              className="testimonial-img"
              src={tS}
              alt="Liger Shroff"
            />
            <em>Liger Shroff, India</em>
          </Carousel.Item>
          <Carousel.Item>
            <h2 className="testimonial-text">
              I am getting close to my dream physique and it is happening after I joined GymLions.
            </h2>
            <img
              style={{ width: "10%", borderRadius: "100%", margin: "20px" }}
              className="testimonial-img"
              src={vJ}
              alt="Electric Jamwaal"
            />
            <em>Electric jamwaal, India</em>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
