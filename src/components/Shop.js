import React from 'react'
import styled from 'styled-components'
import Home from './Home'
import Navbar from './Navbar'
import Products from './Products'



function Shop() {
  return (
    <Container>
        <Navbar />
        <Home />
        <Products />
    </Container>
  )
}

export default Shop


const Container = styled.div`

`