import React, {Component} from 'react';

// import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './Main.module.css';
import './Main.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import $ from "jquery";
import Button from "react-bootstrap/Button";

// import axios from 'axios';


class Main extends Component {

    constructor(props) {
        super(props);
        // this.addOriginBankHandler();

    }

    state = {
        disableOriginBanksInput: true,
        disableDestinationBanksInput: true,
        originBanksInputCounter: 1,
        originBanksInput: [1],
        destinationBanksInputCounter: 1,
        destinationBanksInput: [1],
        remittanceContainersCounter: 1,
        remittanceContainers: [1],
        customerContainersCounter: 1,
        customerContainers: [1],
        formIsValid: false,
        loading: null
    };

    countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    moneyScales = ["1000", "10000", "100000", "1000000", "10000000"];

    disableOriginBanksInputHandler = (event) => {


        this.setState({disableOriginBanksInput: event.target.checked});
        if (event.target.checked) {
            this.state.originBanksInputCounter = 1;
            $(".origin-bank-input").val('');
            this.state.originBanksInput = [1];
        }
    };

    disableDestinationBanksInputHandler = (event) => {
        this.setState({disableDestinationBanksInput: event.target.checked});
        if (event.target.checked) {
            this.state.destinationBanksInputCounter = 1;
            $(".destination-bank-input").val('');
            this.state.destinationBanksInput = [1];
        }
    };

    addOriginBankInput = () => {
        const newOriginBanksInputCounter = this.state.originBanksInputCounter + 1;
        this.setState({originBanksInputCounter: newOriginBanksInputCounter});
        const newOriginBanksInput = [...this.state.originBanksInput, newOriginBanksInputCounter];
        this.setState({originBanksInput: newOriginBanksInput});
    };

    removeOriginBankInput = (value) => {
        const id = "origin-input-" + value;
        $("#" + id).remove();
        // const newOriginBanksInput = this.state.originBanksInput.filter(item => item !== value);
        // this.setState({originBanksInput: newOriginBanksInput});
    };


    addDestinationBankInput = () => {
        const newDestinationBanksInputCounter = this.state.destinationBanksInputCounter + 1;
        this.setState({destinationBanksInputCounter: newDestinationBanksInputCounter});
        const newDestinationBanksInput = [...this.state.destinationBanksInput, newDestinationBanksInputCounter];
        this.setState({destinationBanksInput: newDestinationBanksInput});
    };

    removeDestinationBankInput = (value) => {
        const id = "destination-input-" + value;

        $("#" + id).remove();
        // const newDestinationBanksInput = this.state.destinationBanksInput.filter(item => item !== value);
        // this.setState({destinationBanksInput: newDestinationBanksInput});
    };

    addRemittanceContainer = () => {

        const newRemittanceContainersCounter = this.state.remittanceContainersCounter + 1;
        this.setState({remittanceContainersCounter: newRemittanceContainersCounter});
        const newRemittanceContainers = [...this.state.remittanceContainers, newRemittanceContainersCounter];
        this.setState({remittanceContainers: newRemittanceContainers});
    };

    removeRemittanceContainer = (value) => {
        const id = "remittance-" + value;

        $("#" + id).remove();
        // const newRemittanceContainers = this.state.remittanceContainers.filter(item => item !== value);
        // this.setState({remittanceContainers: newRemittanceContainers});
    };

    addCustomerContainer = () => {
        const newCustomerContainersCounter = this.state.customerContainersCounter + 1;
        this.setState({customerContainersCounter: newCustomerContainersCounter});
        const newCustomerContainers = [...this.state.customerContainers, newCustomerContainersCounter];
        this.setState({customerContainers: newCustomerContainers});
    };

    removeCustomerContainer = (value) => {
        const id = "customer-" + value;

        $("#" + id).remove();

        // const newCustomerContainers = this.state.customerContainers.filter(item => item !== value);
        // this.setState({customerContainers: newCustomerContainers});
    };

    // checkValidity(value, rules) {
    //
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

    render() {

        // const tempOriginBanksInput = this.originBanksInput;

        let remittanceContainers =
            (
                this.state.remittanceContainers.map((value) => {


                    return (
                        <Form.Group className={styles.MainFormContent + " margin-bottom-5"} id={"remittance-" + value}>

                            <Form.Group>
                                <Button className="remove-btn control-btn"
                                        onClick={() => this.removeRemittanceContainer(value)}>×</Button>
                            </Form.Group>

                            <Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="3">کشور مبدأ حواله</Form.Label>
                                    <Col sm="3">
                                        <Form.Control as="select">
                                            {this.countries.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>

                                    <Col sm="6">
                                        <Form.Check
                                            inline
                                            custom
                                            type="radio"
                                            name="r1"
                                            id="r1"
                                            label="آیا در کشور مبداء با بانکی ارتباط دارید؟ بله"
                                        />
                                        <Form.Check
                                            inline
                                            custom
                                            type="radio"
                                            name="r1"
                                            id="r2"
                                            label="خیر"
                                        />


                                    </Col>

                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col sm="3">
                                        <ToggleButtonGroup type="checkbox" defaultValue={[1]} className="mb-2">
                                            <Form.Check
                                                custom
                                                type="checkbox"
                                                name="r1"
                                                id="c1"
                                                label="عدم افشای نام بانک"
                                                value={1}
                                                onChange={this.disableOriginBanksInputHandler}
                                            />
                                        </ToggleButtonGroup>
                                    </Col>
                                    <Col as={Row} noGutters="true" sm="9">

                                        <Col sm="12" as={Row} noGutters="true">
                                            {this.state.originBanksInput.map((value) => {
                                                console.log("input object created");
                                                return (
                                                    <Col as={Row} sm="12" noGutters="true" id={"origin-input-" + value}>
                                                        <Col sm={11} >
                                                            <Form.Control
                                                                disabled={this.state.disableOriginBanksInput}
                                                                placeholder="نام بانک در کشور مبداء"
                                                                className="margin-bottom-5 origin-bank-input"/>
                                                        </Col>
                                                        <Col sm={1} id={"origin-input-" + value}>
                                                            <Button className="remove-btn tiny-control-btn"
                                                                    onClick={() => this.removeOriginBankInput(value)}
                                                                    disabled={this.state.disableOriginBanksInput}>
                                                                ×</Button>
                                                        </Col>
                                                    </Col>

                                                );
                                            })}

                                        </Col>
                                        <Button variant="primary" className="add-btn tiny-control-btn"
                                                disabled={this.state.disableOriginBanksInput}
                                                onClick={this.addOriginBankInput}>+</Button>

                                    </Col>

                                </Form.Group>

                            </Form.Group>

                            <Form.Group className="margin-top-50">
                                <Form.Group as={Row}>
                                    <Form.Label column sm="3">کشور مقصد حواله</Form.Label>
                                    <Col sm="3">
                                        <Form.Control as="select">
                                            {this.countries.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>

                                    <Col sm="6">
                                        <Form.Check
                                            inline
                                            custom
                                            type="radio"
                                            name="r2"
                                            id="r3"
                                            label="آیا در کشور مقصد با بانکی ارتباط دارید؟ بله"
                                        />
                                        <Form.Check
                                            inline
                                            custom
                                            type="radio"
                                            name="r2"
                                            id="r4"
                                            label="خیر"
                                        />


                                    </Col>

                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col sm="3">
                                        <ToggleButtonGroup type="checkbox" defaultValue={[1]} className="mb-2">
                                            <Form.Check
                                                custom
                                                type="checkbox"
                                                name="r1"
                                                id="c2"
                                                label="عدم افشای نام بانک"
                                                value={1}
                                                onChange={this.disableDestinationBanksInputHandler}
                                            />
                                        </ToggleButtonGroup>
                                    </Col>
                                    <Col as={Row} sm="9" noGutters="true">

                                        <Col as={Row} sm="12" noGutters="true" id={"destination-input-" + value}>
                                            <Col sm={11} >
                                                <Form.Control
                                                    disabled={this.state.disableDestinationBanksInput}
                                                    placeholder="نام بانک در کشور مقصد"
                                                    className="margin-bottom-5 destination-bank-input"/>
                                            </Col>
                                            <Col sm={1} id={"destination-input-" + value}>
                                                <Button className="remove-btn tiny-control-btn"
                                                        onClick={() => this.removeDestinationBankInput(value)}
                                                        disabled={this.state.disableDestinationBanksInput}>
                                                    ×</Button>
                                            </Col>
                                        </Col>
                                        <Button variant="primary" className="add-btn tiny-control-btn"
                                                disabled={this.state.disableDestinationBanksInput}
                                                onClick={this.addDestinationBankInput}>+</Button>

                                    </Col>

                                </Form.Group>

                            </Form.Group>

                            <Form.Group className="separator">
                                <Form.Group as={Row}>

                                    <Form.Label column sm="3">
                                        {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                        حداقل مقدار حواله
                                        (دلار)
                                    </Form.Label>
                                    <Col sm="3">
                                        <Form.Control/>
                                    </Col>

                                    <Form.Label column sm="3">
                                        {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                        حداکثر مقدار حواله
                                        (دلار)

                                    </Form.Label>
                                    <Col sm="3">
                                        <Form.Control/>
                                    </Col>
                                </Form.Group>
                            </Form.Group>
                        </Form.Group>
                    );
                })
            );

        let customerContainers = (
            this.state.customerContainers.map((value) => {
                return (
                    <Form.Group className={styles.MainFormContent + " margin-bottom-5"} id={"customer-" + value}>

                        <Form.Group>
                            <Button className="remove-btn control-btn"
                                    onClick={() => this.removeCustomerContainer(value)}>×</Button>
                        </Form.Group>

                        <Form.Group as={Row} noGutters="true">

                            <Form.Label column sm="2">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                نوع مشتری
                            </Form.Label>

                            <Col sm="3">
                                <Form.Control as="select">
                                    <option key="i" value="importer">وارد کننده</option>
                                    <option key="e" value="exporter">صادر کننده</option>
                                </Form.Control>
                            </Col>

                            <Form.Label column sm="3">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                حجم تراکنش سالانه
                            </Form.Label>

                            <Col sm="4">
                                <Form.Control/>
                            </Col>

                        </Form.Group>
                    </Form.Group>

                );
            })
        );


        let form = (
            <Form>

                <Form.Group className={styles.MainFormContainer}>

                    {remittanceContainers}

                    <Button className="add-btn control-btn margin" variant="primary"
                            onClick={this.addRemittanceContainer}>+</Button>
                </Form.Group>

                <Form.Group className={styles.MainFormContainer}>
                    {customerContainers}
                    <Button className="add-btn  control-btn margin" variant="primary" onClick={this.addCustomerContainer}>+</Button>
                </Form.Group>

                <Form.Group className={styles.MainFormContainer}>
                    <Form.Group className={styles.MainFormContent + " margin-bottom-5"}>
                        <Form.Group as={Row}>

                            <Form.Label column sm="5">
                                سرمایه مورد نیاز برای گسترش شبکه (دلار)
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control as="select">
                                    {this.moneyScales.map(option => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Col>

                        </Form.Group>
                    </Form.Group>
                </Form.Group>

            </Form>
        );


        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className="margin-bottom-50">
                <h4 className={styles.TextCenter}>فرم زیر را کامل کنید</h4>
                <div className={styles.MainForm}>
                    {form}
                </div>
                <Button className="margin-top-5">ارسال</Button>
            </div>
        );
    }
}

export default Main;