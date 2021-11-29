import React, {useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/AjmatRijon/fakedoctor/main/fakedoctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div>
           <Container>
           <Row xs={1} md={3} className="g-4">
            {
                doctors.map(doctor=><Doctor doctor={doctor} key={doctor.id}></Doctor>)
            }
            </Row>
           </Container>
        </div>
    );
};

export default Doctors;