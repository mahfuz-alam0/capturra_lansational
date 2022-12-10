import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { set_auth_token } from '../../API/SetToken';

const Social = () => {

    const { google_sign_in } = React.useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handle_login = () => {
        google_sign_in()
            .then(result => {
                const user = result.user;

                set_auth_token(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <p className='text-center'>
                <button onClick={handle_login} className='btn btn-outline w-full'>
                    <img className='w-5 mr-2' src="/google.png" alt="" />Google
                </button>
            </p>
        </div>
    );
};

export default Social;