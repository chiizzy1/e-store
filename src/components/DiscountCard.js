import React from 'react'
import styled from 'styled-components'


function DiscountCard({category, price, stocked, name, image, rating, description}) {
    // console.log(props);
    
    return (
      <Wrap>
        {/* <Image>
            <img src={image} alt="product" />
        </Image>
        <p>{description}</p>
        <span>{rating}</span>
        <Flex>
          <AddToCart>Add to Cart</AddToCart>
          <span>{price}</span>
        </Flex> */}
      </Wrap>
    )
  }

export default DiscountCard

const Wrap = styled.div`
  // width: 100%;
  border: 2px solid red;
  height: 300px;
  overflow-x: hidden;
  background: #fff3f3;
  // padding: 0 1em;
`

const Image = styled.div`
    width: 100%;
    height: 190px;

    img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    }
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const AddToCart = styled.button`
    // width: 45px;
    color: #fff;
    background: #eb5394;
    height: 20px;
    text-align: center;
    font-size: .5rem;
    padding: .3em 1em;
`