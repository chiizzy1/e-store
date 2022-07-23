import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Section>
      <Container>
        <h1>Hello</h1>
      </Container>
    </Section>
  )
}

export default Home

const Section = styled.section`
  min-height: calc(100vh - 80px);
  position: relative;
  overflow-x: hidden;
  overflow-x: hidden;
  color: green;
  background: skyblue;
`

const Container = styled.div`
  width: 85%;
  max-width: 1240px;
  margin: 0 auto;
`