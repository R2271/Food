import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import categoryImg01 from "../../../assets/img/114.jpg"
import categoryImg02 from "../../../assets/img/112.jpg"
import categoryImg03 from "../../../assets/img/111.png"
import categoryImg04 from "../../../assets/img/113.png"

import "../../../styles/category.css"

const CategoryData = [
    {
        display:'Fastfood',
        imgUrl: categoryImg01
    },
    {
        display:'Pizza',
        imgUrl: categoryImg02
    },
    {
        display:'Burger',
        imgUrl: categoryImg03
    },
    {
        display:'Momos',
        imgUrl: categoryImg04
    }
]

const Category = () => {
  return<Container>
    <Row>

    {
        CategoryData.map((item,index)=>(
            <Col lg='3' md='4' sm='6' xs='6' className="mb-4">
                <div className="category_item d-flex align-items-center
                gap-3">
                    <div className="category_img">
                        <img src={item.imgUrl} alt='pizza' />
                        <h6>{item.display}</h6>
                    </div>
                </div>
            </Col>
        ))
    }
       
    </Row>
  </Container>
}

export default Category
