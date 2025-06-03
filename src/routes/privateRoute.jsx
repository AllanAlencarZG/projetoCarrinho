import React, { useContext } from 'react'
import { AuthContext } from '../contexts/Auth';
import { Navigate } from 'react-router';

export default function PrivateRoute({children}) {
    const {user} = useContext(AuthContext);

    return (
        user ? children : <Navigate to="/" />
    )
}
