import React from 'react'
import styled from 'styled-components'

function Latest() {
  return (
    <Container>
        <Heading>
            <p> New Arrival</p>
            <h3>Latest Collection</h3>
        </Heading>
    </Container>
  )
}

export default Latest



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