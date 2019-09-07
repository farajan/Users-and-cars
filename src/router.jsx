import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './component/users';
import Cars from './component/cars';
import Layout from './component/layout';
import SignIn from './component/auth/SignIn';
import Register from './component/auth/register';
import User from './component/users/user';
import Car from './component/cars/car';
import { LINK_USERS, LINK_CARS, LINK_SIGN_IN, LINK_REGISTER, LINK_CAR, LINK_USER } from './constants';

const Routes = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Users} />
                <Route path={LINK_USERS.link} component={Users} />
                <Route path={LINK_CARS.link} component={Cars} />
                <Route path={LINK_SIGN_IN.link} component={SignIn} />
                <Route path={LINK_REGISTER.link} component={Register} />
                <Route path={`${LINK_USER.link}/:id`} component={User} />
                <Route path={`${LINK_CAR.link}/:id`} component={Car} />
            </Layout>
        </Router>
    );
};

export default Routes;
