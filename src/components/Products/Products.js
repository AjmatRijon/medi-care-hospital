import React, {useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product';

const Products = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/AjmatRijon/fakedoctor/main/fakeshop.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div>
           <Container>
           <Row xs={1} md={4} className="g-4">
            {
                doctors.map(doctor=><Product doctor={doctor} key={doctor.id}></Product>)
            }
            </Row>
           </Container>
        </div>
    );
};

export default Products;