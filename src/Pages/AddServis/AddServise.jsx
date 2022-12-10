import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const AddServise = () => {

    const notify = () => toast.success('Review is deleted successfully');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const service = form.service.value;
        const price = form.price.value;
        const category = form.category.value;
        const img = form.img.value;
        const discription = form.discription.value;
        const servise = { service, price, category, img, discription };
        console.log(servise);

        fetch('https://capturra-lensational-server.vercel.app/add_service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius_token')}`
            },
            body: JSON.stringify(servise)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    notify('servise added Successfully');
                    form.reset();
                }
            })
            .catch(err => console.log(err))
    }

    const navigate = useNavigate();
    return (
        <div className='max-w-screen-xl mx-auto'>
            <button className='btn btn-primary normal-case' onClick={() => navigate(-1)}><FaAngleLeft /> Go Back</button>
            <form onSubmit={handleSubmit}>
                <div className='my-5 grid grid-cols-1 md:w-1/2 w-full mx-auto gap-5'>
                    <input name='service' type="text" placeholder="Service Name" className="input input-bordered w-full" />
                    <input name='price' type="text" placeholder="Your Price" className="input input-bordered w-full" />
                    <input name='category' type="text" placeholder="Your Category" className="input input-bordered w-full" />
                    <input name='img' type="text" placeholder="Image Url" className="input input-bordered w-full" required />
                    <textarea name='discription' className="textarea textarea-bordered h-24 w-full" placeholder="Bio"></textarea>
                    <input className='btn btn-primary normal-case' type="submit" value="Add review" />
                </div>
            </form>
            <Toaster/>
        </div>
    );
};

export default AddServise;