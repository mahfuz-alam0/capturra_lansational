import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const SingleItem = (props) => {

    const { id, prev, next, slider_img } = props;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carusel_img rounded-xl'>
                <img src={slider_img} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                <h1 className='text-6xl font-bold text-white hidden lg:block'>
                    Affordable Price <br />
                    for awesome <br />
                    Photography
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
                <p className='text-white hidden lg:block'>
                    There are many variations of Photography are available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
                <Link to='/services'>
                    <button className="btn btn-primary mr-5 hidden lg:block">Services</button>
                </Link>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SingleItem;