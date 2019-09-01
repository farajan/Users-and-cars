import React, { Component } from 'react'
import './App.css'
import Routes from './router'
import { setActiveLink } from './actions/urlActiveLinkActions'
import { fetchLoggedUser } from './actions/authActions'
import { connect } from 'react-redux'
import { ACTIVE_LINK_USERS, ACTIVE_LINK_CARS, ACTIVE_LINK_SIGN_IN, ACTIVE_LINK_REGISTER } from './constants';
import Loading from './component/Loading';

class App  extends Component {

  state = {
    response: false,
  }

  componentDidMount() {
      this.props.fetchLoggedUser(() => this.setState({response: true}))
      this.setActiveLink();      
  }

  setActiveLink = () => {
    const { setActiveLink } = this.props;
    let link = window.location.pathname;
    link = link.substr(1);
    if(link.indexOf('/') > -1) {
      link = link.substring(0, link.indexOf('/'));
    }
    if(link === 'users' || link === 'user') setActiveLink(ACTIVE_LINK_USERS)
    else if(link === 'cars' || link === 'car') setActiveLink(ACTIVE_LINK_CARS)
    else if(link === 'signin') setActiveLink(ACTIVE_LINK_SIGN_IN)
    else if(link === 'register') setActiveLink(ACTIVE_LINK_REGISTER)
  }

  render() {
    const body = this.state.response ? <Routes /> : <Loading />
    return (body);
  }
  
}

export default connect(null, { setActiveLink, fetchLoggedUser })(App);
