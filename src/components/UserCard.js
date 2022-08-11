import React from 'react'
import styled from 'styled-components'

function UserCard({firstName, lastName, city, img}) {
    // console.log(img);
  return (
    <Card>
        <p>Lorem ipsum, dolor sit ratione.</p>
        <Detail>
            <Image src={img} />
            <div>
                <h4>{`${firstName} ${lastName}`}</h4>
                <p>{city}</p>
            </div>
        </Detail>
    </Card>
  )
}

export default UserCard

const Card = styled.div`
    padding: 1em;
`

const Detail = styled.div`
    display: flex;

    div{
        display: flex;
        flex-direction: column;
    }
`

const Image = styled.img`
    height: 4em;
    width: 4em;
    border-radius: 50%;
`