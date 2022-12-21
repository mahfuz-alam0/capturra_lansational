import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DateObject from "react-date-object";
import { FaAngleLeft } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const EditReview = () => {

    useTitle('Edit Review')
    const navigate = useNavigate();
    const { user } = React.useContext(AuthContext);
    const data = useLoaderData();
    const date = new DateObject();
    const date1 = date.format("YYYY/MM/DD hh:mm:ss.SSS");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || form.name.value;
        const email = user?.email || form.email.value;;
        const comment = form.massage.value;
        const category = data.category;
        const time = date1;
        const feedback = form.feadback.value;
        const img = user.photoURL
        const review = { name, email, comment, category, time, feedback, img };

        fetch(`https://capturra-lensational-server.vercel.app/my_reviews/${data._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('Capturra_token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Review Updated Successfully');
                    navigate(-1);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            <button className='btn btn-primary normal-case' onClick={() => navigate(-1)}><FaAngleLeft /> Go Back</button>
            <form onSubmit={handleSubmit}>
                <div className='my-5 grid grid-cols-1 md:w-1/2 w-full mx-auto gap-5'>
                    <input name='first_name' type="text" defaultValue={user?.displayName} readOnly placeholder="First Name" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={data?.category} readOnly className="input input-bordered w-full" />
                    <input name='feadback' type="text" placeholder="Your Feadback Happy/Sad" className="input input-bordered w-full" defaultValue={data?.feedback} />
                    <textarea name='massage' className="textarea textarea-bordered h-24 w-full" placeholder="Bio" defaultValue={data?.comment}></textarea>
                    <input className='btn btn-primary normal-case' type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default EditReview;