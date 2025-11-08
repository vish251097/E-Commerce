import React from "react";
import SectionHeading from "./SectionHeading/SectionHeading";
import Card from "../Card/Card";
import Jeans from "../../assets/img/Jeans.png";
import Shirts from "../../assets/img/Shirts.png";
import Tshirt from "../../assets/img/T-Shirts.png";
import dresses from "../../assets/img/Dresses.png";
import Carousel from "react-multi-carousel";
import { responsive } from "../../utils/Section.constants";
import "./NewArrivals.css";
const items = [
  {
    title: "Jeans",
    imagePath: Jeans,
  },
  {
    title: "Shirts",
    imagePath: Shirts,
  },
  {
    title: "T-Shirts",
    imagePath: Tshirt,
  },
  {
    title: "Dresses",
    imagePath: dresses,
  },
  {
    title: "Joggers",
    imagePath: require("../../assets/img/joggers.jpg"),
  },
  {
    title: "Kurtis",
    imagePath: require("../../assets/img/kurtis.jpg"),
  },
];

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={"New Arrivals"} />
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass={"react-slider-custom-item"}
        className="px-8"
      >
        {items &&
          items?.map((item, index) => (
            <Card
              key={item?.title + index}
              title={item.title}
              imagePath={item.imagePath}
            />
          ))}
      </Carousel>
    </>
  );
};

export default NewArrivals;
