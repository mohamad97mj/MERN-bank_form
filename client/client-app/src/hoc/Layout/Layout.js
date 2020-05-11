import React, {Component} from "react";
import styles from "./Layout.module.css";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';


import Aux from '../Aux/Aux';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render() {

        return (
            <Aux>
                {/*<Toolbar isAuth={this.props.isAuthenticated} drawerToggleClicked={this.sideDrawerToggleHandler}/>*/}
                {/*<SideDrawer*/}
                {/*    open={this.state.showSideDrawer}*/}
                {/*    closed={this.sideDrawerClosedHandler}/>*/}
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.username !== null
    };
};

export default connect(mapStateToProps)(Layout);