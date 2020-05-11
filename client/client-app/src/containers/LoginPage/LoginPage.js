import React, {Component} from "react";
// @material-ui/core components
import {connect} from 'react-redux';

import {withStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "../../components/UI/Header/Header.js";
import HeaderLinks from "../../components/UI/Header/HeaderLinks.js";
import Footer from "../../components/UI/Footer/Footer.js";
import GridContainer from "../../components/UI/Grid/GridContainer.js";
import GridItem from "../../components/UI/Grid/GridItem.js";
import Button from "../../components/UI/CustomButtons/Button.js";
import Card from "../../components/UI/Card/Card.js";
import CardBody from "../../components/UI/Card/CardBody.js";
import CardHeader from "../../components/UI/Card/CardHeader.js";
import CardFooter from "../../components/UI/Card/CardFooter.js";
import CustomInput from "../../components/UI/CustomInput/CustomInput.js";
import Aux from '../../hoc/Aux/Aux'

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../assets/images/tinified/login.jpg";
import * as actions from "../../api";
import {Redirect} from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";


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


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(class LoginPage extends Component {

    constructor(props) {
        super(props);
    }

    state = {

        formIsValid: false,
        loading: false,
        cardAnimation: "cardHidden",

    };

    componentDidMount() {
        this.props.onSetAuthRedirectPath();
        setTimeout(
            () => this.setState({
                cardAnimation: ""
            }), 700);
    }


    onChangeHandler = e => {

        this.setState({[e.target.id]: e.target.value});
    };

    loginHandler = (event) => {
        event.preventDefault();

        const userData = {
            username: this.state.username,
            password: this.state.password,
        };

        this.props.onAuth(userData);
    };


    render() {

        let form = (
            <div>
                <Header
                    absolute
                    color="transparent"
                    brand="Material Kit React"
                    rightLinks={<HeaderLinks/>}
                    {...this.props.classes}
                />
                <div
                    className={this.props.classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}>
                    <div
                        className={this.props.classes.container}>

                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                                <Card className={this.props.classes[this.state.cardAnimaton]}>
                                    <form
                                        onSubmit={this.loginHandler}
                                        className={this.props.classes.form}
                                    >
                                        <CardHeader color="primary" className={this.props.classes.cardHeader}>
                                            <br/>
                                            <h5>نام کاربری و گذرواژه</h5>
                                            <h5>خود را وارد کنید</h5>
                                            {/*<div*/}
                                            {/*    className={this.props.classes.socialLine}*/}
                                            {/*>*/}
                                            {/*    <Button*/}
                                            {/*        justIcon*/}
                                            {/*        href="#pablo"*/}
                                            {/*        target="_blank"*/}
                                            {/*        color="transparent"*/}
                                            {/*        onClick={e => e.preventDefault()}*/}
                                            {/*    >*/}
                                            {/*        <i className={"fab fa-twitter"}/>*/}
                                            {/*    </Button>*/}
                                            {/*    <Button*/}
                                            {/*        justIcon*/}
                                            {/*        href="#pablo"*/}
                                            {/*        target="_blank"*/}
                                            {/*        color="transparent"*/}
                                            {/*        onClick={e => e.preventDefault()}*/}
                                            {/*    >*/}
                                            {/*        <i className={"fab fa-facebook"}/>*/}
                                            {/*    </Button>*/}
                                            {/*    <Button*/}
                                            {/*        justIcon*/}
                                            {/*        href="#pablo"*/}
                                            {/*        target="_blank"*/}
                                            {/*        color="transparent"*/}
                                            {/*        onClick={e => e.preventDefault()}*/}
                                            {/*    >*/}
                                            {/*        <i className={"fab fa-google-plus-g"}/>*/}
                                            {/*    </Button>*/}
                                            {/*</div>*/}
                                        </CardHeader>
                                        {/*<p className={classes.divider}>Or Be Classical</p>*/}
                                        <CardBody>
                                            <CustomInput
                                                onChange={this.onChangeHandler}
                                                labelText="نام کاربری"
                                                id="username"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}


                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="start">
                                                            <People className={this.props.classes.inputIconsColor}/>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            {/*<CustomInput*/}
                                            {/*  labelText="Email..."*/}
                                            {/*  id="email"*/}
                                            {/*  formControlProps={{*/}
                                            {/*    fullWidth: true*/}
                                            {/*  }}*/}
                                            {/*  inputProps={{*/}
                                            {/*    type: "email",*/}
                                            {/*    endAdornment: (*/}
                                            {/*      <InputAdornment position="end">*/}
                                            {/*        <Email className={classes.inputIconsColor} />*/}
                                            {/*      </InputAdornment>*/}
                                            {/*    )*/}
                                            {/*  }}*/}
                                            {/*/>*/}
                                            <CustomInput
                                                onChange={this.onChangeHandler}
                                                labelText="گذرواژه"
                                                id="password"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{

                                                    type: "password",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className={this.props.classes.inputIconsColor}>
                                                                lock_outline
                                                            </Icon>
                                                        </InputAdornment>
                                                    ),
                                                    autoComplete: "off"
                                                }}

                                            />
                                        </CardBody>
                                        <CardFooter className={this.props.classes.cardFooter}>
                                            <Button type="submit"  color="primary" size="lg">
                                                ورود به سامانه
                                            </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                    <Footer whiteFont/>
                </div>
            </div>
        )

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
                {form}
            </div>
        )
    };

}))

