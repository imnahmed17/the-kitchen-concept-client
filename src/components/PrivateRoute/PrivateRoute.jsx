import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    console.log('user in private route', user);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <Spinner animation="border" variant="primary" size="lg" />
                <h3 className="ms-3">Loading...</h3>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace />;
};

export default PrivateRoute;