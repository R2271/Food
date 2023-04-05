

import React from 'react'
import { Container } from 'reactstrap'
import '../../../styles/common.css';

const CommonSection = (props) => {
  return (
    <section className="common_sec">
        <Container>
            <h2 className="text-white">{props.title}</h2>
        </Container>
    </section>
  )
}

export default CommonSection
