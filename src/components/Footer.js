import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';


function Footer() {
  return (
    <Section>
        <Container>

          <Box>

            <BoxA>
              <h3>Clasic <span>Wears</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ad?</p>
              <SocialIcons>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <WhatsAppIcon />
              </SocialIcons>
            </BoxA>

            <BoxB>
              <h3>Quick Links</h3>
              <ul>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Location</li>
                <li>Address</li>
                <li>Contacts</li>
              </ul>
            </BoxB>

            <BoxC>
              <h3>Category</h3>
              <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Best Sellers</li>
                <li>New Arrivals</li>
              </ul>
            </BoxC>

            <BoxD>
              <h3>My Account</h3>
              <ul>
                <li>Accounts</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Order History</li>
                <li>Order Tracking</li>
              </ul>
            </BoxD>

            <BoxE>

              <div>
                <h3>Contact Info</h3>
                <div> <span><LocationOnIcon/></span>  Somewhere on milky way galaxy</div><br />
                <div> <span><MailIcon/></span>  classic@wears.com</div><br />
                <div> <span><CallIcon/></span>  0123456789</div><br />
              </div>
              
              <div>
                <h4>WE ACCEPT</h4>

              </div>

            </BoxE>

          </Box>
          
        </Container>
    </Section>
  )
}

export default Footer


const Section  = styled.section`
    background: #fff3f3;
`

const Container = styled.div`
    width: 85%;
    max-width: 1240px;
    margin: 0 auto;
`

const Box = styled.div`
  padding: 2em 0;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat( auto-fit, minmax(220px, auto) );
`

const BoxA = styled.div``

const SocialIcons = styled.div`
  color: #eb5394;
`

const BoxB = styled.div``

const BoxC = styled.div``

const BoxD = styled.div``

const BoxE = styled.div`
  span{
    color: #eb5394;
  }
`