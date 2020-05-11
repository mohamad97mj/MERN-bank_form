import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/UI/Grid/GridContainer.js";
import GridItem from "../../../components/UI/Grid/GridItem.js";
import CustomInput from "../../../components/UI/CustomInput/CustomInput.js";
import Button from "../../../components/UI/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function FormSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>تماس با ما</h2>
                    <h5 className={classes.description}>
                        انتقادات و پیشنهادات خود را از طریق فرم زیر با ما در میان بگذارید
                        <br/>
                        و یا از طریق روش های گفته شده در پنل کاربری خود با ما تماس بگیرید.
                    </h5>
                    <form>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    direction="right"
                                    style={{direction: "rtl", textAlign: "right"}}
                                    labelText="نام"
                                    id="name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    varient="outlined"
                                    direction="right"
                                    labelText="ایمیل"
                                    id="email"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <CustomInput
                                direction="right"
                                labelText="متن پیام"
                                id="message"
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.textArea
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 5
                                }}
                            />
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                                    <Button color="primary">ارسال پیام</Button>
                                </GridItem>
                            </GridContainer>
                        </GridContainer>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}
