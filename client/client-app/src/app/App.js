import React, { Component } from 'react';
import styles from './App.module.css';
import Layout from '../hoc/Layout/Layout';
import { Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Profile from "../containers/Forms/Profile/Profile";
import Main from "../containers/Forms/Main/Main";
import Auth from "../containers/Forms/Auth/Auth"
import Register from "../containers/Forms/Auth/Register";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

    render() {
        return (

            <div className={styles.App} id="bootstrap-overwrite">
                <Layout>
                    <Route path="/login" exact component = {Auth} />
                    <Route path="/signin" exact component = {Register} />
                    <Route path="/profile" exact component = {Profile} />
                    <Route path="/form" exact component = {Main} />
                    <Route path="/" exact component = {Home} />
                </Layout>
            </div>
        );
    }
}

export default App;
