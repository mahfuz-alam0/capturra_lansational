import React from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import Myreviewitem from './Myreviewitem';
import toast, { Toaster } from 'react-hot-toast';

const MyReview = () => {

    useTitle('My Review')

    const { user, sign_out } = React.useContext(AuthContext);

    const [reviews, setReviews] = React.useState([]);

    const notify = () => toast.error('Review is deleted successfully');

    React.useEffect(() => {
        fetch(`https://capturra-lensational-server.vercel.app/my_reviews?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('Capturra_token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user]);

    const handle_delete = (id) => {

        const proceed = window.confirm('Are you sure, you want to cancle this order?');

        if (proceed) {
            fetch(`https://capturra-lensational-server.vercel.app/my_reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('Capturra_token')}`
                },
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return sign_out()
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.deletedCount > 0) {
                        if (data.deletedCount > 0) {
                            const remaining = reviews.filter(review => review._id !== id);
                            setReviews(remaining);
                            notify();
                        };

                    };
                });
        };
    };




    return (
        <div>
            {
                reviews === 0 && <h1 className="text-5xl font-semibold my-24 text-center underline">No Review Found</h1>
            }
            {
                reviews.map(review => <Myreviewitem review={review} handle_delete={handle_delete} key={review._id} />)
            }
            <Toaster />
        </div>
    );
};

export default MyReview;