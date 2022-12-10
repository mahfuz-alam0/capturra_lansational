import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import { set_auth_token } from '../API/SetToken';
import Social from '../Login/Social/Social';

const Signup = () => {

    useTitle('Signup')

    const { create_user, update_user_profile, setLoading } = React.useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        create_user(email, password)
            .then(result => {
                const user = result.user
                update_user_profile({ displayName: name, photoURL: photoURL })
                set_auth_token(user)
                
                form.reset();
                setLoading(false);
                navigate("/", { replace: true });
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content w-96 md-w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Enter Your photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <p>Already have account ? <Link to='/login' className='text-blue-800 hover:underline'>LogIn</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary normal-case">SignUp</button>

                        </div>
                        <Social />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;