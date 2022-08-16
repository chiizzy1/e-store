import React from 'react'
import styled from 'styled-components'

function UserCard({firstName, lastName, city, img}) {
    // console.log(img);
  return (
    <Card>
        <Padding>

            <p>Lorem ipsum, dolor sit ratione.</p>
            <Detail>
                <Image src={img} />
                <div>
                    <h4>{`${firstName}`}</h4>
                    <p>{city}</p>
                </div>
            </Detail>

        </Padding>
    </Card>
  )
}

export default UserCard

const Card = styled.div`
    background: #222;
    color: #fff;
    border: 1px solid red;
    font-size: 1.1rem;
`

const Padding = styled.div`
    padding: 2em;
    p{
        // line-height: 2px;
        // letter-spacing: 1px;
        // padding: 2em 0;
    }
`

const Detail = styled.div`
    display: flex;
    // justify-content: space-between;
    padding-top: 1.5em;

    div{
        display: flex;
        flex-direction: column;

        p{
            padding-top: 1em;
        }
    }
`

const Image = styled.img`
    height: 4em;
    width: 4em;
    border-radius: 50%;
    margin-right: 1.5em;
`
