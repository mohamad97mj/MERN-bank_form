import React from 'react';

import styles from './Toolbar.module.css';
import './Toolbar.css';
import Nav from "react-bootstrap/Nav";
import Logo from '../../Logo/Loog';
import Aux from '../../../hoc/Aux/Aux';
import Auth from "../../../containers/Forms/Auth/Auth";
import {NavLink} from "react-router-dom";

const toolbar = (props) => (

    <header>
        <div className={styles.Toolbar}>

            <Nav activeKey="/">
                <Nav.Item>
                    {/*<Nav.Link exact as={NavLink} to="/">*/}
                    {/*    <div>*/}
                            <Logo/>
                        {/*</div>/!**/}
                    {/*</Nav.Link>*!/*/}
                </Nav.Item>

                {!props.isAuth ?

                    <Aux>
                        <Nav.Item>
                            {/*<Nav.Link exact as={NavLink} to="/">*/}
                            {/*    صفحه نخست*/}

                            {/*</Nav.Link>*/}
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link id="nav-1" onClick={()=>window.location.reload(true)} exact as={NavLink} to="/">
                                ورود
                            </Nav.Link>
                        </Nav.Item>


                        <Nav.Item>
                            <Nav.Link id="nav-2" exact as={NavLink} to="/about" disabled>
                                درباره ما
                            </Nav.Link>
                        </Nav.Item>
                    </Aux> :

                    <Aux>

                        <Nav.Item>
                            < Nav.Link id="nav-3" exact as={NavLink} to="/logged">
                                صفحه نخست
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            < Nav.Link id="nav-3" exact as={NavLink} to="/profile">
                                مشخصات صرافی
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            < Nav.Link id="nav-4" exact as={NavLink} to="/form">
                                اطلاعات ارتباطات داخلی وخارجی
                            </Nav.Link>
                        </Nav.Item>


                        <Nav.Item>
                            <Nav.Link id="nav-5" onClick={()=>window.location.reload(true)} exact as={NavLink} to="/logout">
                                خروج
                            </Nav.Link>
                        </Nav.Item>
                    </Aux>
                }

            </Nav>
        </div>
    </header>
);

{/*<Nav.Item>*/
}
{/*    <Nav.Link eventKey="3" href="/signin">*/
}
{/*        ثبت نام*/
}
{/*    </Nav.Link>*/
}
{/*</Nav.Item>*/
}

export default toolbar;