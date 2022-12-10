import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Slider from './Multicarusel/Slider';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner />
            <h2 className='my-16 text-center text-5xl font-semibold underline'>Services</h2>
            <Services />
            <div className='flex justify-around mt-16'>
                <Link to="/all_services" className='btn btn-primary normal-case justify-center'>All Services</Link>
            </div>
            <About />
            <h2 className='my-16 text-center text-5xl font-semibold underline'>Examples</h2>
            <Slider />
        </div>
    );
};

export default Home;