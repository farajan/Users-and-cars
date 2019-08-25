import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './component/users';
import Cars from './component/cars';
import Layout from './component/layout';
import SignIn from './component/auth/signin';
import Register from './component/auth/register';
import User from './component/users/user';

const Routes = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Users} />
                <Route path="/users" component={Users} />
                <Route path="/cars" component={Cars} />
                <Route path="/signin" component={SignIn} />
                <Route path="/register" component={Register} />
                <Route path="/user/:id" component={User} />
            </Layout>
        </Router>
    );
};

export default Routes;
