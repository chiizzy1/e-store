import React from 'react'
import styled from 'styled-components'

function CustomerSay() {
  return (
    <Section>
      <Container>
        CustomerSay
      </Container>
    </Section>
  )
}

export default CustomerSay

const Section  = styled.section`
    background: lightgreen;
`

const Container = styled.div`
    width: 85%;
    max-width: 1240px;
    margin: 0 auto;
`