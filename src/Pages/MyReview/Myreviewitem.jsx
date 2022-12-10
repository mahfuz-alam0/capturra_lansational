import React from 'react';
import { Link } from 'react-router-dom';

const Myreviewitem = ({ review, handle_delete, }) => {
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
                <div>
                    <p className='pb-4'> {review?.comment}</p>
                    <div className='flex justify-end'>
                        <Link to={`/edit/${review._id}`} className='btn btn-primary mr-3'>Edit</Link>
                        <button onClick={() => handle_delete(review._id)} className='btn btn-primary'>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Myreviewitem;