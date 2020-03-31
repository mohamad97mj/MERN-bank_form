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

        formIsValid: false,
        loading: null,
        //..................................

        customerContents: [
            {
                type: "",
                amount: "",
            },
        ],

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
                        negotiationLevel: ""
                    }
                ],
                originPartners: [
                    {
                        name: "",
                        countries: [
                            {
                                name: "",
                                amount: "",
                            }
                        ]
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
                        negotiationLevel: ""

                    }
                ],
                destinationPartners: [
                    {
                        name: "",
                        countries: [
                            {
                                name: "",
                                amount: "",
                            }
                        ]
                    }
                ],
            },
        ],

    };

    countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    negotiationLevels = ["سطح قدرت مذاکره", "رییس شعبه", "مدیران ارشد", "هیئت مدیره"];
    moneyScales = ["1000", "10000", "100000", "1000000", "10000000", "100000000", "1000000000", "10000000000"];


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
                originBanks: [
                    {
                        nameCheck: false,
                        name: "",
                        minimumAmount: "",
                        maximumAmount: "",
                        negotiationLevel: ""

                    }
                ],
                originPartners: [
                    {
                        name: "",
                        countries: [
                            {
                                name: "",
                                amount: "",
                            }
                        ]
                    }
                ],

                destinationCountry: "",
                destinationConnectionCheck: true,
                destinationNameCheck: false,
                destinationBanks: [
                    {
                        nameCheck: false,
                        name: "",
                        minimumAmount: "",
                        maximumAmount: "",
                        negotiationLevel: ""

                    }
                ],
                destinationPartners: [
                    {
                        name: "",
                        countries: [
                            {
                                name: "",
                                amount: "",
                            }
                        ]
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

        if (remittanceContentsCopy.length > 1) {

            remittanceContentsCopy.splice(index, 1);

            this.setState({
                remittanceContents: remittanceContentsCopy,
            });
        }
    };

    //.................................................................................

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

    disableRemittanceBanksHandler = (event, rn, cn1, cn2) => {

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

    addRemittanceBankHandler = (rn, cn) => {

        const remittanceContentsCopy = this.clone(this.state.remittanceContents);
        remittanceContentsCopy[rn][cn].push(
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

    removeRemittanceBankHandler = (rn, cn, bn) => {


        const remittanceContentsCopy = this.clone(this.state.remittanceContents);

        if (remittanceContentsCopy[rn][cn].length > 1) {

            remittanceContentsCopy[rn][cn].splice(bn, 1);
            this.setState({
                remittanceContents: remittanceContentsCopy,
            });
        }
    };

    //..................................................................................

    remittancePartnerNameOnChangeHandler = (event, rn, cn, pn) => {
        const remittanceContentsCopy = this.clone(this.state.remittanceContents);
        remittanceContentsCopy[rn][cn][pn].name = event.target.value;
        this.setState({
            remittanceContents: remittanceContentsCopy,
        });
    };

    remittancePartnerCountryOnChangeHandler = (event, rn, cn, pn, con, cn2) => {
        const remittanceContentsCopy = this.clone(this.state.remittanceContents);
        remittanceContentsCopy[rn][cn][pn].countries[con][cn2] = event.target.value;
        this.setState({
            remittanceContents: remittanceContentsCopy,
        });
    };

    addRemittancePartnerHandler = (rn, cn) => {
        const remittanceContentsCopy = this.clone(this.state.remittanceContents);
        remittanceContentsCopy[rn][cn].push(
            {
                name: "",
                countries: [
                    {
                        name: "",
                        amount: "",
                    }
                ]
            }
        );
        this.setState({
            remittanceContents: remittanceContentsCopy,
        });

    };

    removeRemittancePartnerHandler = (rn, cn, pn) => {

        const remittanceContentsCopy = this.clone(this.state.remittanceContents);

        if (remittanceContentsCopy[rn][cn].length > 1) {
            remittanceContentsCopy[rn][cn].splice(pn, 1);
            this.setState({
                remittanceContents: remittanceContentsCopy,
            });
        }
    };

    addRemittancePartnerCountryHandler = (rn, cn, pn) => {

        const remittanceContentsCopy = this.clone(this.state.remittanceContents);

        remittanceContentsCopy[rn][cn][pn].countries.push(
            {
                name: "",
                amount: "",
            }
        );
        this.setState({
            remittanceContents: remittanceContentsCopy,
        });
    };

    removeRemittancePartnerCountryHandler = (rn, cn, pn, con) => {

        const remittanceContentsCopy = this.clone(this.state.remittanceContents);
        if (remittanceContentsCopy[rn][cn][pn].countries.length > 1) {

            remittanceContentsCopy[rn][cn][pn].countries.splice(con, 1);
            this.setState({
                remittanceContents: remittanceContentsCopy,
            });
        }
    };

    //..................................................................................................................

    addCustomerHandler = () => {

        const customerContentsCopy = this.clone(this.state.customerContents);
        customerContentsCopy.push(
            {
                type: "",
                amount: "",
            },
        );


        this.setState({
            customerContents: customerContentsCopy,
        });
    };

    removeCustomerHandler = (index) => {

        const customerContentsCopy = this.clone(this.state.customerContents);
        if (customerContentsCopy.length > 1) {

            customerContentsCopy.splice(index, 1);

            this.setState({
                customerContents: customerContentsCopy,
            });
        }
    };

    customerOnChangeHandler = (event, cun, cn) => {

        const customerContentsCopy = this.clone(this.state.customerContents);
        customerContentsCopy[cun][cn] = event.target.value;

        this.setState({
            customerContents: customerContentsCopy,
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
                                    <Form.Label column sm="1">کشور مبدأ حواله :</Form.Label>
                                    <Col sm="2">
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
                                                onChange={(e) => this.disableRemittanceBanksHandler(e, ri, "originBanks", "originConnectionCheck")}
                                            />
                                            <pre>    </pre>
                                            <Form.Check
                                                value={false}
                                                inline
                                                custom
                                                type="radio"
                                                id={"rc-" + ri + "-origin-connection-check-2"}
                                                label="خیر"
                                                onChange={(e) => this.disableRemittanceBanksHandler(e, ri, "originBanks", "originConnectionCheck")}
                                            />
                                        </ToggleButtonGroup>

                                    </Col>

                                </Form.Group>

                                <Form.Group as={Row} noGutters="true" className="mb-0 ">

                                    {rc.originBanks.map((b, bi) => {
                                        return (
                                            <Col as={Row} sm="12" noGutters="true"
                                                 style={{marginBottom: "5px"}}
                                                 id={"rc" + ri + "-origin-bank-" + bi}>

                                                <Col as={Row} sm="11" className="form-inner-content"
                                                     style={{marginRight: "15px"}}>
                                                    <Col sm="3">
                                                        <Form.Control
                                                            value={b.name}
                                                            disabled={b.nameCheck || !rc.originConnectionCheck}
                                                            placeholder="نام بانک در کشور مبداء"
                                                            className="margin-bottom-5 origin-bank-input"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "originBanks", bi, "name")}
                                                        />
                                                    </Col>

                                                    <Col sm="2" as={Row} noGutters="true">

                                                        <Form.Label column sm="9">
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                            عدم افشای نام بانک
                                                        </Form.Label>
                                                        <Col sm="1">

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
                                                            placeholder="حداقل مقدار حواله ماهانه"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "originBanks", bi, "minimumAmount")}
                                                            disabled={!rc.originConnectionCheck}

                                                        />
                                                    </Col>

                                                    <Col sm="2">
                                                        <Form.Control
                                                            value={b.maximumAmount}
                                                            placeholder="حداکثر مقدار حواله ماهانه"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "originBanks", bi, "maximumAmount")}
                                                            disabled={!rc.originConnectionCheck}

                                                        />
                                                    </Col>

                                                    <Col sm="2">
                                                        <Form.Control as="select"
                                                                      onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "originBanks", bi, "negotiationLevel")}
                                                                      value={b.negotiationLevel}>
                                                            {this.negotiationLevels.map(option => (
                                                                <option key={option} value={option}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </Form.Control>
                                                    </Col>


                                                </Col>

                                                <Col sm="1">
                                                    <Button className="remove-btn tiny-control-btn"

                                                            onClick={() => this.removeRemittanceBankHandler(ri, "originBanks", bi)}
                                                            disabled={!rc.originConnectionCheck}>
                                                        >
                                                        ×</Button>
                                                </Col>
                                            </Col>

                                        );
                                    })}

                                </Form.Group>
                                <Button variant="primary" className="add-btn tiny-control-btn"
                                        style={{marginRight: "15px"}}
                                        disabled={rc.originNameCheck}
                                        onClick={() => this.addRemittanceBankHandler(ri, "originBanks")}>+</Button>


                                <Form.Group as={Row} className="mb-0 mt-4" noGutters="true">

                                    {rc.originPartners.map((p, pi) => {
                                        return (
                                            <Col as={Row} sm="12"
                                                 noGutters="true"
                                                 style={{marginBottom: "5px"}}
                                                 id={"rc" + ri + "-origin-partner-" + pi}>

                                                <Col as={Row} sm="11" className="form-inner-content"
                                                     style={{marginRight: "15px"}}>
                                                    <Col sm="4">
                                                        <Form.Control
                                                            value={p.name}
                                                            placeholder="نام شریک اقتصادی در کشور مبداء"
                                                            className="margin-bottom-5 origin-bank-input"
                                                            onChange={(e) => this.remittancePartnerNameOnChangeHandler(e, ri, "originPartners", pi)}
                                                        />
                                                    </Col>

                                                    <Col sm="8" as={Row} noGutters="true">
                                                        {p.countries.map((c, ci) => {
                                                            return (
                                                                <Col as={Row} noGutters="true" sm="12">
                                                                    <Col as={Row} noGutterrs="true" sm="11"
                                                                         style={{marginRight: "15px"}}
                                                                         className="form-content mb-1">
                                                                        <Col sm="8" as={Row} noGutters="true">
                                                                            <Form.Label column sm="5">کشور طرف
                                                                                معامله :</Form.Label>
                                                                            <Col sm="7">
                                                                                <Form.Control as="select"
                                                                                              id={"rc-" + ri + "-origin-partner-" + pi + "-country-" + ci}
                                                                                              onChange={(e) => this.remittancePartnerCountryOnChangeHandler(e, ri, "originPartners", pi, ci, "name")}
                                                                                              value={c.name}>
                                                                                    {this.countries.map(option => (
                                                                                        <option key={option}
                                                                                                value={option}>
                                                                                            {option}
                                                                                        </option>
                                                                                    ))}
                                                                                </Form.Control>
                                                                            </Col>
                                                                        </Col>

                                                                        <Col sm="4">
                                                                            <Form.Control
                                                                                value={c.amount}
                                                                                placeholder="حجم معامله"
                                                                                onChange={(e) => this.remittancePartnerCountryOnChangeHandler(e, ri, "originPartners", pi, ci, "amount")}
                                                                            />
                                                                        </Col>
                                                                    </Col>
                                                                    <Col sm="1">
                                                                        <Button className="remove-btn tiny-control-btn"

                                                                                onClick={() => this.removeRemittancePartnerCountryHandler(ri, "originPartners", pi, ci)}>
                                                                            ×</Button>
                                                                    </Col>
                                                                </Col>

                                                            );
                                                        })}

                                                        <Button variant="primary"
                                                                className="add-btn tiny-control-btn mr-3"
                                                                onClick={() => this.addRemittancePartnerCountryHandler(ri, "originPartners", pi)}>+</Button>
                                                    </Col>

                                                </Col>

                                                <Col sm="1">
                                                    <Button className="remove-btn tiny-control-btn"

                                                            onClick={() => this.removeRemittancePartnerHandler(ri, "originPartners", pi)}>
                                                        ×</Button>
                                                </Col>
                                            </Col>

                                        );
                                    })}

                                </Form.Group>

                                <Button variant="primary" className="add-btn tiny-control-btn"
                                        style={{marginRight: "15px"}}
                                        onClick={() => this.addRemittancePartnerHandler(ri, "originPartners")}>+</Button>


                            </Form.Group>


                            <Form.Group className="margin-top-50">

                                <Form.Group as={Row} noGutters="true" style={{marginRight: "15px"}}>
                                    <Form.Label column sm="1">کشور مقصد حواله:</Form.Label>
                                    <Col sm="2">
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
                                                onChange={(e) => this.disableRemittanceBanksHandler(e, ri, "destinationBanks", "destinationConnectionCheck")}

                                            />
                                            <pre>    </pre>

                                            <Form.Check
                                                value={false}
                                                inline
                                                custom
                                                type="radio"
                                                id={"rc-" + ri + "-destination-connection-check-2"}
                                                label="خیر"
                                                onChange={(e) => this.disableRemittanceBanksHandler(e, ri, "destinationBanks", "destinationConnectionCheck")}

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

                                                    <Col sm="3">
                                                        <Form.Control
                                                            value={b.name}
                                                            disabled={b.nameCheck || !rc.destinationConnectionCheck}
                                                            placeholder="نام بانک در کشور مقصد"
                                                            className="margin-bottom-5 destination-bank-input"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "destinationBanks", bi, "name")}
                                                        />
                                                    </Col>

                                                    <Col sm="2" as={Row} noGutters="true">

                                                        <Form.Label column sm="9">
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                            عدم افشای نام بانک
                                                        </Form.Label>

                                                        <Col sm="1">
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
                                                            placeholder="حداقل مقدار حواله ماهانه"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "destinationBanks", bi, "minimumAmount")}
                                                            disabled={!rc.destinationConnectionCheck}
                                                        />
                                                    </Col>

                                                    <Col sm="2">
                                                        <Form.Control
                                                            value={b.maximumAmount}
                                                            placeholder="حداکثر مقدار حواله ماهانه"
                                                            onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "destinationBanks", bi, "maximumAmount")}
                                                            disabled={!rc.destinationConnectionCheck}
                                                        />
                                                    </Col>

                                                    <Col sm="2">

                                                        <Form.Control as="select"
                                                                      onChange={(e) => this.remittanceBankOnChangeHandler(e, ri, "destinationBanks", bi, "negotiationLevel")}
                                                                      value={b.negotiationLevel}>
                                                            {this.negotiationLevels.map(option => (
                                                                <option key={option} value={option}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </Form.Control>
                                                    </Col>
                                                </Col>

                                                <Col sm="1">
                                                    <Button className="remove-btn tiny-control-btn"
                                                            onClick={() => this.removeRemittanceBankHandler(ri, "destinationBanks", bi)}
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
                                        onClick={() => this.addRemittanceBankHandler(ri, "destinationBanks")}>+</Button>

                                <Form.Group as={Row} className="mb-0 mt-4" noGutters="true">

                                    {rc.destinationPartners.map((p, pi) => {
                                        return (
                                            <Col as={Row} sm="12"
                                                 noGutters="true"
                                                 style={{marginBottom: "5px"}}
                                                 id={"rc" + ri + "-destination-partner-" + pi}>

                                                <Col as={Row} sm="11" className="form-inner-content"
                                                     style={{marginRight: "15px"}}>
                                                    <Col sm="4">
                                                        <Form.Control
                                                            value={p.name}
                                                            placeholder="نام شریک اقتصادی در کشور مقصد"
                                                            className="margin-bottom-5 origin-bank-input"
                                                            onChange={(e) => this.remittancePartnerNameOnChangeHandler(e, ri, "destinationPartners", pi)}
                                                        />
                                                    </Col>
                                                    <Col sm="8" as={Row} noGutters="true">
                                                        {p.countries.map((c, ci) => {
                                                            return (
                                                                <Col as={Row} noGutters="true" sm="12">
                                                                    <Col as={Row} noGutterrs="true" sm="11"
                                                                         style={{marginRight: "15px"}}
                                                                         className="form-content mb-1">
                                                                        <Col sm="8" as={Row} noGutters="true">
                                                                            <Form.Label column sm="5">کشور طرف
                                                                                معامله :</Form.Label>
                                                                            <Col sm="7">
                                                                                <Form.Control as="select"
                                                                                              id={"rc-" + ri + "-destination-partner-" + pi + "-country-" + ci}
                                                                                              onChange={(e) => this.remittancePartnerCountryOnChangeHandler(e, ri, "destinationPartners", pi, ci, "name")}
                                                                                              value={c.name}>
                                                                                    {this.countries.map(option => (
                                                                                        <option key={option}
                                                                                                value={option}>
                                                                                            {option}
                                                                                        </option>
                                                                                    ))}
                                                                                </Form.Control>
                                                                            </Col>
                                                                        </Col>

                                                                        <Col sm="4">
                                                                            <Form.Control
                                                                                value={c.amount}
                                                                                placeholder="حجم معامله"
                                                                                onChange={(e) => this.remittancePartnerCountryOnChangeHandler(e, ri, "destinationPartners", pi, ci, "amount")}
                                                                            />
                                                                        </Col>
                                                                    </Col>
                                                                    <Col sm="1">
                                                                        <Button className="remove-btn tiny-control-btn"

                                                                                onClick={() => this.removeRemittancePartnerCountryHandler(ri, "destinationPartners", pi, ci)}>
                                                                            ×</Button>
                                                                    </Col>
                                                                </Col>

                                                            );
                                                        })}

                                                        <Button variant="primary"
                                                                className="add-btn tiny-control-btn mr-3"
                                                                onClick={() => this.addRemittancePartnerCountryHandler(ri, "destinationPartners", pi)}>+</Button>
                                                    </Col>

                                                </Col>

                                                <Col sm="1">
                                                    <Button className="remove-btn tiny-control-btn"

                                                            onClick={() => this.removeRemittancePartnerHandler(ri, "destinationPartners", pi)}>
                                                        ×</Button>
                                                </Col>
                                            </Col>

                                        );
                                    })}

                                </Form.Group>

                                <Button variant="primary" className="add-btn tiny-control-btn"
                                        style={{marginRight: "15px"}}
                                        onClick={() => this.addRemittancePartnerHandler(ri, "destinationPartners")}>+</Button>

                            </Form.Group>


                        </Form.Group>
                    );
                })
            );


        let customerContainers = (
            this.state.customerContents.map((cc, ci) => {
                return (
                    <Form.Group className="form-content margin-bottom-5" id={"customer-" + ci}
                                style={{padding: "5px 45px 5px 45px"}}>

                        <Form.Group>
                            <Button className="remove-btn control-btn"
                                    onClick={() => this.removeCustomerHandler(ci)}>×</Button>
                        </Form.Group>

                        <Form.Group as={Row}>

                            <Form.Label column sm="2">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                نوع مشتری :
                            </Form.Label>

                            <Col sm="3">
                                <Form.Control as="select"
                                              value={cc.type}
                                              onChange={(e) => this.customerOnChangeHandler(e, ci, "type")}>
                                    <option key="i" value="importer">وارد کننده</option>
                                    <option key="e" value="exporter">صادر کننده</option>
                                </Form.Control>
                            </Col>

                            <Col sm="2"></Col>

                            <Form.Label column sm="2">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                حجم تراکنش سالانه :
                            </Form.Label>

                            <Col sm="2">
                                <Form.Control as="select"
                                              value={cc.amount}
                                              onChange={(e) => this.customerOnChangeHandler(e, ci, "amount")}>

                                    {this.moneyScales.map(option => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Control>

                            </Col>

                            <Col sm="1"></Col>

                        </Form.Group>
                    </Form.Group>

                );
            })
        );


        let form = (
            <Form>

                <Form.Group className="form-inner-content padding-bottom-5">

                    {remittanceContainers}

                    <Button className="add-btn control-btn margin" variant="primary"
                            onClick={this.addRemittanceHandler}>+</Button>
                </Form.Group>

                <Form.Group className="form-inner-content">
                    {customerContainers}
                    <Button className="add-btn control-btn margin" variant="primary"
                            onClick={this.addCustomerHandler}>+</Button>
                </Form.Group>

                <Form.Group className="form-inner-content">
                    <Form.Group className="form-content margin-bottom-5" style={{padding: "5px 45px 5px 45px"}}>
                        <Form.Group as={Row}>

                            <Form.Label column sm="3">
                                سرمایه مورد نیاز برای گسترش شبکه :
                            </Form.Label>
                            <Col sm="2">
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
            <div className="mt-5 mb-5">
                <h4 className={styles.TextCenter}>فرم زیر را کامل کنید</h4>
                <div className="main-form my-form">
                    {form}
                </div>
                <Button disabled="true" className="submit-btn">ارسال</Button>
            </div>
        );
    }
}

export default Main;