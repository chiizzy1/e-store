import React from 'react'
import styled from 'styled-components'

function Latest() {
  return (
    <Container>
        <Heading>
            <p> New Arrival</p>
            <h3>Latest Collection</h3>
        </Heading>

        <Cards>
          <Div>
            <Card1>
            OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
          OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
          OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
          OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
            </Card1>

            <Card2>
            OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
          OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
          OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
          OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
            </Card2>
          </Div>

          <Card3>c
          OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
          OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
          OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
          OFFWHITE x AIRFORCE 1New  LUXURY NAKED WOLFE Sneakers 🔥🔥🔥🔥
          </Card3>

        </Cards>
    </Container>
  )
}

export default Latest



const Container = styled.div`
  padding: 1.5em 0;
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


const Cards = styled.div`
  display: flex;
  gap: 5em;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const Card1 = styled.div`
  background: orange;
`

const Card2 = styled.div`
  background: red;
`
const Card3 = styled.div`
  background: green;
`
