import React from 'react'
import Helmet from '../components/Helmet/Helmet.js'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import heroImg from '../assets/img/hero.jpg'
import '../styles/hero.css'
import { Link } from "react-router-dom"
import Category from '../components/UI/category/Category'
import '../styles/home.css'
import featureImg01 from '../assets/img/115.jpg'
import featureImg02 from '../assets/img/116.png'
import featureImg03 from '../assets/img/118.png' 
import Product from '../../../food/src/face-data/Product.js'
import ProductCard from '../components/UI/product-card/ProductCard'
import  { useEffect, useState } from 'react'
import whyImg from '../assets/img/15.jpg'
import network from '../assets/img/16.jpg'
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx'

const featureData = [
  {
    title:'Quick Delivery',
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit," 
  },
  {
    title:'Super Dine In',
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit," 
  },
  {
    title:'Easy Pick up',
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit," 
  },
  
]

const Home = () => {

  const [category, setcategory] = useState('All')
  const [allProduct, setAllProduct] = useState(Product)

  const [hotPizza, setHotPizza] = useState([])

  useEffect(()=>{
    const filteredPizza = Product.filter(item=> item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0,4)

    setHotPizza(slicePizza)
  },[])

  useEffect(()=>{

    if(category === 'All' ){
      setAllProduct(Product)
    }

    if(category === 'Burger'){
      console.log('-------')
      const filteredProduct = Product.filter(item=> item.category ===
        'Burger')
        console.log(filteredProduct)

        setAllProduct(filteredProduct)
    }

    if(category === 'Pizza'){
      const filteredProduct = Product.filter(item=> item.category ===
        'Pizza')

        setAllProduct(filteredProduct)
    }

    if(category === 'Slice'){
      const filteredProduct = Product.filter(item=> item.category ===
        'Slice')

        setAllProduct(filteredProduct)
    }

  },[category]);

  return <Helmet title='Home'>
  
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero_content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero_title">
                  <span>HUNGRY?</span> Just wait <br/>food at
                  <span> your door</span>
                </h1>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus fringilla at velit eu aliquam. 
                </p>
                <div className="hero_btns d-flex align-items-center 
                gap-5 mt-4">
                    <button className="order_btn d-flex align-items-center
                    justify-content-between">Order Now<i class="ri-arrow-right-s-line"></i></button>

                    <button className="all_foods-btn"><Link to='/foods'>See All foods</Link></button>
                </div>
                <div className=" hero_service d-flex align-items-center gap-5 mt-5">
                  <p className=" d-flex align-items-center gap-2">
                    <span className="shipping_icon"><i class="ri-car-line"></i></span>
                     No shipping charge</p>

                  <p className=" d-flex align-items-center gap-2">
                    <span className="shipping_icon"><i class="ri-shield-check-line"></i></span>
                     100% Secure checkout</p>
                </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero_img">
              <img src={heroImg} alt="hero-img" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="pt-0">
      <Category />
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h5 className="feature_subtitle mb-4 mt-4">What we serve</h5>
            <h2 className="feature_title">Just sit back at home</h2>
            <h2 className="feature_title">We will
              <span> take care </span>
            </h2>
            <p className=" mb-1 mt-4 feature_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro est iure eius</p>
             <p className="feature_text">incidunt dolore at provident aliquam pariatur fugit 
             reiciendis autem in soluta magnam tempore modi dolor{" "}
            </p>
          </Col>

          {
            featureData.map((item,index)=>(
              <Col lg='4' md='4' sm='6' key={index} className="mt-5">
              <div className="feature_item text-center px-5 py-3"> 
                  <img src={item.imgUrl} alt="feature-img" 
                  className="w-25 mt-4 mb-3" />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
              </div>
            </Col>
            ))
          }  
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h2>Popular Foods</h2>
          </Col>
          <Col lg='12' className=" ">
             <div className="food_category">
                <button className="all_btn foodBtnActive" 
                onClick={() => setcategory('All')}>All</button>
                <button className=' d-flex align-items-center gap-4' onClick={() => setcategory('Burger')}>
                  {/* <img src={foodCategoryImg01} alt="foodCategoryImg01" /> */}
                  Burger
                </button>
                <button className=" d-flex align-items-center gap-4" onClick={() => setcategory('Slice')}>
                  {/* <img src={foodCategoryImg02} alt="foodCategoryImg02" /> */}
                  Slice
                </button>
                <button className=" d-flex align-items-center gap-4" onClick={() => setcategory('Pizza')}>
                  {/* <img src={foodCategoryImg03} alt="foodCategoryImg03" /> */}
                  Pizza
                </button>
             </div>
          </Col>

            {
              allProduct.map(item=>(
                <Col lg='3' md='4' key={item.id} className='mt-5 mb-5'>

            <ProductCard item={item} />
          </Col>
              ))
            }
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <img src={whyImg} alt='Food' className="w-50" />
          </Col>

          <Col lg='6' md='6'>
            <div className="why_tasty_treat">
              <h2 className="why_tasty_title mg-4">Why <span>Tasty Treat?</span> </h2>
              <p className="tasty_treat-desk">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper sapien, 
              ut rutrum leo. Vestibulum iaculis ac erat eu faucibus.
              Vestibulum ullamcorper massa sodales lectus molestie, eget varius leo bibendum. 
              </p>

              <ListGroup className="mt-5">
                <ListGroupItem className="border-0 ps-0">
                <p className=" choose_us-title d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i>
                Fresh and Tasty Food</p>
                <p className="choose_us-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                <p className=" choose_us-title d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i>
                Quality support</p>
                <p className="choose_us-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                <p className=" choose_us-title d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i>
                Order from any Location{" "}</p>
                <p className="choose_us-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg='12' className="text-center mb-5">
             <h2>Hot Pizza</h2>
          </Col>
          {
            hotPizza.map(item=>(
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
           <Col lg='6' md='6'>
            <div className="testimonial">
            <h5 className="testimonial_subtitle mb-4">Testimonial</h5>
            <h2 className="testimonial_title mb-4">
              What our<span>customers</span>are saying
            </h2>
            <p className="testimonial_desc">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Aliquam quis semper sapien, ut rutrum leo. 
            Vestibulum iaculis ac erat eu faucibus.
            </p>
            <TestimonialSlider/>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <img src={network} alt="network" className="w-100"/>
          </Col>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Home
