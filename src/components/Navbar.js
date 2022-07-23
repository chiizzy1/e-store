import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
      

function Navbar() {
  return (
    <Header>
        <Container>
            <Nav>
                <Logo>Classic Wears</Logo>
                <Ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li> 
                    
                    {/* <Button variant="contained">Hello World</Button> */}
                </Ul>
                <ShoppingCartIcon />
            </Nav>
        </Container>
    </Header>
  )
}

export default Navbar

const Header = styled.header`
    background: white;
    height: 80px;
    display: flex;
    align-items: center;
`

const Container = styled.div`
    width: 85%;
    max-width: 1240px;
    margin: 0 auto;
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    color: black;
    // padding: 1.5em 0;
`

const Logo = styled.span``


const Ul = styled.ul`
    display: flex;
    align-items: center;
    // justify-content: center;
    li{
        list-style: none;
        padding: 0 2em;
        // border-bottom: 1px solid rgba(0,0,0,.2);
    }
`

