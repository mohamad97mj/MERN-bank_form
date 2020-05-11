/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";


// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Apps, CloudDownload, LockOpen, Home, Notifications, AccountBox, ExitToApp} from "@material-ui/icons";
import SvgIcon from '@material-ui/core/SvgIcon';

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            {/*<ListItem className={classes.listItem}>*/}
            {/*  <CustomDropdown*/}
            {/*    noLiPadding*/}
            {/*    buttonText="Components"*/}
            {/*    buttonProps={{*/}
            {/*      className: classes.navLink,*/}
            {/*      color: "transparent"*/}
            {/*    }}*/}
            {/*    buttonIcon={Apps}*/}
            {/*    dropdownList={[*/}
            {/*      <Link to="/" className={classes.dropdownLink}>*/}
            {/*        All components*/}
            {/*      </Link>,*/}
            {/*      <a*/}
            {/*        href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.dropdownLink}*/}
            {/*      >*/}
            {/*        Documentation*/}
            {/*      </a>*/}
            {/*    ]}*/}
            {/*  />*/}
            {/*</ListItem>*/}

            <ListItem className={classes.listItem}>
                <Button
                    activeStyle={{background: "#f44336"}}
                    component={NavLink}
                    exact
                    to="/panel"
                    color="transparent"
                    // target="_blank"
                    className={classes.navLink}
                >
                    اعلان ها
                    &nbsp;


                    <Notifications style={{fontSize: 40}} className={classes.icons}/>
                </Button>
            </ListItem>


            <ListItem className={classes.listItem}>
                <Button
                    activeStyle={{background: "#f44336"}}
                    component={NavLink}
                    exact
                    to="/profile"
                    color="transparent"
                    // target="_blank"
                    className={classes.navLink}
                >
                    مشخصات صرافی
                    &nbsp;

                </Button>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Button
                    activeStyle={{background: "#f44336"}}
                    component={NavLink}
                    exact
                    to="/form"
                    color="transparent"
                    // target="_blank"
                    className={classes.navLink}
                >
                    اطلاعات ارتباطات داخلی و خارجی
                    &nbsp;

                </Button>
            </ListItem>


            <ListItem className={classes.listItem}>
                <Button
                    activeStyle={{background: "#f44336"}}
                    component={NavLink}
                    onClick={()=>window.location.reload(true)}
                    exact
                    to="/logout"
                    color="transparent"
                    // target="_blank"
                    className={classes.navLink}>
                    خروج
                    &nbsp;

                    <ExitToApp fontSize="large"/>
                </Button>
            </ListItem>
            {/*<ListItem className={classes.listItem}>*/}
            {/*  /!*<Tooltip title="Delete">*/}
            {/*    <IconButton aria-label="Delete">*/}
            {/*      <DeleteIcon />*/}
            {/*    </IconButton>*/}
            {/*  </Tooltip>*!/*/}
            {/*  <Tooltip*/}
            {/*    id="instagram-twitter"*/}
            {/*    title="Follow us on twitter"*/}
            {/*    placement={window.innerWidth > 959 ? "top" : "left"}*/}
            {/*    classes={{ tooltip: classes.tooltip }}*/}
            {/*  >*/}
            {/*    <Button*/}
            {/*      href="https://twitter.com/CreativeTim?ref=creativetim"*/}
            {/*      target="_blank"*/}
            {/*      color="transparent"*/}
            {/*      className={classes.navLink}*/}
            {/*    >*/}
            {/*      <i className={classes.socialIcons + " fab fa-twitter"} />*/}
            {/*    </Button>*/}
            {/*  </Tooltip>*/}
            {/*</ListItem>*/}
            {/*<ListItem className={classes.listItem}>*/}
            {/*  <Tooltip*/}
            {/*    id="instagram-facebook"*/}
            {/*    title="Follow us on facebook"*/}
            {/*    placement={window.innerWidth > 959 ? "top" : "left"}*/}
            {/*    classes={{ tooltip: classes.tooltip }}*/}
            {/*  >*/}
            {/*    <Button*/}
            {/*      color="transparent"*/}
            {/*      href="https://www.facebook.com/CreativeTim?ref=creativetim"*/}
            {/*      target="_blank"*/}
            {/*      className={classes.navLink}*/}
            {/*    >*/}
            {/*      <i className={classes.socialIcons + " fab fa-facebook"} />*/}
            {/*    </Button>*/}
            {/*  </Tooltip>*/}
            {/*</ListItem>*/}
            {/*<ListItem className={classes.listItem}>*/}
            {/*  <Tooltip*/}
            {/*    id="instagram-tooltip"*/}
            {/*    title="Follow us on instagram"*/}
            {/*    placement={window.innerWidth > 959 ? "top" : "left"}*/}
            {/*    classes={{ tooltip: classes.tooltip }}*/}
            {/*  >*/}
            {/*    <Button*/}
            {/*      color="transparent"*/}
            {/*      href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"*/}
            {/*      target="_blank"*/}
            {/*      className={classes.navLink}*/}
            {/*    >*/}
            {/*      <i className={classes.socialIcons + " fab fa-instagram"} />*/}
            {/*    </Button>*/}
            {/*  </Tooltip>*/}
            {/*</ListItem>*/}
        </List>
    );
}
