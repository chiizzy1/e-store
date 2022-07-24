import React from 'react'
import styled from 'styled-components'
import Discounted from './Discounted'
import Latest from './Latest'
import Slider from './Slider'

function Products() {
  
  return (
    <Section>
        <Container>
          <Slider />
          <Latest />
          <Discounted />
        </Container>
    </Section>
  )
}

export default Products

const Section = styled.section`
  background: blue;
`

const Container = styled.div`
    width: 85%;
    max-width: 1240px;
    margin: 0 auto;
`
