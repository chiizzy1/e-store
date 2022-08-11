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
        <p className='price'>{price}</p>
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
  // box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  span{
    font-size: 12px;
  }
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

  .price{
    font-weight: bold;
    font-size: 1.4em;
  }
`

const AddToCart = styled.button`
  // width: 45px;
  color: #fff;
  background: #eb5394;
  text-align: center;
  font-size: .5rem;
  padding: .4em 3em;
  outline: none;
    border-radius: 4px;
    font-size: 16px;                     
    cursor: pointer;
    
`