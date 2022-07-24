import React from 'react'
import styled from 'styled-components'

const   Cards = []

function Slider() {
  return (
    <Carousel>
        {Cards}
    </Carousel>
  )
}

export default Slider

const Carousel = styled.div`
    background: red;
`

