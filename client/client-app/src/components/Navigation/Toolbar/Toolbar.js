import React from 'react';

import styles from './Toolbar.module.css';
import './Toolbar.css';
import Nav from "react-bootstrap/Nav";
import Logo from '../../Logo/Loog';

const toolbar = ( props ) => (

    <header>
        <div className={styles.Toolbar} >

            <Nav className="" activeKey="/home">

                <Nav.Item>
                    <Nav.Link eventKey="1" href="/">
                        <Logo />
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="1" href="/">
                        صفحه نخست
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" href="/login">
                        ورود
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="3" href="/signin">
                        ثبت نام
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="4" href="/form">
                        فرم
                    </Nav.Link>
                </Nav.Item><Nav.Item>
                    <Nav.Link eventKey="5" disabled>
                        درباره ما
                    </Nav.Link>
                </Nav.Item>
            </Nav>

        </div>
    </header>
);

export default toolbar;