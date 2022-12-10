import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceItems = ({ data }) => {

    const { _id, service, price, discription, img } = data;

    return (
        <div className="card card-compact w-full bg-base-300 shadow-xl">
            <figure>
                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                    <div className="foo">
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service}</h2>
                <p>
                    {discription?.length > 100 ? discription.slice(0, 100) + '......' : discription}
                </p>
                <p>
                    <span className="badge badge-primary">Price: ${price}</span>
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`} className="btn btn-primary normal-case">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;