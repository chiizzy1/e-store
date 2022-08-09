import React from 'react'
import styled from 'styled-components'

function ProductCard({category, price, stocked, name, image, rating, description}) {
  // console.log(props);
  
  return (
    <Wrap>
      <Image>
          <img src={image} alt="product" />
      </Image>
      <p>{description}</p>
      <span>{rating}</span>
      <Flex>
        <AddToCart>Add to Cart</AddToCart>
        <span>{price}</span>
      </Flex>
    </Wrap>
  )
}

export default ProductCard

const Wrap = styled.div`
  // width: 100%;
  border: 2px solid red;
  height: 300px;
  overflow: hidden;
  background: #fff3f3;
  padding: 1em;
`

const Image = styled.div`
  width: 90%;
  height: 150px;

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
  padding:.5em  0;
`

const AddToCart = styled.button`
  // width: 45px;
  color: #fff;
  background: #eb5394;
  text-align: center;
  font-size: .5rem;
  padding: .3em 1em;
  outline: none;
`