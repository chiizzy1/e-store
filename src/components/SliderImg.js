import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import allProducts from './allProducts';
import ProductCard from './ProductCard';


// `npm i --save-dev @types/react-slick`
function SliderImg() {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // };

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const cards = allProducts.map(item => {
    return(
      <ProductCard 
          category={item.category}
          price={item.price}
          stocked={item.stocked} 
          name={item.name} 
          image={item.image} 
          rating={item.rating}
          description={item.description}
      />
    )
  })
  
  
  return (
    <Carousel  {...settings}>
        {cards}
    </Carousel>
  )
}

export default SliderImg

const Carousel = styled(Slider)`
  padding: 1.5em 0;
    
  .slick-slide {
      margin: 0 10px;
  }

  // .slick-list {
  //     margin: 0 -10px;
  // }
`

