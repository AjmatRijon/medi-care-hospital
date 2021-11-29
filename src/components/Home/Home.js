import React from 'react';
import Doctors from '../Doctors/Doctors';
import Products from '../Products/Products';
import Banner from './Banner';
import CustomerReview from './CustomerReview';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <h1 className='text-center py-5'>Our Doctors</h1>
           <Doctors/>
           <h1 className='text-center py-5'>Our Products</h1>
           <Products/>
           <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;