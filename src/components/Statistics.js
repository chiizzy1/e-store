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
                <IconCase><IconA /></IconCase>
                
                <h4>Easy Order System</h4>
                <p>Shopping online has never been easier</p>
              </Div>

              <Div>
                <IconCase><IconB /></IconCase>
                
                <h4>On Time Delivery</h4>
                <p>We know how precious time is so we deliver promptly</p>
              </Div>

              <Div>
                <IconCase><IconC /></IconCase>
                
                <h4>100% Money Back Guarantee</h4>
                <p>Have any complaint about our product? get your money back with ease.</p>
              </Div>

              <Div>
                <IconCase><IconD /></IconCase>
                
                  <h4>24/7 Online Support</h4>
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
    width: 75%;
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
  display: grid;
  gap: 3em;
  grid-template-columns: repeat( auto-fit, minmax(220px, auto) );
  margin-bottom: 2em;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h4{
    padding: .4em 0 .8em 0;
  }
`

const IconCase = styled.div`
  background: #dd518d;
  padding: 7px;
`

const IconA = styled(CreditScoreIcon)`
  color: #fff;
  font-size: 2em;
`
const IconB = styled(PriceCheckIcon)`
  color: #fff;
  font-size: 2em;
`
const IconC = styled(LocalShippingIcon)`
  color: #fff;
  font-size: 2em;
`
const IconD = styled(SupportAgentIcon)`
  color: #fff;
  font-size: 2em;
`
