import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DiscountCard from './DiscountCard';

function Discounted() {

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  

  // const cards = allProducts.map(item => {
  //   return(
  //      <DiscountCard 
  //         category={item.category}
  //         price={item.price}
  //         stocked={item.stocked} 
  //         name={item.name} 
  //         image={item.image} 
  //         rating={item.rating}
  //         description={item.description}
  //     />
  //   )
  // })
  return (
    <Container>
      <Heading>
          <p>Categories</p>
          <h3>Discounted Collection</h3>
      </Heading>

      <Carousel  {...settings}>
      <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
      </Carousel>
    </Container>
  )
}

export default Discounted


const Container = styled.div`
  padding: 1.5em 0;
`
const Carousel = styled(Slider)`
  // padding: 1.5em 0;
    
  // .slick-slide {
  //     margin: 0 10px;
  // }

  // .slick-list {
  //     margin: 0 -10px;
  // }
`

const Heading = styled.div`
  padding: 2em 0;
  color: #000;
  text-align: center;
  p{
    font-size: .8em;
  }
  h3{
    font-weight: bold;
  }
`

const Card = styled.div`
  background: #fff3f3;
`
