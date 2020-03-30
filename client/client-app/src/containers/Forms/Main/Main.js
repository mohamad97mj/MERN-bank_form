import React, {Component} from 'react';
// import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './Main.module.css';
import './Main.css';
import '../Form.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import $ from "jquery";
import Button from "react-bootstrap/Button";


class Main extends Component {

    constructor(props) {
        super(props);
        // this.addOriginBankHandler();

    }

    clone = (items) => items.map(item => Array.isArray(item) ? this.clone(item) : item);

    state = {

        customerContainersCounter: 1,
        customerContainers: [1],
        formIsValid: false,
        loading: null,
        //..................................


        remittanceContents: [
            {
                originCountry: "",
                originConnectionCheck: true,
                // originNameCheck: false,
                originBanksCounter: 1,
                originBanks: [
                    {
                        nameCheck: false,
                        name: "",
                        minimumAmount: "",
                        maximumAmount: "",
                    }
                ],

                destinationCountry: "",
                destinationConnectionCheck: true,
                destinationNameCheck: false,
                destinationBanksCounter: 1,
                destinationBanks: [
                    {
                        nameCheck: false,
                        name: "",
                        minimumAmount: "",
                        maximumAmount: "",
                    }
                ],
            },
        ],

    };


    remittanceOnChangeHandler = (event, rn, cn) => {

        const remittanceContentsCopy = this.clone(this.state.remittanceContents);
        remittanceContentsCopy[rn][cn] = event.target.value;

        this.setState({
            remittanceContents: remittanceContentsCopy,
        });
    };

    remittanceBankOnChangeHandler = (event, rn, cn, bn, bcn) => {
        const remittanceContentsCopy = this.clone(this.state.remittanceContents);
        remittanceContentsCopy[rn][cn][bn][bcn] = event.target.value;
        this.setState({
            remittanceContents: remittanceContentsCopy,
        });
    };

    addRemittanceHandler = () => {

        const remittanceContentsCopy = this.clone(this.state.remittanceContents);

        remittanceContentsCopy.push(
            {
                originCountry: "",
                originConnectionCheck: true,
                // originNameCheck: false,
                originBanksCounter: 1,
                originBanks: [
                    {
                        nameCheck: false,
                        name: "",
                        minimumAmount: "",
                        maximumAmount: "",
                    }
                ],

                destinationCountry: "",
                destinationConnectionCheck: true,
                destinationNameCheck: false,
                destinationBanksCounter: 1,
                destinationBanks: [
                    {
                        nameCheck: false,
                        name: "",
                        minimumAmount: "",
                        maximumAmount: "",
                    }
                ],
            },
        );


        this.setState({
            remittanceContents: remittanceContentsCopy,
        });
    };

    removeRemittanceHandler = (index) => {
        const remittanceContentsCopy = this.clone(this.state.remittanceContents);

        remittanceContentsCopy.splice(index, 1);

        this.setState({
            remittanceContents: remittanceContentsCopy,
        });
    };


    countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    moneyScales = ["1000", "10000", "100000", "1000000", "10000000"];

    disableBanksNameHandler = (event, rn, cn1, bn) => {

        const remittanceContentsCopy = this.clone(this.state.remittanceContents);

        if (event.target.checked) {

            remittanceContentsCopy[rn][cn1][bn].name = "";
        }

        remittanceContentsCopy[rn][cn1][bn].nameCheck = event.target.checked;
        this.setState({
            remittanceContents: remittanceContentsCopy,
        });

    };

    disableBanksHandler = (event, rn, cn1, cn2) => {

        const remittanceContentsCopy = this.clone(this.state.remittanceContents);

        if (event.target.value === "false") {

            remittanceContentsCopy[rn][cn1] =
                [
                    {
                        nameCheck: false,
                        name: "",
                        minimumAmount: "",
                        maximumAmount: "",
                    }

                ]
            ;

            remittanceContentsCopy[rn][cn2] = false;

        } else {

            remittanceContentsCopy[rn][cn2] = true;
        }

        this.setState({
            remittanceContents: remittanceContentsCopy,
        });

    };

    addBankHandler = (rn, cn1) => {

        const remittanceContentsCopy = this.clone(this.state.remittanceContents);

        remittanceContentsCopy[rn][cn1].push(
            {
                name: "",
                minimumAmount: "",
                maximumAmount: "",
            }
        );


        this.setState({
            remittanceContents: remittanceContentsCopy,
        });
    };

    removeBankHandler = (rn, cn1, bn) => {

        const remittanceContentsCopy = this.clone(this.state.remittanceContents);

        remittanceContentsCopy[rn][cn1].splice(bn, 1);

        this.setState({
            remittanceContents: remittanceContentsCopy,
        });
    };


    render() {

        let remittanceContainers =
            (
                this.state.remittanceContents.map((rc, ri) => {

                    return (
                        <Form.Group className="form-content margin-bottom-5" id={"rc-" + ri}>

                            <Form.Group>
                                <Button className="remove-btn control-btn"
                                        onClick={() => this.removeRemittanceHandler(ri)}>×</Button>
                            </Form.Group>


                            <Form.Group>
                                <Form.Group as={Row} noGutters="true" style={{marginRight: "15px"}}>
                                    <Form.Label column sm="2">کشور مبدأ حواله</Form.Label>
                                    <Col sm="3">
                                        <Form.Control as="select"
                                                      id={"rc-" + ri + "-origin-country"}
                                                      onChange={(e) => this.remittanceOnChangeHandler(e, ri, "originCountry")}
                                                      value={rc.originCountry}>
                                            {this.countries.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>

                                    <Col sm="1"></Col>

                                    <Col sm="6">
                                        <ToggleButtonGroup type="radio" className="mb-2"
                                                           defaultValue={rc.originConnectionCheck}
                                                           name={"rc-" + ri + "-origin-connection-check"}>
                                            <Form.Check
                                                value={true}
                                                inline
                                                custom
                                                type="radio"
                                                id={"rc-" + ri + "-origin-connection-check-1"}
                                                label="آیا در کشور مبداء با بانکی ارتباط دارید؟ بله"
                                                onChange={(e) => this.disableBanksHandler(e, ri, "originBanks", "originConnectionCheck")}
                                            />
                                            <pre>    </pre>
                                            <Form.Check
                                                value={false}
                                                inline
                                                custom
                                                type="radio"
                                                id={"rc-" + ri + "-origin-connection-check-2"}
                                                label="خیر"
                                                onChange={(e) => this.disableBanksHandler(e, ri, "originBanks", "originConnectionCheck")}
                                            />
                                        </ToggleButtonGroup>

                                    </Col>

                                </Form.Group>

                                <Form.Group as={Row} noGutters="true" style={{marginBottom: "0"}}>

                                    {rc.originBanks.map((b, bi) => {
                                        return (
                                            <Col as={Row} sm="12" noGutters="true"
                                                 style={{marginBottom: "5px"}}
                                                 id={"rc" + ri + "-origin-bank-" + bi}>

                                                <Col as={Row} sm="11" className="form-inner-content"
                                                     style={{marginRight: "15px"}}>
                                                    <Col sm="4">
                                                        <Form.Control
                                                            value={b.name}
                                                            disabled={b.nameCheck || !rc.originConnectionCheck}
                                                            placeholder="نام بانک در کشور مبداء"
                                                            className="margin-bottom-5 origin-bank-input"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "originBanks", bi, "name")}
                                                        />
                                                    </Col>

                                                    <Col sm="4" as={Row}>

                                                        <Form.Label column sm="6">
                                                            &nbsp;&nbsp;&nbsp;
                                                            عدم افشای نام بانک</Form.Label>
                                                        <Col sm="6">

                                                            <ToggleButtonGroup type="checkbox" className="mb-2"
                                                                               defaultValue={b.nameCheck}>
                                                                <Form.Check
                                                                    disabled={!rc.originConnectionCheck}
                                                                    value={true}
                                                                    custom
                                                                    type="checkbox"
                                                                    name={"rc-" + ri + "-origin-name-check-" + bi}
                                                                    id={"rc-" + ri + "-origin-name-check-" + bi}
                                                                    label=""
                                                                    onChange={(e) => this.disableBanksNameHandler(e, ri, "originBanks", bi)}
                                                                />
                                                            </ToggleButtonGroup>
                                                        </Col>
                                                    </Col>


                                                    <Col sm="2">
                                                        <Form.Control
                                                            value={b.minimumAmount}
                                                            placeholder="حداقل مقدار حواله"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "originBanks", bi, "minimumAmount")}
                                                            disabled={!rc.originConnectionCheck}

                                                        />
                                                    </Col>

                                                    <Col sm="2">
                                                        <Form.Control
                                                            value={b.maximumAmount}
                                                            placeholder="حداکثر مقدار حواله"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "originBanks", bi, "maximumAmount")}
                                                            disabled={!rc.originConnectionCheck}

                                                        />
                                                    </Col>

                                                </Col>

                                                <Col sm="1">
                                                    <Button className="remove-btn tiny-control-btn"

                                                            onClick={() => this.removeBankHandler(ri, "originBanks", bi)}
                                                            disabled={!rc.originConnectionCheck}>
                                                        ×</Button>
                                                </Col>
                                            </Col>

                                        );
                                    })}

                                </Form.Group>
                                <Button variant="primary" className="add-btn tiny-control-btn"
                                        style={{marginRight: "15px"}}
                                        disabled={rc.originNameCheck}
                                        onClick={() => this.addBankHandler(ri, "originBanks")}>+</Button>


                            </Form.Group>


                            <Form.Group className="margin-top-50">

                                <Form.Group as={Row} noGutters="true" style={{marginRight: "15px"}}>
                                    <Form.Label column sm="2">کشور مقصد حواله</Form.Label>
                                    <Col sm="3">
                                        <Form.Control as="select"
                                                      id={"rc-" + ri + "-destination-country"}
                                                      value={rc.destinationCountry}
                                                      onChange={(e) => this.remittanceOnChangeHandler(e, ri, "destinationCountry")}>

                                            {this.countries.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>

                                    <Col sm="1"></Col>

                                    <Col sm="6">
                                        <ToggleButtonGroup type="radio" className="mb-2"
                                                           defaultValue={rc.destinationConnectionCheck}
                                                           name={"rc-" + ri + "-destination-connection-check"}>

                                            <Form.Check
                                                value={true}
                                                inline
                                                custom
                                                type="radio"
                                                id={"rc-" + ri + "-destination-connection-check-1"}
                                                label="آیا در کشور مقصد با بانکی ارتباط دارید؟ بله"
                                                onChange={(e) => this.disableBanksHandler(e, ri, "destinationBanks", "destinationConnectionCheck")}

                                            />
                                            <pre>    </pre>

                                            <Form.Check
                                                value={false}
                                                inline
                                                custom
                                                type="radio"
                                                id={"rc-" + ri + "-destination-connection-check-2"}
                                                label="خیر"
                                                onChange={(e) => this.disableBanksHandler(e, ri, "destinationBanks", "destinationConnectionCheck")}

                                            />

                                        </ToggleButtonGroup>


                                    </Col>

                                </Form.Group>

                                <Form.Group as={Row} noGutters="true" style={{marginBottom: "0"}}>
                                    {rc.destinationBanks.map((b, bi) => {
                                        return (
                                            <Col as={Row} sm="12" noGutters="true"
                                                 style={{marginBottom: "5px"}}
                                                 id={"rc" + ri + "-destination-bank-" + bi}>
                                                <Col as={Row} sm="11" className="form-inner-content"
                                                     style={{marginRight: "15px"}}>

                                                    <Col sm="4">
                                                        <Form.Control
                                                            value={b.name}
                                                            disabled={b.nameCheck || !rc.destinationConnectionCheck}
                                                            placeholder="نام بانک در کشور مقصد"
                                                            className="margin-bottom-5 destination-bank-input"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "destinationBanks", bi, "name")}
                                                        />
                                                    </Col>

                                                    <Col sm="4" as={Row}>

                                                        <Form.Label column sm="6">
                                                            &nbsp;&nbsp;&nbsp;
                                                            عدم افشای نام بانک
                                                        </Form.Label>

                                                        <Col sm="6">
                                                            <ToggleButtonGroup type="checkbox" className="mb-2"
                                                                               defaultValue={rc.destinationNameCheck}>
                                                                <Form.Check
                                                                    disabled={!rc.destinationConnectionCheck}
                                                                    value={true}
                                                                    custom
                                                                    type="checkbox"
                                                                    name={"rc-" + ri + "-destination-name-check-" + bi}
                                                                    id={"rc-" + ri + "-destination-name-check-" + bi}
                                                                    onChange={(e) => this.disableBanksNameHandler(e, ri, "destinationBanks", bi)}
                                                                    label=""
                                                                />
                                                            </ToggleButtonGroup>
                                                        </Col>
                                                    </Col>

                                                    <Col sm="2">
                                                        <Form.Control
                                                            value={b.minimumAmount}
                                                            placeholder="حداقل مقدار حواله"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "destinationBanks", bi, "minimumAmount")}
                                                            disabled={!rc.destinationConnectionCheck}
                                                        />
                                                    </Col>

                                                    <Col sm="2">
                                                        <Form.Control
                                                            value={b.maximumAmount}
                                                            placeholder="حداکثر مقدار حواله"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "destinationBanks", bi, "maximumAmount")}
                                                            disabled={!rc.destinationConnectionCheck}
                                                        />
                                                    </Col>

                                                </Col>

                                                <Col sm="1">
                                                    <Button className="remove-btn tiny-control-btn"
                                                            onClick={() => this.removeBankHandler(ri, "destinationBanks", bi)}
                                                            disabled={!rc.destinationConnectionCheck}>
                                                        ×</Button>
                                                </Col>
                                            </Col>

                                        );
                                    })}

                                </Form.Group>
                                <Button variant="primary" className="add-btn tiny-control-btn"
                                        style={{marginRight: "15px"}}
                                        disabled={rc.destinationNameCheck}
                                        onClick={() => this.addBankHandler(ri, "destinationBanks")}>+</Button>

                            </Form.Group>


                        </Form.Group>
                    );
                })
            );


        let customerContainers = (
            this.state.customerContainers.map((value) => {
                return (
                    <Form.Group className="form-content margin-bottom-5" id={"customer-" + value}>

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

                <Form.Group className="form-container padding-bottom-5">

                    {remittanceContainers}

                    <Button className="add-btn control-btn margin" variant="primary"
                            onClick={this.addRemittanceHandler}>+</Button>
                </Form.Group>

                <Form.Group className="form-container">
                    {customerContainers}
                    <Button className="add-btn control-btn margin" variant="primary"
                            onClick={this.addCustomerContainer}>+</Button>
                </Form.Group>

                <Form.Group className="form-container">
                    <Form.Group className="form-content margin-bottom-5">
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
                <div className={styles.MainForm +  " form-inner-content my-form"}>
                    {form}
                </div>
                <Button className="margin-top-5" disabled="true" className="submit-btn">ارسال</Button>
            </div>
        );
    }
}

export default Main;