import React from 'react'
import styled from 'styled-components'

function Discounted() {
  return (
    <Container>
      <Heading>
          <p>Categories</p>
          <h3>Discounted Collection</h3>
      </Heading>
    </Container>
  )
}

export default Discounted

const Container = styled.div`
  padding: 1.5em 0;
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