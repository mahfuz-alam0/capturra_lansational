import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReviweItem from './ReviweItem';
import useTitle from '../../Hooks/useTitle';

const Details = () => {
    useTitle('Details')

    const [reviews, set_reviews] = React.useState([]);
    const detils = useLoaderData();
    const { _id, service, price, discription, img } = detils;

    React.useEffect(() => {
        fetch(`https://capturra-lensational-server.vercel.app/reviews?category=${detils?.category}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('Capturra_token')}`
            },
        })
            .then(res => res.json())
            .then(data => set_reviews(data))
    }, [detils]);



    return (
        <div className='max-w-screen-xl mx-auto mb-8'>
            <div className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <PhotoProvider speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                        <div className="foo">
                            <PhotoView src={img}>
                                <img className="rounded-lg shadow-2xl" src={img} alt="" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                    <div>
                        <h1 className="text-5xl font-semibold">{service}</h1>
                        <p className="py-6">{discription}</p>
                        <div className='flex justify-between items-end'>
                            <p className='flex'>
                                <span className="badge badge-primary">Price: ${price}</span>
                            </p>
                            <Link to={`/add_review/${_id}`} className="btn btn-primary normal-case">Add Review</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-5xl font-semibold my-8 text-center underline">Reviwes</h1>
                <div>
                    {
                        reviews.map(review => <ReviweItem review={review} key={review._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;