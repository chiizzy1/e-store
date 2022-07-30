import React from 'react'
import styled from 'styled-components'

function CustomerSay() {
  return (
    <Section>
      <Container>
        <Heading>
          <p>Testimonials</p>
          <h3>What Clients Say</h3>
        </Heading>
      </Container>
    </Section>
  )
}

export default CustomerSay

const Section  = styled.section`
    background: lightgreen;
    padding: 1.5em 0;
`

const Container = styled.div`
    width: 85%;
    max-width: 1240px;
    margin: 0 auto;
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