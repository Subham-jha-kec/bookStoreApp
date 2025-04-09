// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";


import list from "../list.json";
function Freebook() {
  const filterData = list.filter((data) => data.category === "free");
  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

<div>
<h1 className="font-semibold text-xl pb-2" >Free  Offered Course</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique voluptatibus, esse id maiores fugit fuga repellendus ratione nobis animi dolores doloremque commodi accusamus. Voluptatibus et natus eaque eveniet voluptate!</p>
</div>
    
    <div>
    <Slider {...settings}>
          {filterData.length > 0 ? (
            filterData.map((item) =>
               <Cards item={item} key={item.id} />)
          ) : (
            <p>No Courses Available</p>
          )}
        </Slider>

    </div>
    </div>
    </>
  );
}
// console.log(hello);
export default Freebook;



 


