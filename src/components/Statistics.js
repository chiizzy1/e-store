import React from 'react'
import styled from 'styled-components'

function Statistics() {
  return (
    <Section>
        <Container>
            Statistics
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

const Icon = styled.div`
  background: #dd518d;
`