import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import styled from 'styled-components'
import UserCard from './UserCard';

function CustomerSay() {

  const [users, setUsers] =  useState([])

  useEffect(function() {
    fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(data => setUsers(data.results) )
    }, [])

  // console.log(users);
  const userData = users.map(user => {
    return(
      <UserCard 
        firstName={user.name.first}
        lastName={user.name.last}
        city={user.location.city}
        img={user.picture.thumbnail}
      />
    )
  })

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  

  return (
    <Section>
      <Container>
        <Heading>
          <p>Testimonials</p>
          <h3>What Clients Say</h3>
        </Heading>
        <Div>
          <Slider {...settings}>
            {userData}
          </Slider>
        </Div>
      </Container>
    </Section>
  )
}

export default CustomerSay

const Section  = styled.section`
    background: lightgreen;
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

const Div = styled.div`

`