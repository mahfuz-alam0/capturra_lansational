import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import { set_auth_token } from '../API/SetToken';
import Social from './Social/Social';

const Login = () => {
    useTitle('Login')

    const { login } = React.useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user

                const current_user = {
                    email: user.email,
                }

                handletoken(current_user, form)
                
            })
            .catch(error => console.error(error));

        console.log(email, password);
    }

    const handletoken = async (current_user, form) => {
        set_auth_token(current_user)
        await navigate(from, { replace: true });
        await form.reset();
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content w-96 md-w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <p>New to Capturra ? <Link to='/signup' className='text-blue-800 hover:underline'>signUp</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary normal-case">LogIn</button>
                        </div>
                        <Social />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;