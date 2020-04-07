import React, {Component} from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './Auth.module.css';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {connect} from 'react-redux';
import * as actions from '../../../api/index';
import "./Auth.css";

class Register extends Component {

    constructor(props) {
        super(props);
    }

    state = {

        username: '',
        password: '',

        formIsValid: false,
        loading: false,
    };

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
        const usernameValue = this.state.username;
        const passwordValue = this.state.password;

        const newUser = {
          username : usernameValue,
          password: passwordValue,
        };

        this.props.onRegister(newUser, this.props.history);

    };

    render() {

        let form = (
            <Form onSubmit={this.loginHandler}>
                <Form.Group className={styles.LoginForm}>
                    <Form.Group as={Row}>
                        <Form.Label column xs="3">
                            نام کاربری
                        </Form.Label>
                        <Col xs="9">
                            <Form.Control id="username" onChange={this.onChangeHandler}/>
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column xs="3">
                            گذرواژه
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control type="password" id="password" onChange={this.onChangeHandler} />
                        </Col>

                    </Form.Group>
                </Form.Group>
                <Form.Group className={styles.CenterContent}>
                    <Button type="submit" className="center margin-top-5">ورود</Button>
                </Form.Group>


            </Form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (

            <div>
                <h4>نام کاربری و گذرواژه خود را وارد کنید </h4>
                <div>
                    {form}
                </div>
            </div>

        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onRegister: (newUser, history) => dispatch(actions.register(newUser, history)),
    }

};

export default connect(null, mapDispatchToProps)(Register);