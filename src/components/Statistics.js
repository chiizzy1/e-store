import React from 'react'
import styled from 'styled-components'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


function Statistics() {
  return (
    <Section>
        <Container>
            <Heading>
              <p>Statistics</p>
              <h3>Our Statistics</h3>
            </Heading>

            <Wrap>
              <Div>
                <IconA />
                <h4>Easy Order System</h4>
                <p>Shopping online has never been easier</p>
              </Div>

              <Div>
                <IconB />
                <h4>On Time Delivery</h4>
                <p>We know how precious time is so we deliver promptly</p>
              </Div>

              <Div>
                <IconC />
                <h4>100% Money Back Guarantee</h4>
                <p>Have any complaint about our product? get your money back with ease.</p>
              </Div>

              <Div>
                <IconD />
                  <h3>24/7 Online Support</h3>
                  <p>We're always here to take your order and resolve any issues</p>
              </Div>

            </Wrap>
            
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

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IconA = styled(CreditScoreIcon)`
  background: #dd518d;
`
const IconB = styled(PriceCheckIcon)`
  background: #dd518d;
`
const IconC = styled(LocalShippingIcon)`
  background: #dd518d;
`
const IconD = styled(SupportAgentIcon)`
  background: #dd518d;
`
