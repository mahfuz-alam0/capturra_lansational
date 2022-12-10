import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Private.css';

const PrivateRoute = ({ children }) => {

    const { user, loading } = React.useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        // return <div className='w-56 mx-auto min-h-screen'><progress className="progress w-56"></progress></div>
        return <div className='w-56 mx-auto min-h-screen'><div className="lds-dual-ring"></div></div>
        
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;