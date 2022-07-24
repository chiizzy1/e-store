import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <Section>
        <Container>
                Footer
        </Container>
    </Section>
  )
}

export default Footer


const Section  = styled.section`
    background: darkgreen;
`

const Container = styled.div`
    width: 85%;
    max-width: 1240px;
    margin: 0 auto;
`