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
import Container from "react-bootstrap/Container";
import * as actions from "../../../api";
import {connect} from "react-redux";


class Main extends Component {

    constructor(props) {
        super(props);
        // this.addOriginBankHandler();

    }

    state = {
        editable: false,
    };


    countries =
        ["Afghanistan", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    countriesMode2 =
        ["کشور مبداء حواله", "Afghanistan", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    countriesMode21 =
        ["کشور مقصد حواله", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    countriesMode22 =
        ["کشور طرف معامله", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    negotiationLevels = ["رییس شعبه", "مدیران ارشد", "هیئت مدیره"];
    negotiationLevelsMode2 = ["انتخاب سطح قدرت مذاکره", "رییس شعبه", "مدیران ارشد", "هیئت مدیره"];
    moneyScales = ["1000", "10000", "100000", "1000000", "10000000", "100000000", "1000000000", "10000000000"];


    //..................................................................................

    render() {

        let form = null;

        if (this.props.formData !== undefined) {

            let remittanceContainers =
                (
                    this.props.formData.remittanceContents.map((rc, ri) => {

                        return (
                            <Container fluid className="form-content margin-bottom-5" key={"rc-" + ri}>

                                <Form.Group>
                                    <Button className="remove-btn control-btn top-right"
                                            disabled={!this.state.editable}
                                            onClick={() => this.props.onRemoveContentHandler("remittanceContents", ri)}>×</Button>
                                </Form.Group>


                                <Container fluid>
                                    <Form.Group as={Row}>
                                        <Col md="6" className="mb-2" as={Row} noGutters={true}>
                                            <Col md="4">
                                                <Form.Label className="mode1">کشور مبدأ حواله:</Form.Label>
                                            </Col>
                                            <Col md="7" className="mode1">
                                                <Form.Control as="select"
                                                              id={"rc-" + ri + "-origin-country"}
                                                              onChange={(e) => this.props.onContentLevel1onChangeHandler(e, "remittanceContents", ri, "originCountry")}
                                                              value={rc.originCountry}
                                                              disabled={!this.state.editable}>
                                                    {this.countries.map(option => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>

                                            {/*<Col className="mode2">*/}
                                            {/*    <Form.Control as="select"*/}
                                            {/*                  id={"rc-" + ri + "-origin-country"}*/}
                                            {/*                  onChange={(e) => this.contentLevel1onChangeHandler(e, "remittanceContents", ri, "originCountry")}*/}
                                            {/*                  value={rc.originCountry}>*/}
                                            {/*        {this.countriesMode2.map(option => (*/}
                                            {/*            <option key={option} value={option}>*/}
                                            {/*                {option}*/}
                                            {/*            </option>*/}
                                            {/*        ))}*/}
                                            {/*    </Form.Control>*/}
                                            {/*</Col>*/}

                                        </Col>
                                        <Col md="6">
                                            <Form.Label for="xyz" style={{verticalAlign: " top"}}>آیا در کشور مبداء با
                                                بانکی
                                                ارتباط دارید؟</Form.Label>
                                            <ToggleButtonGroup type="radio" className="mb-2" id="xyz"
                                                               defaultValue={rc.originConnectionCheck}
                                                               name={"rc-" + ri + "-origin-connection-check"}
                                                               style={{height: "100%"}}>
                                                <Form.Check
                                                    disabled={!this.state.editable}
                                                    value={true}
                                                    inline
                                                    custom
                                                    type="radio"
                                                    id={"rc-" + ri + "-origin-connection-check-1"}
                                                    label="بله"
                                                    onChange={(e) => this.props.onDisableRemittanceBanksHandler(e, ri, "originBanks", "originConnectionCheck")}
                                                />
                                                <spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</spam>
                                                <Form.Check
                                                    disabled={!this.state.editable}
                                                    value={false}
                                                    inline
                                                    custom
                                                    type="radio"
                                                    id={"rc-" + ri + "-origin-connection-check-2"}
                                                    label="خیر"
                                                    onChange={(e) => this.props.onDisableRemittanceBanksHandler(e, ri, "originBanks", "originConnectionCheck")}
                                                />
                                            </ToggleButtonGroup>
                                        </Col>
                                    </Form.Group>
                                </Container>

                                <Container fluid className="mb-0">

                                    {rc.originBanks.map((b, bi) => {
                                        return (
                                            <Row key={"rc-" + ri + "-origin-bank-" + bi}
                                                 style={{marginBottom: "5px", position: "relative"}}
                                                 className="form-inner-content">

                                                <Col md="12" as={Row} noGutters={true}>
                                                    <Col md="7" className="mb-2" as={Row}
                                                         noGutters={true}>
                                                        <Col md="4">
                                                            <Form.Label className="mode1">نام بانک در کشور
                                                                مبداء:</Form.Label>
                                                        </Col>
                                                        <Col md="8" className="mode1">
                                                            <Form.Control
                                                                value={b.name}
                                                                disabled={b.nameCheck || !rc.originConnectionCheck || !this.state.editable}
                                                                className="margin-bottom-5 origin-bank-input"
                                                                onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "name")}/>

                                                        </Col>
                                                        {/*<Col className="mode2" style={{paddingRight: "0"}}>*/}
                                                        {/*    <Form.Control*/}
                                                        {/*        value={b.name}*/}
                                                        {/*        disabled={b.nameCheck || !rc.originConnectionCheck}*/}
                                                        {/*        className="margin-bottom-5 origin-bank-input"*/}
                                                        {/*        onChange={(e) => this.contentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "name")}*/}
                                                        {/*        placeholder="نام بانک در کشور مبداء:"/>*/}

                                                        {/*</Col>*/}

                                                    </Col>
                                                    <Col md="4" className="mb-2" style={{marginRight: "10px"}}>
                                                        <ToggleButtonGroup type="checkbox"
                                                                           defaultValue={b.nameCheck}>
                                                            <Form.Check
                                                                disabled={!rc.originConnectionCheck || !this.state.editable}
                                                                value={true}
                                                                custom
                                                                type="checkbox"
                                                                name={"rc-" + ri + "-origin-name-check-" + bi}
                                                                id={"rc-" + ri + "-origin-name-check-" + bi}
                                                                label="عدم افشای نام بانک"
                                                                onChange={(e) => this.props.onDisableRemittanceBanksNameHandler(e, ri, "originBanks", bi)}
                                                            />
                                                        </ToggleButtonGroup>
                                                    </Col>


                                                </Col>
                                                <Col md="12" as={Row} noGutters={true}>

                                                    <Col md="4" className="mb-2" as={Row}
                                                         noGutters={true}>
                                                        <Col md="5">
                                                            <Form.Label className="mode1">سطح قدرت مذاکره:</Form.Label>
                                                        </Col>
                                                        <Col md="7" className="mode1">
                                                            <Form.Control as="select"
                                                                          onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "negotiationLevel")}
                                                                          value={b.negotiationLevel}
                                                                          disabled={!rc.originConnectionCheck || !this.state.editable}>
                                                                {this.negotiationLevels.map(option => (
                                                                    <option key={option} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))}
                                                            </Form.Control>
                                                        </Col>
                                                        {/*<Col className="mode2" style={{paddingRight: "0"}}>*/}
                                                        {/*    <Form.Control as="select"*/}
                                                        {/*                  onChange={(e) => this.contentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "negotiationLevel")}*/}
                                                        {/*                  value={b.negotiationLevel}*/}
                                                        {/*                  disabled={!rc.originConnectionCheck}>*/}
                                                        {/*        {this.negotiationLevelsMode2.map(option => (*/}
                                                        {/*            <option key={option} value={option}>*/}
                                                        {/*                {option}*/}
                                                        {/*            </option>*/}
                                                        {/*        ))}*/}
                                                        {/*    </Form.Control>*/}
                                                        {/*</Col>*/}
                                                    </Col>

                                                    <Col md="4" className="mb-2" as={Row} noGutters={true}>
                                                        <Col md="7">
                                                            <Form.Label>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                حداقل مقدار حواله ماهانه:
                                                            </Form.Label>
                                                        </Col>

                                                        <Col md="5">
                                                            <Form.Control
                                                                value={b.minimumAmount}
                                                                onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "minimumAmount")}
                                                                disabled={!rc.originConnectionCheck || !this.state.editable}/>
                                                        </Col>
                                                    </Col>
                                                    <Col md="4" as={Row} noGutters={true}>
                                                        <Col md="7">
                                                            <Form.Label>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                حداکثر مقدار حواله ماهانه:
                                                            </Form.Label>
                                                        </Col>
                                                        <Col md="5">
                                                            <Form.Control
                                                                value={b.maximumAmount}
                                                                onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "maximumAmount")}
                                                                disabled={!rc.originConnectionCheck || !this.state.editable}/>
                                                        </Col>
                                                    </Col>


                                                </Col>
                                                <Form.Group>
                                                    <Button className="remove-btn tiny-control-btn top-left"
                                                            onClick={() => this.props.onRemoveContentLevel1Handler("remittanceContents", ri, "originBanks", bi)}
                                                            disabled={!rc.originConnectionCheck || !this.state.editable}>
                                                        ×</Button>
                                                </Form.Group>

                                            </Row>

                                        );
                                    })}

                                </Container>
                                <Button variant="primary" className="add-btn tiny-control-btn"
                                        disabled={!rc.originConnectionCheck || !this.state.editable}
                                        onClick={() => this.props.onAddContentLevel1Handler("remittanceContents", ri, "originBanks")}>+</Button>


                                <Container fluid className="mb-0 mt-4">

                                    {rc.originPartners.map((p, pi) => {
                                        return (
                                            <Row
                                                className="form-inner-content"
                                                style={{marginBottom: "5px", position: "relative"}}
                                                key={"rc-" + ri + "-origin-partner-" + pi}>

                                                <Col md="12" className="mb-2" noGutters={true} as={Row}>
                                                    <Col md="3">
                                                        <Form.Label>نام شریک اقتصادی در کشور مبداء:</Form.Label>
                                                    </Col>
                                                    <Col md="6">
                                                        <Form.Control
                                                            disabled={!this.state.editable}
                                                            value={p.name}
                                                            className="margin-bottom-5 origin-bank-input"
                                                            onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originPartners", pi, "name")}
                                                        />
                                                    </Col>
                                                </Col>

                                                <Col md="12">
                                                    {p.countries.map((c, ci) => {
                                                        return (
                                                            <Row key={"rc-" + ri + "-origin-partner-" + pi}
                                                                 style={{position: "relative"}}
                                                                 className="form-content mb-1" noGutters={true}>

                                                                <Col md="5" as={Row} className="mb-2" noGutters={true}>
                                                                    <Col md="5">
                                                                        <Form.Label className="mode1">کشور طرف
                                                                            معامله:</Form.Label>

                                                                    </Col>
                                                                    <Col md="7" className="mode1">
                                                                        <Form.Control as="select"
                                                                                      size="sm"
                                                                                      disabled={!this.state.editable}
                                                                                      id={"rc-" + ri + "-origin-partner-" + pi + "-country-" + ci}
                                                                                      onChange={(e) => this.props.onContentLevel3onChangeHandler(e, "remittanceContents", ri, "originPartners", pi, "countries", ci, "name")}
                                                                                      value={c.name}>
                                                                            {this.countries.map(option => (
                                                                                <option key={option}
                                                                                        value={option}>
                                                                                    {option}
                                                                                </option>
                                                                            ))}
                                                                        </Form.Control>
                                                                    </Col>
                                                                    {/*<Col className="mode2"*/}
                                                                    {/*     style={{paddingRight: "0", marginRight: "5px"}}>*/}
                                                                    {/*    <Form.Control as="select"*/}
                                                                    {/*                  id={"rc-" + ri + "-origin-partner-" + pi + "-country-" + ci}*/}
                                                                    {/*                  onChange={(e) => this.contentLevel3onChangeHandler(e, "remittanceContents", ri, "originPartners", pi, "countries", ci, "name")}*/}
                                                                    {/*                  value={c.name}>*/}
                                                                    {/*        {this.countriesMode22.map(option => (*/}
                                                                    {/*            <option key={option}*/}
                                                                    {/*                    value={option}>*/}
                                                                    {/*                {option}*/}
                                                                    {/*            </option>*/}
                                                                    {/*        ))}*/}
                                                                    {/*    </Form.Control>*/}
                                                                    {/*</Col>*/}
                                                                </Col>

                                                                <Col md="5" as={Row} className="mb-2" noGutters={true}>
                                                                    <Col md="5">
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        حجم معامله:
                                                                    </Col>
                                                                    <Col md="6">
                                                                        <Form.Control
                                                                            size="sm"
                                                                            disabled={!this.state.editable}
                                                                            value={c.amount}
                                                                            onChange={(e) => this.props.onContentLevel3onChangeHandler(e, "remittanceContents", ri, "originPartners", pi, "countries", ci, "amount")}
                                                                        />
                                                                    </Col>
                                                                </Col>
                                                                <Button
                                                                    className="remove-btn tiny-control-btn top-left"
                                                                    disabled={!this.state.editable}
                                                                    onClick={() => this.props.onRemoveContentLevel2Handler("remittanceContents", ri, "originPartners", pi, "countries", ci)}>
                                                                    ×</Button>

                                                            </Row>

                                                        );
                                                    })}


                                                    <Button variant="primary"
                                                            disabled={!this.state.editable}
                                                            className="add-btn tiny-control-btn"
                                                            onClick={() => this.props.onAddContentLevel2Handler("remittanceContents", ri, "originPartners", pi, "countries")}>+</Button>
                                                </Col>
                                                <Form.Group>
                                                    <Button className="remove-btn tiny-control-btn top-left"
                                                            disabled={!this.state.editable}
                                                            onClick={() => this.props.onRemoveContentLevel1Handler("remittanceContents", ri, "originPartners", pi)}>
                                                        ×</Button>
                                                </Form.Group>

                                            </Row>


                                        );
                                    })}

                                </Container>
                                <Button variant="primary" className="add-btn tiny-control-btn"
                                        disabled={!this.state.editable}
                                        onClick={() => this.props.onAddContentLevel1Handler("remittanceContents", ri, "originPartners")}>+</Button>


                                {/*//...........destination*/}

                                <Container fluid className="mt-3">
                                    <Form.Group as={Row}>
                                        <Col md="6" className="mb-2" as={Row} noGutters={true}>
                                            <Col md="4">
                                                <Form.Label className="mode1">کشور مقصد حواله:</Form.Label>
                                            </Col>
                                            <Col md="7" className="mode1">
                                                <Form.Control as="select"
                                                              disabled={!this.state.editable}
                                                              id={"rc-" + ri + "-destination-country"}
                                                              onChange={(e) => this.props.onContentLevel1onChangeHandler(e, "remittanceContents", ri, "destinationCountry")}
                                                              value={rc.destinationCountry}>
                                                    {this.countries.map(option => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>

                                            {/*<Col className="mode2">*/}
                                            {/*    <Form.Control as="select"*/}
                                            {/*                  id={"rc-" + ri + "-destination-country"}*/}
                                            {/*                  onChange={(e) => this.contentLevel1onChangeHandler(e, "remittanceContents", ri, "destinationCountry")}*/}
                                            {/*                  value={rc.destinationCountry}>*/}
                                            {/*        {this.countriesMode21.map(option => (*/}
                                            {/*            <option key={option} value={option}>*/}
                                            {/*                {option}*/}
                                            {/*            </option>*/}
                                            {/*        ))}*/}
                                            {/*    </Form.Control>*/}
                                            {/*</Col>*/}

                                        </Col>
                                        <Col md="6">
                                            <Form.Label for="xyz" style={{verticalAlign: " top"}}>آیا در کشور مقصد با
                                                بانکی
                                                ارتباط دارید؟</Form.Label>
                                            <ToggleButtonGroup type="radio" className="mb-2" id="xyz"
                                                               defaultValue={rc.destinationConnectionCheck}
                                                               name={"rc-" + ri + "-destination-connection-check"}
                                                               style={{height: "100%"}}>
                                                <Form.Check
                                                    disabled={!this.state.editable}
                                                    value={true}
                                                    inline
                                                    custom
                                                    type="radio"
                                                    id={"rc-" + ri + "-destination-connection-check-1"}
                                                    label="بله"
                                                    onChange={(e) => this.props.onDisableRemittanceBanksHandler(e, ri, "destinationBanks", "destinationConnectionCheck")}
                                                />
                                                <spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</spam>
                                                <Form.Check
                                                    disabled={!this.state.editable}
                                                    value={false}
                                                    inline
                                                    custom
                                                    type="radio"
                                                    id={"rc-" + ri + "-destination-connection-check-2"}
                                                    label="خیر"
                                                    onChange={(e) => this.props.onDisableRemittanceBanksHandler(e, ri, "destinationBanks", "destinationConnectionCheck")}
                                                />
                                            </ToggleButtonGroup>
                                        </Col>
                                    </Form.Group>
                                </Container>

                                <Container fluid className="mb-0">

                                    {rc.destinationBanks.map((b, bi) => {
                                        return (
                                            <Row key={"rc-" + ri + "-destination-bank-" + bi}
                                                 style={{marginBottom: "5px", position: "relative"}}
                                                 className="form-inner-content">

                                                <Col md="12" as={Row} noGutters={true}>
                                                    <Col md="7" className="mb-2" as={Row}
                                                         noGutters={true}>
                                                        <Col md="4">
                                                            <Form.Label className="mode1">نام بانک در کشور
                                                                مقصد:</Form.Label>
                                                        </Col>
                                                        <Col md="8" className="mode1">
                                                            <Form.Control
                                                                value={b.name}
                                                                disabled={b.nameCheck || !rc.destinationConnectionCheck || !this.state.editable}
                                                                className="margin-bottom-5 destination-bank-input"
                                                                onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "name")}/>

                                                        </Col>
                                                        {/*<Col className="mode2" style={{paddingRight: "0"}}>*/}
                                                        {/*    <Form.Control*/}
                                                        {/*        value={b.name}*/}
                                                        {/*        disabled={b.nameCheck || !rc.destinationConnectionCheck}*/}
                                                        {/*        className="margin-bottom-5 destination-bank-input"*/}
                                                        {/*        onChange={(e) => this.contentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "name")}*/}
                                                        {/*        placeholder="نام بانک در کشور مبداء:"/>*/}

                                                        {/*</Col>*/}

                                                    </Col>
                                                    <Col md="4" className="mb-2" style={{marginRight: "10px"}}>
                                                        <ToggleButtonGroup type="checkbox"
                                                                           defaultValue={b.nameCheck}>
                                                            <Form.Check
                                                                disabled={!rc.destinationConnectionCheck || !this.state.editable}
                                                                value={true}
                                                                custom
                                                                type="checkbox"
                                                                name={"rc-" + ri + "-destination-name-check-" + bi}
                                                                id={"rc-" + ri + "-destination-name-check-" + bi}
                                                                label="عدم افشای نام بانک"
                                                                onChange={(e) => this.props.onDisableRemittanceBanksNameHandler(e, ri, "destinationBanks", bi)}
                                                            />
                                                        </ToggleButtonGroup>
                                                    </Col>


                                                </Col>
                                                <Col md="12" as={Row} noGutters={true}>

                                                    <Col md="4" className="mb-2" as={Row}
                                                         noGutters={true}>
                                                        <Col md="5">
                                                            <Form.Label className="mode1">سطح قدرت مذاکره:</Form.Label>
                                                        </Col>
                                                        <Col md="7" className="mode1">
                                                            <Form.Control as="select"
                                                                          onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "negotiationLevel")}
                                                                          value={b.negotiationLevel}
                                                                          disabled={!rc.destinationConnectionCheck || !this.state.editable}>
                                                                {this.negotiationLevels.map(option => (
                                                                    <option key={option} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))}
                                                            </Form.Control>
                                                        </Col>
                                                        {/*<Col className="mode2" style={{paddingRight: "0"}}>*/}
                                                        {/*    <Form.Control as="select"*/}
                                                        {/*                  onChange={(e) => this.contentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "negotiationLevel")}*/}
                                                        {/*                  value={b.negotiationLevel}*/}
                                                        {/*                  disabled={!rc.destinationConnectionCheck}>*/}
                                                        {/*        {this.negotiationLevelsMode2.map(option => (*/}
                                                        {/*            <option key={option} value={option}>*/}
                                                        {/*                {option}*/}
                                                        {/*            </option>*/}
                                                        {/*        ))}*/}
                                                        {/*    </Form.Control>*/}
                                                        {/*</Col>*/}
                                                    </Col>

                                                    <Col md="4" className="mb-2" as={Row} noGutters={true}>
                                                        <Col md="7">
                                                            <Form.Label>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                حداقل مقدار حواله ماهانه:
                                                            </Form.Label>
                                                        </Col>
                                                        <Col md="5">
                                                            <Form.Control
                                                                value={b.minimumAmount}
                                                                onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "minimumAmount")}
                                                                disabled={!rc.destinationConnectionCheck || !this.state.editable}/>

                                                        </Col>
                                                    </Col>
                                                    <Col md="4" as={Row} noGutters={true}>
                                                        <Col md="7">
                                                            <Form.Label>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                حداکثر مقدار حواله ماهانه:
                                                            </Form.Label>
                                                        </Col>
                                                        <Col md="5">
                                                            <Form.Control
                                                                value={b.maximumAmount}
                                                                onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "maximumAmount")}
                                                                disabled={!rc.destinationConnectionCheck || !this.state.editable}/>
                                                        </Col>
                                                    </Col>


                                                </Col>
                                                <Form.Group>
                                                    <Button className="remove-btn tiny-control-btn top-left"
                                                            onClick={() => this.props.onRemoveContentLevel1Handler("remittanceContents", ri, "destinationBanks", bi)}
                                                            disabled={!rc.destinationConnectionCheck || !this.state.editable}>
                                                        ×</Button>
                                                </Form.Group>

                                            </Row>

                                        );
                                    })}

                                </Container>
                                <Button variant="primary" className="add-btn tiny-control-btn"
                                        disabled={!rc.destinationConnectionCheck || !this.state.editable}
                                        onClick={() => this.props.onAddContentLevel1Handler("remittanceContents", ri, "destinationBanks")}>+</Button>


                                <Container fluid className="mb-0 mt-4">

                                    {rc.destinationPartners.map((p, pi) => {
                                        return (
                                            <Row
                                                className="form-inner-content"
                                                style={{marginBottom: "5px", position: "relative"}}
                                                key={"rc-" + ri + "-destination-partner-" + pi}>

                                                <Col md="12" className="mb-2" noGutters={true} as={Row}>

                                                    <Col md="3">
                                                        <Form.Label>نام شریک اقتصادی در کشور مقصد:</Form.Label>
                                                    </Col>
                                                    <Col md="6">
                                                        <Form.Control
                                                            disabled={!this.state.editable}
                                                            value={p.name}
                                                            className="margin-bottom-5 destination-bank-input"
                                                            onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationPartners", pi, "name")}
                                                        />
                                                    </Col>
                                                </Col>

                                                <Col md="12">
                                                    {p.countries.map((c, ci) => {
                                                        return (
                                                            <Row key={"rc-" + ri + "-destination-partner-" + pi}
                                                                 style={{position: "relative"}}
                                                                 className="form-content mb-1" noGutters={true}>

                                                                <Col md="5" as={Row} className="mb-2" noGutters={true}>
                                                                    <Col md="5">
                                                                        <Form.Label className="mode1">کشور طرف
                                                                            معامله:</Form.Label>

                                                                    </Col>
                                                                    <Col md="7" className="mode1">
                                                                        <Form.Control as="select"
                                                                                      size="sm"
                                                                                      disabled={!this.state.editable}
                                                                                      id={"rc-" + ri + "-destination-partner-" + pi + "-country-" + ci}
                                                                                      onChange={(e) => this.props.onContentLevel3onChangeHandler(e, "remittanceContents", ri, "destinationPartners", pi, "countries", ci, "name")}
                                                                                      value={c.name}>
                                                                            {this.countries.map(option => (
                                                                                <option key={option}
                                                                                        value={option}>
                                                                                    {option}
                                                                                </option>
                                                                            ))}
                                                                        </Form.Control>
                                                                    </Col>
                                                                    {/*<Col className="mode2"*/}
                                                                    {/*     style={{paddingRight: "0", marginRight: "5px"}}>*/}
                                                                    {/*    <Form.Control as="select"*/}
                                                                    {/*                  id={"rc-" + ri + "-destination-partner-" + pi + "-country-" + ci}*/}
                                                                    {/*                  onChange={(e) => this.contentLevel3onChangeHandler(e, "remittanceContents", ri, "destinationPartners", pi, "countries", ci, "name")}*/}
                                                                    {/*                  value={c.name}>*/}
                                                                    {/*        {this.countriesMode22.map(option => (*/}
                                                                    {/*            <option key={option}*/}
                                                                    {/*                    value={option}>*/}
                                                                    {/*                {option}*/}
                                                                    {/*            </option>*/}
                                                                    {/*        ))}*/}
                                                                    {/*    </Form.Control>*/}
                                                                    {/*</Col>*/}
                                                                </Col>

                                                                <Col md="5" as={Row} className="mb-2" noGutters={true}>
                                                                    <Col md="5">
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        حجم معامله:
                                                                    </Col>
                                                                    <Col md="6">
                                                                        <Form.Control
                                                                            size="sm"
                                                                            value={c.amount}
                                                                            disabled={!this.state.editable}
                                                                            onChange={(e) => this.props.onContentLevel3onChangeHandler(e, "remittanceContents", ri, "destinationPartners", pi, "countries", ci, "amount")}
                                                                        />
                                                                    </Col>
                                                                </Col>
                                                                <Button
                                                                    className="remove-btn tiny-control-btn top-left"
                                                                    disabled={!this.state.editable}
                                                                    onClick={() => this.props.onRemoveContentLevel2Handler("remittanceContents", ri, "destinationPartners", pi, "countries", ci)}>
                                                                    ×</Button>

                                                            </Row>

                                                        );
                                                    })}


                                                    <Button variant="primary"
                                                            disabled={!this.state.editable}
                                                            className="add-btn tiny-control-btn"
                                                            onClick={() => this.props.onAddContentLevel2Handler("remittanceContents", ri, "destinationPartners", pi, "countries")}>+</Button>
                                                </Col>
                                                <Form.Group>
                                                    <Button className="remove-btn tiny-control-btn top-left"
                                                            disabled={!this.state.editable}
                                                            onClick={() => this.props.onRemoveContentLevel1Handler("remittanceContents", ri, "destinationPartners", pi)}>
                                                        ×</Button>
                                                </Form.Group>

                                            </Row>


                                        );
                                    })}

                                </Container>
                                <Button variant="primary" className="add-btn tiny-control-btn"
                                        disabled={!this.state.editable}
                                        onClick={() => this.props.onAddContentLevel1Handler("remittanceContents", ri, "destinationPartners")}>+</Button>


                            </Container>
                        );
                    })
                );


            // let customerContainers = (
            //     this.state.customerContents.map((cc, ci) => {
            //         return (
            //             <Form.Group className="form-content margin-bottom-5" key={"customer-" + ci}
            //                         style={{padding: "5px 45px 5px 45px"}}>
            //
            //                 <Form.Group>
            //                     <Button className="remove-btn control-btn"
            //                             onClick={() => this.removeContentHandler("customerContents", ci)}>×</Button>
            //                 </Form.Group>
            //
            //                 <Form.Group as={Row}>
            //
            //                     <Form.Label column sm="2">
            //                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            //                         نوع مشتری :
            //                     </Form.Label>
            //
            //                     <Col sm="3">
            //                         <Form.Control as="select"
            //                                       value={cc.cType}
            //                                       onChange={(e) => this.contentLevel1onChangeHandler(e, "customerContents", ci, "cType")}>
            //                             <option key="i" value="importer">وارد کننده</option>
            //                             <option key="e" value="exporter">صادر کننده</option>
            //                         </Form.Control>
            //                     </Col>
            //
            //                     <Col sm="2"></Col>
            //
            //                     <Form.Label column sm="2">
            //                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            //                         حجم تراکنش سالانه :
            //                     </Form.Label>
            //
            //                     <Col sm="2">
            //                         <Form.Control as="select"
            //                                       value={cc.amount}
            //                                       onChange={(e) => this.contentLevel1onChangeHandler(e, "customerContents", ci, "amount")}>
            //
            //                             {this.moneyScales.map(option => (
            //                                 <option key={option} value={option}>
            //                                     {option}
            //                                 </option>
            //                             ))}
            //                         </Form.Control>
            //
            //                     </Col>
            //
            //                     <Col sm="1"></Col>
            //
            //                 </Form.Group>
            //             </Form.Group>
            //
            //         );
            //     })
            // );


            form = (
                <Form className="main-form my-form">

                    <Container fluid className="form-inner-content padding-bottom-5 mb-4">

                        {remittanceContainers}

                        <Button className="add-btn control-btn margin" variant="primary"
                                disabled={!this.state.editable}
                                onClick={() => this.props.onAddContentHandler("remittanceContents")}>+</Button>
                    </Container>

                    {/*<Form.Group className="form-inner-content">*/}
                    {/*    {customerContainers}*/}
                    {/*    <Button className="add-btn control-btn margin" variant="primary"*/}
                    {/*            onClick={() => this.addContentHandler("customerContents")}>+</Button>*/}
                    {/*</Form.Group>*/}

                    <Container fluid className="form-inner-content">
                        <Row className="form-content margin-bottom-5" style={{padding: "5px 45px 5px 45px"}}>
                            <Col md="8" as={Row}>
                                <Form.Label>
                                    سرمایه مورد نیاز برای گسترش شبکه:
                                </Form.Label>
                                <Col>
                                    <Form.Control as="select"
                                                  disabled={!this.state.editable}
                                                  value={this.props.formData.moneyRequired}
                                                  onChange={(e) => this.props.onOnChangeHandler(e, "moneyRequired")}>
                                        {this.moneyScales.map(option => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Col>
                        </Row>
                    </Container>

                </Form>
            );

        } else {
            form = <Spinner/>;
        }

        return (

            <div className="mt-5 mb-5">
                <h4 className={styles.TextCenter}>فرم زیر را کامل کنید</h4>
                <div>
                    {form}

                    <Button className="mt-5 submit-btn" disabled={this.state.editable}
                            onClick={() => this.setState({editable: true})}>ویرایش</Button>
                    <Button className="mt-5  ml-2 submit-btn" disabled={!this.state.editable}
                            onClick={() => {
                                this.setState({
                                    editable: false,
                                });

                                this.props.onPostForm({username: this.props.username}, this.props.formData)
                            }}>ارسال</Button>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        username: state.auth.username,
        formData: state.main.data[state.main.data.length - 1].data,
        loading: state.main.loading,
        counter: state.main.counter,
    }
};

const mapDispatchToProps = dispatch => {
    return {

        onOnChangeHandler: (event, control) => dispatch(actions.onChangeHandler(event, control)),
        onAddContentHandler: (control) => dispatch(actions.addContentHandler(control)),
        onRemoveContentHandler: (control, index) => dispatch(actions.removeContentHandler(control, index)),
        onContentLevel1onChangeHandler: (event, control, index, control2) => dispatch(actions.contentLevel1onChangeHandler(event, control, index, control2)),
        onAddContentLevel1Handler: (control, index, control2) => dispatch(actions.addContentLevel1Handler(control, index, control2)),
        onRemoveContentLevel1Handler: (control, index, control2, index2) => dispatch(actions.removeContentLevel1Handler(control, index, control2, index2)),
        onContentLevel2onChangeHandler: (event, control, index, control2, index2, control3) => dispatch(actions.contentLevel2onChangeHandler(event, control, index, control2, index2, control3)),
        onAddContentLevel2Handler: (control, index, control2, index2, control3) => dispatch(actions.addContentLevel2Handler(control, index, control2, index2, control3)),
        onRemoveContentLevel2Handler: (control, index, control2, index2, control3, index3) => dispatch(actions.removeContentLevel2Handler(control, index, control2, index2, control3, index3)),
        onContentLevel3onChangeHandler: (event, control, index, control2, index2, control3, index3, control4) => dispatch(actions.contentLevel3onChangeHandler(event, control, index, control2, index2, control3, index3, control4)),
        onDisableRemittanceBanksNameHandler: (event, index, control, index2) => dispatch(actions.disableRemittanceBanksNameHandler(event, index, control, index2)),
        onDisableRemittanceBanksHandler: (event, index, control, control2) => dispatch(actions.disableRemittanceBanksHandler(event, index, control, control2)),

        onPostForm: (userData, userProfile) => dispatch(actions.postForm(userData, userProfile))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);