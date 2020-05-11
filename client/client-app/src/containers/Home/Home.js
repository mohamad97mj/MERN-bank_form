import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";

// @material-ui/icons

// core components
import Header from "../../components/UI/Header/Header.js";
import Footer from "../../components/UI/Footer/Footer.js";
import GridContainer from "../../components/UI/Grid/GridContainer.js";
import GridItem from "../../components/UI/Grid/GridItem.js";
import Button from "../../components/UI/CustomButtons/Button.js";
import HeaderLinks from "../../components/UI/Header/HeaderLinks.js";
import Parallax from "../../components/UI/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import FormSection from "./Sections/FormSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Home(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                // brand="Material Kit React"
                rightLinks={<HeaderLinks/>}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax filter image={require("../../assets/images/tinified/home.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>بانک اقتصاد نوین، با هم برای هم</h1>
                            <h4>
                                سامانه ثبت اطلاعات صرافی ها
                            </h4>
                            <br/>
                            <Button
                                component={NavLink}
                                color="danger"
                                size="lg"
                                to="login"
                                // target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-play"/>
                                برای شروع کلیک کنید
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            {/*<div className={classNames(classes.main, classes.mainRaised)}>*/}
            {/*    <div className={classes.container}>*/}
            {/*        /!*<ProductSection />*!/*/}
            {/*        /!*<TeamSection />*!/*/}
            {/*        /!*<FormSection/>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Footer/>
        </div>
    );
}
