import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import promo from './PromoProducts';
import DiscountCard from './DiscountCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Discounted() {

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
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

  

  const cards = promo.map(item => {
    return(
       <DiscountCard 
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
    <Container>
      <Heading>
          <p>Categories</p>
          <h3>Discounted Collection</h3>
      </Heading>

      <Carousel  {...settings}>
          {cards}
      </Carousel>

      <Div>
        <MoreProducts  href='#'>Load More <Arrow /> </MoreProducts>
      </Div>
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
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MoreProducts = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2em 0;
    width: 14em;
    padding: .5em 0;
    background: #eb5394;
    color: aliceblue;
    border-radius: 5px;
    text-align: center;

    &:hover{
      // background: none;
      // color: black;
      // border: 1px solid black;
      gap: 1em;
    }
`

const Arrow = styled(NavigateNextIcon)`

`