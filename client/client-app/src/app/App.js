import React, {Component} from 'react';
import styles from './App.module.css';
import Layout from '../hoc/Layout/Layout';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Home from '../containers/Home/Home';
import Profile from "../containers/Forms/Profile/Profile";
import Main from "../containers/Forms/Main/Main";
import Auth from "../containers/Forms/Auth/Auth"
import Register from "../containers/Forms/Auth/Register";
import {connect} from 'react-redux';
import * as actions from '../api/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from "../containers/Forms/Auth/Logout/Logout";


class App extends Component {

    componentDidMount() {
        // this.props.onTryAutoSignup();
    }

    render() {


        let routes = (
            <Switch>
                {/*<Route path="/profile" exact component={Profile}/>*/}
                <Route path="/login" exact component={Auth}/>
                {/*<Route path="/form" exact component={Main}/>*/}
                <Route path="/signin" exact component={Register}/>
                <Route path="/" exact component={Auth}/>
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuthenticated) {

            routes = (
                <Switch>
                    <Route path="/login" exact component={Auth}/>
                    <Route path="/profile" exact component={Profile}/>
                    {/*<Route path="/profiles" exact/>*/}
                    <Route path="/form" exact component={Main}/>
                    <Route path="/logout" exact component={Logout}/>
                    <Route path="/" exact component={Auth}/>
                    <Redirect to="/"/>
                </Switch>
            );
        }


        return (

            <div className={styles.App}
                 style={{
                     position: "relative",
                     height: "100%",
                 }} id="bootstrap-overwrite">
                <Layout style={{
                    position: "relative",
                    height: "100%"}}>
                    {routes}
                </Layout>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.username !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
