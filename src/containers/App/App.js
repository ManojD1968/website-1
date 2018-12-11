import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout, changeLangFunc, getTitleFunc } from 'redux/modules/auth';
// import { logout } from 'redux/modules/auth';
// Carousel
import { Navigation, Footer, } from 'components';
import { push } from 'react-router-redux';
// import config from '../../config';
import { asyncConnect } from 'redux-async-connect';

import getLange from '../Home/utils/getLange';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])

@connect(
    state => ({user: state.auth.user, transition: state.routing.locationBeforeTransitions, language: state.auth.language, titleState: state.auth.titleState}),
    {logout, pushState: push, changeLangFunc, getTitleFunc})
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    language: PropTypes.string,
    changeLangFunc: PropTypes.func,

    transition: PropTypes.object,
    pushState: PropTypes.func.isRequired,

    getTitleFunc: PropTypes.func,
    titleState: PropTypes.string,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  // componentWillMount() {
  //   // console.log('global.language==>', getLange());
  //   this.props.changeLangFunc(global.language);
  // }

  componentDidMount() {
    const curr = getLange();

    if (curr !== 'zh-CN') {
      this.props.changeLangFunc('en');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/table');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const styles = require('./App.scss');
    const {transition, language} = this.props;
    let title;
    if (language === 'zn') {
      title = '万维链(Wanchain)-资产跨链+隐私保护+智能合约 构建数字新经济基础设施';
    } else {
      title = 'Wanchain';
    }
    return (
      <div className={styles.app}>
        <Helmet title={title}/>
        {transition.pathname !== '/' && transition.pathname !== '/wanlabs' && transition.pathname !== '/products' && <Navigation/>}
        <div className={styles.appContent}>
          {this.props.children}
        </div>
        {/* <Carousel/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
