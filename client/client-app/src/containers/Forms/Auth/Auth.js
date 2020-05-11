import React, {Component} from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
// import styles from './Auth.module.css';
import axios from 'axios';
import {Grid, Button, Container, Box, TextField, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';


// import Form from "react-bootstrap/Form";
// import Grid from "react-bootstrap/Grid";
// import Grid from "react-bootstrap/Grid";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";


import {connect} from 'react-redux';
import * as actions from '../../../api/index';
import "./Auth.css";
import '../Form.css';

import {Redirect} from "react-router-dom";

const styles = {
    root: {
        backgroundColor: 'red',
    },

    centerText: {
        textAlign: "center"
    }

};

class Auth extends Component {

    constructor(props) {
        super(props);
    }

    state = {

        formIsValid: false,
        loading: false,
    };

    componentDidMount() {
        this.props.onSetAuthRedirectPath();
    }


    onChangeHandler = e => {
        this.setState({[e.target.id]: e.target.value});
    };


    // checkValidity(value, rules) {
    //     let isValid = true;
    //     if (!rules) {
    //         return true;
    //     }
    //
    //     if (rules.required) {
    //         isValid = value.trim() !== '' && isValid;
    //     }
    //
    //     if (rules.minLength) {
    //         isValid = value.length >= rules.minLength && isValid
    //     }
    //
    //     if (rules.maxLength) {
    //         isValid = value.length <= rules.maxLength && isValid
    //     }
    //
    //     if (rules.isEmail) {
    //         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //         isValid = pattern.test(value) && isValid
    //     }
    //
    //     if (rules.isNumeric) {
    //         const pattern = /^\d+$/;
    //         isValid = pattern.test(value) && isValid
    //     }
    //
    //     return isValid;
    // }


    loginHandler = (event) => {
        event.preventDefault();

        alert("username is :" + this.state.username);
        alert("password is :" + this.state.password)

        const userData = {
            username: this.state.username,
            password: this.state.password,
        };


        this.props.onAuth(userData);

    };

    render() {

        let form = (
            <div style={{padding: "50px 0 50px 0"}}>
                <h5>نام کاربری و گذرواژه خود را وارد کنید </h5>
                <form onSubmit={this.loginHandler} className="login-form my-form">


                    <Grid container className="" style={{marginBottom: "10px"}} spacing={2}>
                        <Grid item xs={12} className="textfield-container">
                            <TextField variant="outlined"

                                       fullWidth
                                       type="text"
                                       id="username"
                                       InputLabelProps={{
                                           shrink: true,
                                       }}

                                       label={
                                           <Typography
                                               style={{
                                                   fontFamily: 'Nika',
                                                   fontSize: "large",
                                                   marginTop: "-7px",
                                               }}
                                           >
                                               نام&nbsp;کاربری
                                           </Typography>
                                       }


                                       InputProps={{
                                           style: {direction: "rtl"},
                                       }}
                                       onChange={this.onChangeHandler}/>
                        </Grid>
                        <Grid item xs={12} className="textfield-container">
                            <TextField variant="outlined"

                                       fullWidth
                                       type="password"
                                       id="password"

                                       label={
                                           <Typography
                                               style={{
                                                   fontFamily: 'Nika',
                                                   fontSize: "large",
                                                   marginTop: "-7px",

                                               }}
                                           >
                                               گذرواژه
                                           </Typography>
                                       }

                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                                       InputProps={{
                                           style: {direction: "rtl"},
                                       }}
                                       onChange={this.onChangeHandler}/>

                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Button type="submit" variant="contained" className="center">ورود</Button>
                    </Grid>


                </form>
            </div>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {

            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return (

            <div>
                {authRedirect}
                {errorMessage}
                <div>
                    {form}
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.username !== null,
        authRedirectPath: state.auth.authRedirectPath,
        loading: state.auth.loading,
        error: state.auth.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (userData) => {
            dispatch(actions.auth(userData))
        },
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/panel"))

    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Auth));