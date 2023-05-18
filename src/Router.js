import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from 'cookie';
import Login from './components/Login';
import Home from './containers/HomeContainer';
import AddNewListing from './containers/AddNewListingContainer';
import Details from './containers/DetailContainer';


const checkAuth = (props) => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedin"] ? true : false;
}

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;

    return checkAuth() === true ? <Component {...rest} /> : <Navigate to='/login' />;
}


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/addnewlisting" element={<ProtectedRoute component={AddNewListing}/>} />
            <Route path="/details/:id" element={<Details/>} />
        </Routes>
    )
};

export default Router;