import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
    style={{height:'90vh'}}
      className="d-block w-100"
      src="https://storage.googleapis.com/production-ipage-v1-0-1/031/266031/fVxFJtBM/56ea63f9d7ec42b183f8e082de7b79ea"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>We Care About Your Health</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'90vh'}}
      className="d-block w-100"
      src="https://www.ifc.org/wps/wcm/connect/604dbdf4-7825-407c-99b5-c034d42c9172/Africa-medical-professional-main-1350x675.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-604dbdf4-7825-407c-99b5-c034d42c9172-nMDLBfR"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>The Best Sugeones</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'90vh'}}
      className="d-block w-100"
      src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/07/01/911446-doctor-s-day.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 className='text-dark'>Medical Services</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;