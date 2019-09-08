import React, { Component } from 'react'
import './App.css'
import Routes from './router'
import { setActiveLink } from './actions/urlActiveLinkActions'
import { fetchLoggedUser } from './actions/authActions'
import { connect } from 'react-redux'
import { LINK_USERS, LINK_CARS, LINK_SIGN_IN, LINK_REGISTER, LINK_USER, LINK_CAR, LINK_SETTINGS } from './constants';
import Loading from './component/customUI/Loading';

class App  extends Component {

  state = {
    response: false,
  }

  componentDidMount() {
    this.props.fetchLoggedUser(() => this.setState({response: true}))
    this.setActiveLink();      
  }

  componentDidUpdate() {
    window.onpopstate  = () => this.setActiveLink();
  }

  setActiveLink = () => {
    const { setActiveLink } = this.props;
    let link = window.location.pathname;
    link = link.substr(1);
    if(link.indexOf('/') > -1) {
      link = link.substring(0, link.indexOf('/'));
    }
    link = '/' + link;
    if(link === LINK_USERS.link || link === LINK_USER.link) setActiveLink(LINK_USERS.name)
    else if(link === LINK_CARS.link || link === LINK_CAR.link) setActiveLink(LINK_CARS.name)
    else if(link === LINK_SIGN_IN.link) setActiveLink(LINK_SIGN_IN.name)
    else if(link === LINK_SETTINGS.link) setActiveLink(LINK_SETTINGS.name)
    else if(link === LINK_REGISTER.link) setActiveLink(LINK_REGISTER.name)
  }

  render() {
    const body = this.state.response ? <Routes /> : <Loading />
    return (body);
  }
  
}

export default connect(null, { setActiveLink, fetchLoggedUser })(App);
