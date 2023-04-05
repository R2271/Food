import React, { useState } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import logo from '../../assets/img/logo.jpg'

import '../../styles/footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {

  

  return <footer className="footer">
          <Container>
            <Row>
              <Col lg='3' md='4' sm='6'>
              <div className="footer_logo text-start">
                <img src={logo} alt="logo" />
                <h5 className="footer_title">Tast of Best</h5>
                <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
              </Col>
                
              <Col lg='3' md='4' sm='6'>
              <h5 className="footer_title">Delivery Time</h5>
                <ListGroup className="delivery_time-list">
                  <ListGroupItem className="delivery_time-item border-0 ps-0">
                    <span>Sunday - Thursday</span>
                    <p>10:00am - 11:00pm</p>
                  </ListGroupItem>

                  <ListGroupItem className="delivery_time-item border-0 ps-0">
                    <span>Friday - Saturday</span>
                    <p>Off day</p>
                  </ListGroupItem>
                </ListGroup>
              </Col>

              <Col lg='3' md='4' sm='6'>
              <h5 className="footer_title">Contact</h5>
                <ListGroup className="delivery_time-list">
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                    <p>Location: Nikol</p>
                  </ListGroupItem>

                  <ListGroupItem className="delivery_time-item border-0 ps-0">
                    <span>Phone: 07984562445</span>
                  </ListGroupItem>

                  <ListGroupItem className="delivery_time-item border-0 ps-0">
                    <span>Email: fooddelivery@gmail.com</span>
                    
                  </ListGroupItem>
                </ListGroup>
              </Col>

              <Col lg='3' md='4' sm='6'>
              <h5 className="footer_title">Newsletter</h5>
              <p>Subscribe our Newsletter</p>
              <div className="newsletter">
                  <input type="email" name='email' placeholder="Enter your email" />
                  <span><i class="ri-send-plane-line" ></i></span>
              </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col lg='6' md='6'>
                <p className="copyright_text">@Copyright - 2023, website made by Ravi Borda. All
                  Rights Reserved.
                </p>
              </Col>
              <Col lg='6' md='6'>
                <div className="social_links d-flex align-item-center gap-3 justify-content-end">
                    <p className="m-0">Follow: </p>
                    <span><Link to='https://www.facebook.com/'>
                      <i class="ri-facebook-line"></i></Link></span>

                      <span><Link to='https://www.instagram.com/'>
                      <i class="ri-instagram-line"></i></Link></span>

                      <span><Link to='https://www.youtube.com/'>
                      <i class="ri-youtube-line"></i></Link></span>
                </div>
              </Col>
            </Row>
          </Container>
  </footer>
}

export default Footer    