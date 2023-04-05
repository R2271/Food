import React from 'react'
import Product from '../../src/face-data/Product'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row , Col } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'
import '../styles/product.details.css'
import ProductCard from '../components/UI/product-card/ProductCard'
import { useEffect, useState } from 'react'



const FoodDetails = () => {
    const [tab, setTab] = useState('desc')
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = Product.find(product=> product.id === id)
    const [previewImg, setPreviewImg] = useState(product.image01)
    const {title, price, category, desc, image01} = product
    const relatedProduct = Product.filter(item=> category=== item.category)
    const addItem = ()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        }))
    }

    useEffect(()=>{
        setPreviewImg(product.image01)
    },[product])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[product])
  return <Helmet title='Product-1'>
    <CommonSection title={title} />

    <section>
        <Container>
            <Row className="mt-5 mb-5">
                <Col lg="2" md="2">
                    <div className="product_images">
                        <div className="img_item mb-3" onClick={() => setPreviewImg(product.image01)}>
                           <img src={product.image01}  alt='productImage' className="w-50" />                         
                        </div>
                        <div className="img_item mb-3" onClick={() => setPreviewImg(product.image02)}>
                           <img src={product.image02}  alt='productImage' className="w-50" />                         
                        </div>
                        <div className="img_item mb-3" onClick={() => setPreviewImg(product.image03)}>
                           <img src={product.image03}  alt='productImage' className="w-50" />                         
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="4">
                    <div className="product_main-image">
                        <img src={previewImg}  alt='productImage' className="w-100" />      
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="single_product-content">
                        <h2 className="product_title mb-3">{title}</h2>
                        <p className="product_price">{" "}
                            Price: <span>Rs{price}</span></p>
                        <p className="category mb-5">
                            Category: <span> {category}</span></p>

                        <button className="addTOCart_btn" onClick={addItem}>Add to Cart</button>
                    </div>
                </Col>
                <Col lg='12'>
                    <div className="tab d-flex align-items-center gap-3 py-2">
                        <h6 className='tab_active' onClick={()=> setTab('desc')}>Description</h6>
                        <h6 onClick={()=> setTab('rev')}>Review</h6>
                    </div>

                    {
                        tab === 'desc' ? <div className="tab_content">
                        <p>
                            {desc}
                        </p>
                    </div> : <div className="tab_form">
                        <div className='review_text'>
                            <p className="user_name mb-0">
                                Ravi Borda    
                            </p>
                            <p className="user_email">
                                raviborda5@gmail.com
                            </p>
                            <p className="feedback_text">
                                great product
                            </p>
                        </div>
                        <form className="form">
                            <div className="form_group">
                                <input type="text" placeholder='Enter Your Name' />
                            </div>
                            <div className="form_group">
                                <input type="text" placeholder='Enter Your Name' />
                            </div>
                            <div className="form_group">
                                <textarea type="text" placeholder='Enter Your Name' />
                            </div>
                            <button type="submit" className='addTOCart_btn'>
                                Submit
                            </button>
                        </form>
                    </div>
                    }
                    
                    
                </Col>
                <Col lg='12' className='mb-5 mt-4'>
                    <h2 className='related_Product-title'>You might also like</h2>
                </Col>
                {
                    relatedProduct.map(item=>
                        <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                            <ProductCard item={item} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    </section>
  </Helmet>
}

export default FoodDetails
