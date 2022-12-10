import React from 'react';
import './ReviweItem.css';

const ReviweItem = ({ review }) => {

    // const { name, comment, feedback, img } = review;


    return (
        <div className='my-5'>
            <div className='main_container rounded-md p-2'>
                <div className='flex gap-4 mb-5 img_container'>
                    <img className='image rounded-md' src={review?.img} alt="" />
                    <div className='up_section'>
                        <div>
                            <p>Name</p>
                            <h1 className='text-md font-semibold'> {review?.name}</h1>
                        </div>
                        <div>
                            <p>Category</p>
                            <h1 className='text-md font-semibold'> {review?.category}</h1>
                        </div>
                        <div className='fead-sec'>
                            <p>Feedback</p>
                            <h1 className='text-md font-semibold'> {review?.feedback}</h1>
                        </div>
                    </div>
                </div>
                <p> {review?.comment}</p>
            </div>
            
        </div>
    );
};

export default ReviweItem;