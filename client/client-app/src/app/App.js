import React, {Component, Suspense, lazy} from 'react';
import styles from './App.module.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import {connect} from 'react-redux'
import * as actions from '../api/index'
import 'bootstrap/dist/css/bootstrap.min.css'

import Spinner from "../components/UI/Spinner/Spinner";

const Layout = lazy(() => import ('../hoc/Layout/Layout')
);

const Profile = lazy(() => import("../containers/Forms/Profile/Profile")
);

const Main = lazy(() => import ("../containers/Forms/Main/Main")
);

const Panel = lazy(() => import ("../containers/Panel/Panel")
);

const Register = lazy(() => import ("../containers/Forms/Auth/Register")
);

const Logout = lazy(() => import ("../containers/Forms/Auth/Logout/Logout")
);

const Home = lazy(() => import ("../containers/Home/Home")
);

const LoginPage = lazy(() => import ("../containers/LoginPage/LoginPage")
);


class App extends Component {

    componentDidMount() {
        // this.props.onTryAutoSignup();
    }

    render() {


        let routes = (
            <Switch>
                {/*<Route path="/profile" exact component={Profile}/>*/}
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/landing-page" component={Home}/>
                {/*<Route path="/profile-page" component={Panel} />*/}
                {/*<Route path="/login-page" component={LoginPage} />*/}

                {/*<Route path="/form" exact component={Main}/>*/}
                <Route path="/signin" exact component={Register}/>
                <Route path="/" exact component={Home}/>
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuthenticated) {

            routes = (
                <Switch>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/panel" exact component={Panel}/>
                    <Route path="/profile" exact component={Profile}/>
                    {/*<Route path="/profiles" exact/>*/}
                    <Route path="/form" exact component={Main}/>
                    <Route path="/logout" exact component={Logout}/>
                    <Redirect to="/"/>
                </Switch>
            );
        }


        return (
            <Suspense fallback={<Spinner/>}>
                <div className={styles.App}
                     style={{
                         position: "relative",
                         height: "100%",
                     }} id="bootstrap-overwrite">
                    <Layout style={{
                        position: "relative",
                        height: "100%"
                    }}>
                        <Suspense fallback={<Spinner/>}>
                            {routes}
                        </Suspense>
                    </Layout>
                </div>
            </Suspense>
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
