import React from 'react';
import SingleItem from './SingleItem';

const banner_position = [
    {
        image: "https://i.ibb.co/d5jjJKc/arci.jpg",
        prev: 3,
        id: 1,
        next: 2,
    },
    {
        image: "https://i.ibb.co/xYcQShq/Food.jpg",
        prev: 1,
        id: 2,
        next: 3,
    },
    {
        image: "https://i.ibb.co/z43YdXf/nature.jpg",
        prev: 2,
        id: 3,
        next: 1,
    }
]


const Banner = () => {

    return (
        <div>
            <div className="carousel">
                {
                    banner_position.map(slide=> <SingleItem key={slide.id} slider_img={slide.image} prev={slide.prev} next={slide.next} id={slide.id}/>)
                }
            </div>
        </div>
    );
};

export default Banner;