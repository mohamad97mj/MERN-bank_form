import React, {Component} from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show || (nextProps.children !== this.props.children);
    }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("[Modal] Components did update");
    // }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={styles.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;