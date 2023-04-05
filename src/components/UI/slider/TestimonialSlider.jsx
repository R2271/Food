

import React from 'react'
import Slider from "react-slick"

import '../../../styles/slider.css'

import ava01 from '../../../assets/img/17.jpg'
import ava02 from '../../../assets/img/18.jpg'
import ava03 from '../../../assets/img/19.jpg'

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplay: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return <Slider {...settings}>
    <div>
        <p className="review_text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Facilis a consequuntur laborum nulla perferendis. Totam, autem! 
            Itaque sapiente doloribus velit omnis ipsa, eum consequatur eligendi 
            possimus assumenda accusantium alias dolorum?"
        </p>
        <div  className=" slider_content d-flex align-items-center gap-3">
            <img src={ava01} alt='avatar' className=" rounded" />
            <h6>Jhon Doe</h6>
        </div>
    </div>
    <div>
    <p className="review_text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Facilis a consequuntur laborum nulla perferendis. Totam, autem! 
            Itaque sapiente doloribus velit omnis ipsa, eum consequatur eligendi 
            possimus assumenda accusantium alias dolorum?"
        </p>
        <div  className=" slider_content d-flex align-items-center gap-3">
            <img src={ava02} alt='avatar2' className=" rounded" />
            <h6>Mitchell Marsh</h6>
        </div>
    </div>
    <div>
    <p className="review_text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Facilis a consequuntur laborum nulla perferendis. Totam, autem! 
            Itaque sapiente doloribus velit omnis ipsa, eum consequatur eligendi 
            possimus assumenda accusantium alias dolorum?"
        </p>
        <div className=" slider_content d-flex align-items-center gap-3">
            <img src={ava03} alt='avatar3' className=" rounded" />
            <h6>Steven Crock</h6>
        </div>
    </div>
  </Slider>
}

export default TestimonialSlider
