

import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection.jsx'
import { Container, Row, Col } from 'reactstrap'
import Product from '../../src/face-data/Product'
import ProductCard from '../components/UI/product-card/ProductCard'
import '../styles/all-foods.css'
import ReactPaginate from 'react-paginate'
import '../styles/pagination.css'

const AllFoods = () => {

  const [searchTerm, setSearchTerm] = useState(" ");
  
  const [pageNumber, setPageNumber] = useState(0)

  const searchedProduct = Product.filter(item=>{
    if (searchTerm.value === " ") return item;
    if (item.title.toLowerCase().includes(searchTerm.
      toLowerCase())) return item
      
  })

  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)
  const changePage = ({selected})=>{
    setPageNumber(selected)
  }

  return (
  <Helmet title='All Foods'>
    <CommonSection title='All Foods' />

    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6'>
            <div className="search_widget d-flex align-items-center 
            justify-content-between w-50">
              <input type='text' placeholder= 'I am looking for'onChange={e=> setSearchTerm(e.target.value)}/>
              <span>
              <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
          <Col lg='6' md='6' sm='6' className="mb-5">
            <div className="sorting_widget text-end">
              <select className="w-50" >
                  <option>Default</option>
                  <option value="lowest"> A-Z</option>
                  <option value="lowest"> Z-A</option>
                  <option value="lowest">High Price</option>
                  <option value="lowest">Low Price</option>
              </select>
            </div>
          </Col>
          {displayPage
          .map(item=>(

              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className="mb-4">
                {" "}
                <ProductCard item={item}  />
              </Col>
              ))}
              <div>
                <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel='Prev'
                nextLabel='Next'
                containerClassName=" paginationBttns "
                />
              </div>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default AllFoods
