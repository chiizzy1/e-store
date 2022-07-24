import React from 'react'
import styled from 'styled-components'
import CustomerSay from './CustomerSay'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Products from './Products'
import Statistics from './Statistics'



function Shop() {
  return (
    <Container>
        <Navbar />
        <Home />
        <Products />
        <Statistics />
        <CustomerSay />
        <Footer />
    </Container>
  )
}

export default Shop


const Container = styled.div`

`