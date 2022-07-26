import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Section>
      <Container>
        <Wrap>
          <h1>Classic With <br /> Natural Twist</h1>
          <p>Premium Designs at affordable prices</p>
          <SignUp>Sign Up</SignUp>
        </Wrap>
        <Image src='images/nike-bg3.png' alt='nike shoe'/>
      </Container>
    </Section>
  )
}

export default Home

const Section = styled.section`
  min-height: calc(100vh - 80px);
  position: relative;
  overflow-x: hidden;
  background: #fff3f3;
  display: flex;
  align-items: center;
`
// background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;



const Container = styled.div`
  width: 85%;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    font-size: 3.5em;
    font-weight: 700;
    line-height: 1.3em;
    letter-spacing: 2px;
  }
  p{
    padding: 1.5em 0;
  }
`
const SignUp = styled.a`
  width: 24em;
  padding: .5em 0;
  background: #eb5394;
  color: aliceblue;
  border-radius: 5px;
  text-align: center;
`
const Image = styled.img`
  background: none;
`