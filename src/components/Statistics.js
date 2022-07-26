import React from 'react'
import styled from 'styled-components'

function Statistics() {
  return (
    <Section>
        <Container>
            <Heading>
              <p>Statistics</p>
              <h3>Our Statistics</h3>
            </Heading>
            
        </Container>
    </Section>
  )
}

export default Statistics

const Section  = styled.section`
    background: #fff3f3;
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

const Icon = styled.div`
  background: #dd518d;
`