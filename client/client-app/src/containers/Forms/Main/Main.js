import React, {Component} from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './Main.module.css';
import './Main.css';
import '../Form.css';

import {
    Grid,
    Button,
    Container,
    Box,
    TextField,
    Typography,
    ButtonGroup,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup, FormGroup, Checkbox
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';


// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import {Typeahead} from 'react-bootstrap-typeahead';

import * as actions from "../../../api";
import {connect} from "react-redux";

import ReactFlagsSelect from 'react-flags-select';
import FlagIcon from "../../../components/UI/FlagIcon/FlagIcon";
import 'react-flags-select/css/react-flags-select.css';


class Main extends Component {

    constructor(props) {
        super(props);
        // this.addOriginBankHandler();

    }

    state = {
        editable: false,
    };

    handleRadioChange = (event) => {
        // setValue(event.target.value);
        // setHelperText(' ');
        // setError(false);
    };

    countries = ["Afghanistan", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    listedCountries = this.countries;

    negotiationLevels = ["در سطح رییس شعبه", "در سطح مدیران ارشد", "در سطح هیئت مدیره"];

    moneyScales = ["1,000", "10,000", "100,000", "1,000,000", "10,000,000", "100,000,000", "1,000,000,000", "10,000,000,000"];


    //..................................................................................

    componentDidMount() {
        this.setState({
            editable: this.state.editable || this.props.isNew,
        })
    }

    render() {

        let form = null;

        if (this.props.formData !== undefined) {

            let remittanceContainers =
                (
                    this.props.formData.remittanceContents.map((rc, ri) => {

                        return (
                            <Grid container className="form-content margin-bottom-5" key={"rc-" + ri}>
                                <Grid container item>

                                    <Button className="remove-btn control-btn top-right"
                                            disabled={!this.state.editable}
                                            onClick={() => this.props.onRemoveContentHandler("remittanceContents", ri)}>×</Button>

                                    <Grid container item xs={12} spacing={1}
                                          style={{marginTop: "25px", marginBottom: "15px"}}>
                                        <Grid container item xs={12} spacing={1}>
                                            <Grid item xs={4} className="textfield-container" spacing={1}>

                                                <Autocomplete
                                                    id={"rc-" + ri + "-origin-country"}
                                                    value={rc.originCountry}
                                                    debug
                                                    // disableCloseOnSelect
                                                    clearOnEscape
                                                    // disableClearable
                                                    includeInputInList
                                                    autoComplete
                                                    disableListWrap
                                                    openOnFocus
                                                    autoHighlight
                                                    autoSelect
                                                    blurOnSelect

                                                    groupBy={(option) => option[0]}
                                                    disabled={!this.state.editable}
                                                    onChange={(e, selected) => {
                                                        if (selected !== null) {
                                                            this.props.onContentLevel1onChangeHandler(selected, "remittanceContents", ri, "originCountry", true);
                                                        }
                                                    }}

                                                    options={this.listedCountries.sort((a, b) => -b[0].localeCompare(a[0]))}
                                                    renderInput={(params) => <TextField {...params}
                                                                                        fullWidth
                                                                                        InputLabelProps={{
                                                                                            style: {
                                                                                                // fontWeight: "bold",

                                                                                            },
                                                                                            shrink: true,
                                                                                        }}
                                                        // InputProps={{
                                                        //     style: {
                                                        //         fontFamily: 'Nika',
                                                        //         direction: "rtl",
                                                        //     },
                                                        // }}
                                                                                        label={
                                                                                            <Typography
                                                                                                style={{
                                                                                                    fontFamily: 'Nika',
                                                                                                    fontSize: "larger",
                                                                                                    marginTop: "-7px",
                                                                                                }}
                                                                                            >
                                                                                                کشور&nbsp;مبداء&nbsp;حواله
                                                                                            </Typography>

                                                                                        }
                                                                                        variant="outlined"/>
                                                    }/>


                                            </Grid>
                                            <Grid container item md={8} spacing={1}>
                                                <RadioGroup row name="origin-connection"
                                                            value={rc.originConnectionCheck}
                                                            onChange={
                                                                // (e) => alert("goodbye")
                                                                (e) => this.props.onDisableRemittanceBanksHandler(e, ri, "originBanks", "originConnectionCheck")
                                                            }>

                                                    <FormControlLabel
                                                        disabled={!this.state.editable}
                                                        value={true}
                                                        control={<Radio
                                                            // value={true}
                                                            // checked={true}
                                                            id={"rc-" + ri + "-origin-connection-check-1"}

                                                        />}
                                                        style={{direction: "ltr"}}
                                                        label={
                                                            <Typography
                                                                style={{
                                                                    fontFamily: 'Nika',
                                                                    fontSize: "large",
                                                                    marginTop: "-7px",
                                                                }}
                                                            >
                                                                "آیا&nbsp;در&nbsp;کشور&nbsp;مبداء&nbsp;با&nbsp;بانکی&nbsp;ارتباط&nbsp;دارید؟&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;بله"
                                                            </Typography>
                                                        }


                                                    />
                                                    <FormControlLabel
                                                        disabled={!this.state.editable}
                                                        value={false}
                                                        control={<Radio
                                                            // value={false}
                                                            // checked={false}
                                                            id={"rc-" + ri + "-origin-connection-check-2"}
                                                        />}

                                                        style={{direction: "ltr"}}
                                                        label={
                                                            <Typography
                                                                style={{
                                                                    fontFamily: 'Nika',
                                                                    fontSize: "large",
                                                                    marginTop: "-7px",
                                                                }}
                                                            >
                                                                خیر
                                                            </Typography>
                                                        }

                                                    />
                                                </RadioGroup>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container item md={12}>

                                        {rc.originBanks.map((b, bi) => {
                                            return (
                                                <Grid container item key={"rc-" + ri + "-origin-bank-" + bi}
                                                      style={{marginTop: "10px", position: "relative"}}
                                                      className="form-inner-content" spacing={1}>

                                                    <Grid container item lg={12} spacing={2}>
                                                        <Grid item lg={4} className="textfield-container">
                                                            <TextField
                                                                value={b.name}
                                                                variant="outlined"
                                                                size="small"
                                                                InputLabelProps={{
                                                                    style: {
                                                                        // fontWeight: "bold",

                                                                    },
                                                                    shrink: true,
                                                                }}
                                                                InputProps={{
                                                                    style: {
                                                                        fontFamily: 'Nika',
                                                                        fontSize: "large",
                                                                        direction: "rtl",
                                                                    },
                                                                }}
                                                                label={
                                                                    <Typography
                                                                        style={{
                                                                            fontFamily: 'Nika',
                                                                            fontSize: "larger",
                                                                            marginTop: "-7px",
                                                                        }}
                                                                    >
                                                                        نام&nbsp;بانک&nbsp;در&nbsp;کشور&nbsp;مبداء
                                                                    </Typography>
                                                                }

                                                                fullWidth
                                                                disabled={b.nameCheck || !rc.originConnectionCheck || !this.state.editable}
                                                                className="margin-bottom-5 origin-bank-input"
                                                                onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "name")}/>

                                                        </Grid>

                                                        <Grid item lg={3} className="">

                                                            <ButtonGroup fullWidth>
                                                                <FormControl fullWidth component="fieldset"
                                                                             size="small">
                                                                    <FormGroup>
                                                                        <FormControlLabel
                                                                            style={{
                                                                                margin: "auto",
                                                                            }}

                                                                            InputProps={{
                                                                                style: {
                                                                                    fontFamily: 'Nika',
                                                                                    fontSize: "large",
                                                                                    direction: "rtl",
                                                                                },
                                                                            }}

                                                                            control={<Checkbox
                                                                                checked={b.nameCheck}
                                                                                onChange={(e) => this.props.onDisableRemittanceBanksNameHandler(e, ri, "originBanks", bi)}
                                                                                name={"rc-" + ri + "-origin-name-check-" + bi}
                                                                                id={"rc-" + ri + "-origin-name-check-" + bi}
                                                                                disabled={!rc.originConnectionCheck || !this.state.editable}

                                                                            />}
                                                                            label={
                                                                                <Typography
                                                                                    style={{
                                                                                        fontFamily: 'Nika',
                                                                                        fontSize: "large",
                                                                                        marginTop: "-7px",
                                                                                    }}
                                                                                >
                                                                                    عدم&nbsp;افشای&nbsp;نام&nbsp;بانک
                                                                                </Typography>
                                                                            }
                                                                        />
                                                                    </FormGroup>
                                                                </FormControl>
                                                            </ButtonGroup>

                                                        </Grid>

                                                        <Grid container spacing={1} item lg={3}
                                                              className="textfield-container">

                                                            <FormControl variant="outlined" fullWidth size="small">
                                                                <InputLabel
                                                                    id="demo-simple-select-outlined-label">

                                                                    <Typography
                                                                        style={{
                                                                            fontFamily: 'Nika',
                                                                            fontSize: "larger",
                                                                            marginTop: "-7px",
                                                                        }}>
                                                                        سطح&nbsp;مذاکره
                                                                    </Typography>

                                                                </InputLabel>
                                                                <Select

                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"

                                                                    InputProps={{
                                                                        style: {
                                                                            // fontWeight: "bold",

                                                                        },
                                                                        shrink: true,
                                                                    }}


                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily: 'Nika',
                                                                                fontSize: "larger",
                                                                                marginTop: "-7px",
                                                                            }}
                                                                        >
                                                                            "سطح&nbsp;مذاکره"
                                                                        </Typography>
                                                                    }

                                                                    onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "negotiationLevel")}
                                                                    value={b.negotiationLevel}
                                                                    disabled={!rc.originConnectionCheck || !this.state.editable}>

                                                                    {this.negotiationLevels.map(option => (
                                                                        <MenuItem key={option} value={option}>
                                                                            {option}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>

                                                        </Grid>


                                                    </Grid>
                                                    <Grid container item lg={12} spacing={4} style={{marginTop: "5px"}}>

                                                        <Grid container item lg={6} spacing={1}>
                                                            <Grid item lg={6} className="textfield-container">

                                                                <TextField
                                                                    variant="outlined"
                                                                    size="small"
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            // fontWeight: "bold",

                                                                        },
                                                                        shrink: true,
                                                                    }}

                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily: 'Nika',
                                                                                fontSize: "larger",
                                                                                marginTop: "-7px",
                                                                            }}
                                                                        >
                                                                            "حداقل&nbsp;مقدار&nbsp;حواله&nbsp;ماهانه"
                                                                        </Typography>
                                                                    }

                                                                    fullWidth
                                                                    value={b.minimumAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                    onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "minimumAmount", true)}
                                                                    disabled={!rc.originConnectionCheck || !this.state.editable}/>
                                                            </Grid>
                                                            <Grid item lg={6} className="textfield-container">

                                                                <TextField
                                                                    variant="outlined"
                                                                    size="small"
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            // fontWeight: "bold",

                                                                        },
                                                                        shrink: true,
                                                                    }}


                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily: 'Nika',
                                                                                fontSize: "larger",
                                                                                marginTop: "-7px",
                                                                            }}
                                                                        >
                                                                            معادل دلاری
                                                                        </Typography>
                                                                    }

                                                                    fullWidth
                                                                    value={b.minInDollar.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                    onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "minInDollar", true)}
                                                                    disabled={!rc.originConnectionCheck || !this.state.editable}/>
                                                            </Grid>
                                                        </Grid>

                                                        <Grid container item lg={6} spacing={1}>
                                                            <Grid item lg={6} className="textfield-container">

                                                                <TextField
                                                                    variant="outlined"
                                                                    size="small"
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            // fontWeight: "bold",

                                                                        },
                                                                        shrink: true,
                                                                    }}

                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily: 'Nika',
                                                                                fontSize: "larger",
                                                                                marginTop: "-7px",
                                                                            }}
                                                                        >
                                                                            "حداکثر&nbsp;مقدار&nbsp;حواله&nbsp;ماهانه"
                                                                        </Typography>
                                                                    }

                                                                    fullWidth
                                                                    value={b.maximumAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                    onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "maximumAmount", true)}
                                                                    disabled={!rc.originConnectionCheck || !this.state.editable}/>
                                                            </Grid>
                                                            <Grid item lg={6} className="textfield-container">

                                                                <TextField
                                                                    variant="outlined"
                                                                    size="small"
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            // fontWeight: "bold",

                                                                        },
                                                                        shrink: true,
                                                                    }}

                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily: 'Nika',
                                                                                fontSize: "larger",
                                                                                marginTop: "-7px",
                                                                            }}
                                                                        >
                                                                            معادل&nbsp;دلاری
                                                                        </Typography>
                                                                    }

                                                                    fullWidth
                                                                    value={b.maxInDollar.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                    onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originBanks", bi, "maxInDollar", true)}
                                                                    disabled={!rc.originConnectionCheck || !this.state.editable}/>
                                                            </Grid>
                                                        </Grid>

                                                    </Grid>
                                                    <Button className="remove-btn tiny-control-btn top-left"
                                                            onClick={() => this.props.onRemoveContentLevel1Handler("remittanceContents", ri, "originBanks", bi)}
                                                            disabled={!rc.originConnectionCheck || !this.state.editable}>
                                                        ×</Button>

                                                </Grid>


                                            );
                                        })}

                                    </Grid>
                                    <Button variant="contained"
                                            className="add-btn tiny-control-btn"
                                            style={{marginTop: "10px", marginRight: "-5px"}}
                                            disabled={!rc.originConnectionCheck || !this.state.editable}
                                            onClick={() => this.props.onAddContentLevel1Handler("remittanceContents", ri, "originBanks")}>+</Button>


                                    <Grid container item md={12} style={{marginTop: "10px"}}>

                                        {rc.originPartners.map((p, pi) => {
                                            return (
                                                <Grid container item md={12}
                                                      className="form-inner-content"
                                                      style={{
                                                          marginTop: "10px",
                                                          paddingBottom: "0",
                                                          paddingLeft: "20px",
                                                          position: "relative"
                                                      }}
                                                      key={"rc-" + ri + "-origin-partner-" + pi} spacing={1}>

                                                    <Grid item md={4} className="textfield-container"
                                                          spacing={1}>
                                                        <TextField
                                                            fullWidth
                                                            label={
                                                                <Typography
                                                                    style={{
                                                                        fontFamily: 'Nika',
                                                                        fontSize: "larger",
                                                                        marginTop: "-7px",
                                                                    }}
                                                                >
                                                                    نام شریک&nbsp;اقتصادی&nbsp;در&nbsp;کشور&nbsp;مبداء
                                                                </Typography>
                                                            }
                                                            variant="outlined"
                                                            InputLabelProps={{
                                                                style: {
                                                                    // fontWeight: "bold",

                                                                },
                                                                shrink: true,
                                                            }}
                                                            InputProps={{
                                                                style: {
                                                                    fontFamily: 'Nika',
                                                                    fontSize: "large",
                                                                    direction: "rtl",
                                                                },
                                                            }}
                                                            disabled={!this.state.editable}
                                                            value={p.name}
                                                            className="margin-bottom-5 origin-bank-input"
                                                            onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "originPartners", pi, "name")}
                                                        />
                                                    </Grid>

                                                    <Grid item md={8} spacing={1}>
                                                        {p.countries.map((c, ci) => {
                                                            return (
                                                                <Grid container item md={12}
                                                                      key={"rc-" + ri + "-origin-partner-" + pi}
                                                                      style={{
                                                                          position: "relative",
                                                                          padding: "10px 5px 5px 20px"
                                                                      }}
                                                                      className="form-content" spacing={1}>

                                                                    <Grid item md={6} spacing={1}
                                                                          className="textfield-container">

                                                                        <Autocomplete
                                                                            id={"rc-" + ri + "-origin-partner-" + pi + "-country-" + ci}

                                                                            debug
                                                                            // disableCloseOnSelect
                                                                            clearOnEscape
                                                                            // disableClearable
                                                                            includeInputInList
                                                                            autoComplete
                                                                            disableListWrap
                                                                            openOnFocus
                                                                            autoHighlight
                                                                            // autoSelect
                                                                            blurOnSelect
                                                                            style={{
                                                                                // backgroundColor: "black"
                                                                            }}
                                                                            value={c.name}
                                                                            groupBy={(option) => option[0]}

                                                                            disabled={!this.state.editable}
                                                                            onChange={(e, selected) => {
                                                                                if (selected !== null) {
                                                                                    this.props.onContentLevel3onChangeHandler(selected, "remittanceContents", ri, "originPartners", pi, "countries", ci, "name", false, true)
                                                                                }
                                                                            }}
                                                                            options={this.listedCountries.sort((a, b) => -b[0].localeCompare(a[0]))}
                                                                            renderInput={(params) =>
                                                                                <TextField {...params}
                                                                                           fullWidth
                                                                                           InputLabelProps={{
                                                                                               style: {
                                                                                                   // fontWeight: "bold",

                                                                                               },
                                                                                               shrink: true,
                                                                                           }}

                                                                                           label={
                                                                                               <Typography
                                                                                                   style={{
                                                                                                       fontFamily: 'Nika',
                                                                                                       fontSize: "larger",
                                                                                                       marginTop: "-7px",
                                                                                                   }}
                                                                                               >
                                                                                                   "کشور&nbsp;طرف&nbsp;معامله"
                                                                                               </Typography>
                                                                                           }

                                                                                           variant="outlined"/>
                                                                            }/>
                                                                    </Grid>

                                                                    <Grid item md={3} className="textfield-container"
                                                                          spacing={1}>
                                                                        <TextField
                                                                            size="small"
                                                                            label={
                                                                                <Typography
                                                                                    style={{
                                                                                        fontFamily: 'Nika',
                                                                                        fontSize: "larger",
                                                                                        marginTop: "-7px",
                                                                                    }}
                                                                                >
                                                                                    "حجم&nbsp;معامله"
                                                                                </Typography>
                                                                            }

                                                                            disabled={!this.state.editable}
                                                                            value={c.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                            variant="outlined"
                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    // fontWeight: "bold",

                                                                                },
                                                                                shrink: true,
                                                                            }}
                                                                            onChange={(e) => this.props.onContentLevel3onChangeHandler(e, "remittanceContents", ri, "originPartners", pi, "countries", ci, "amount", true, false)}
                                                                        />
                                                                    </Grid>

                                                                    <Grid item md={3} className="textfield-container"
                                                                          spacing={1}>
                                                                        <TextField
                                                                            size="small"
                                                                            label={
                                                                                <Typography
                                                                                    style={{
                                                                                        fontFamily: 'Nika',
                                                                                        fontSize: "larger",
                                                                                        marginTop: "-7px",
                                                                                    }}
                                                                                >
                                                                                    معادل&nbsp;دلاری
                                                                                </Typography>
                                                                            }

                                                                            disabled={!this.state.editable}
                                                                            value={c.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                            variant="outlined"
                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    // fontWeight: "bold",

                                                                                },
                                                                                shrink: true,
                                                                            }}
                                                                            onChange={(e) => this.props.onContentLevel3onChangeHandler(e, "remittanceContents", ri, "originPartners", pi, "countries", ci, "amountInDollar", true, false)}
                                                                        />
                                                                    </Grid>

                                                                    <Button
                                                                        className="remove-btn tiny-control-btn top-left"
                                                                        disabled={!this.state.editable}
                                                                        onClick={() => this.props.onRemoveContentLevel2Handler("remittanceContents", ri, "originPartners", pi, "countries", ci)}>
                                                                        ×</Button>

                                                                </Grid>

                                                            );
                                                        })}
                                                        <Button variant="primary"
                                                                disabled={!this.state.editable}
                                                                style={{marginTop: "5px"}}
                                                                className="add-btn tiny-control-btn"
                                                                onClick={() => this.props.onAddContentLevel2Handler("remittanceContents", ri, "originPartners", pi, "countries")}>+</Button>


                                                    </Grid>


                                                    <Button className="remove-btn tiny-control-btn top-left"
                                                            disabled={!this.state.editable}
                                                            onClick={() => this.props.onRemoveContentLevel1Handler("remittanceContents", ri, "originPartners", pi)}>
                                                        ×</Button>

                                                </Grid>


                                            );
                                        })}

                                    </Grid>

                                    <Button variant="primary"
                                            className="add-btn tiny-control-btn"
                                            style={{marginTop: "10px", marginRight: "-5px"}}
                                            disabled={!this.state.editable}
                                            onClick={() => this.props.onAddContentLevel1Handler("remittanceContents", ri, "originPartners")}>+</Button>


                                </Grid>

                                {/*//...........destination*/}

                                <Grid container item style={{marginTop: "15px"}}>

                                    <Button className="remove-btn control-btn top-right"
                                            disabled={!this.state.editable}
                                            onClick={() => this.props.onRemoveContentHandler("remittanceContents", ri)}>×</Button>

                                    <Grid container item xs={12} spacing={1}
                                          style={{marginTop: "25px", marginBottom: "15px"}}>
                                        <Grid container item xs={12} spacing={1}>
                                            <Grid item xs={4} className="textfield-container" spacing={1}>

                                                <Autocomplete
                                                    id={"rc-" + ri + "-destination-country"}
                                                    value={rc.destinationCountry}
                                                    debug
                                                    // disableCloseOnSelect
                                                    clearOnEscape
                                                    // disableClearable
                                                    includeInputInList
                                                    autoComplete
                                                    disableListWrap
                                                    openOnFocus
                                                    autoHighlight
                                                    autoSelect
                                                    blurOnSelect

                                                    groupBy={(option) => option[0]}
                                                    disabled={!this.state.editable}
                                                    onChange={(e, selected) => {
                                                        if (selected !== null) {
                                                            this.props.onContentLevel1onChangeHandler(selected, "remittanceContents", ri, "destinationCountry", true);
                                                        }
                                                    }}

                                                    options={this.listedCountries.sort((a, b) => -b[0].localeCompare(a[0]))}
                                                    renderInput={(params) => <TextField {...params}
                                                                                        fullWidth
                                                                                        InputLabelProps={{
                                                                                            style: {
                                                                                                // fontWeight: "bold",

                                                                                            },
                                                                                            shrink: true,
                                                                                        }}
                                                        // InputProps={{
                                                        //     style: {
                                                        //         fontFamily: 'Nika',
                                                        //         direction: "rtl",
                                                        //     },
                                                        // }}
                                                                                        label={
                                                                                            <Typography
                                                                                                style={{
                                                                                                    fontFamily: 'Nika',
                                                                                                    fontSize: "larger",
                                                                                                    marginTop: "-7px",
                                                                                                }}
                                                                                            >
                                                                                                کشور&nbsp;مقصد&nbsp;حواله
                                                                                            </Typography>

                                                                                        }
                                                                                        variant="outlined"/>
                                                    }/>


                                            </Grid>
                                            <Grid container item md={8} spacing={1}>
                                                <RadioGroup row name="destination-connection"
                                                            value={rc.destinationConnectionCheck}
                                                            onChange={
                                                                // (e) => alert("goodbye")
                                                                (e) => this.props.onDisableRemittanceBanksHandler(e, ri, "destinationBanks", "destinationConnectionCheck")
                                                            }>

                                                    <FormControlLabel
                                                        disabled={!this.state.editable}
                                                        value={true}
                                                        control={<Radio
                                                            // value={true}
                                                            // checked={true}
                                                            id={"rc-" + ri + "-destination-connection-check-1"}

                                                        />}
                                                        style={{direction: "ltr"}}
                                                        label={
                                                            <Typography
                                                                style={{
                                                                    fontFamily: 'Nika',
                                                                    fontSize: "large",
                                                                    marginTop: "-7px",
                                                                }}
                                                            >
                                                                "آیا&nbsp;در&nbsp;کشور&nbsp;مقصد&nbsp;با&nbsp;بانکی&nbsp;ارتباط&nbsp;دارید؟&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;بله"
                                                            </Typography>
                                                        }


                                                    />
                                                    <FormControlLabel
                                                        disabled={!this.state.editable}
                                                        value={false}
                                                        control={<Radio
                                                            // value={false}
                                                            // checked={false}
                                                            id={"rc-" + ri + "-destination-connection-check-2"}
                                                        />}

                                                        style={{direction: "ltr"}}
                                                        label={
                                                            <Typography
                                                                style={{
                                                                    fontFamily: 'Nika',
                                                                    fontSize: "large",
                                                                    marginTop: "-7px",
                                                                }}
                                                            >
                                                                خیر
                                                            </Typography>
                                                        }

                                                    />
                                                </RadioGroup>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container item md={12}>

                                        {rc.destinationBanks.map((b, bi) => {
                                            return (
                                                <Grid container item key={"rc-" + ri + "-destination-bank-" + bi}
                                                      style={{marginTop: "10px", position: "relative"}}
                                                      className="form-inner-content" spacing={1}>

                                                    <Grid container item lg={12} spacing={2}>
                                                        <Grid item lg={4} className="textfield-container">
                                                            <TextField
                                                                value={b.name}
                                                                variant="outlined"
                                                                size="small"
                                                                InputLabelProps={{
                                                                    style: {
                                                                        // fontWeight: "bold",
                                                                        direction: "ltr",

                                                                    },
                                                                    shrink: true,
                                                                }}
                                                                InputProps={{
                                                                    style: {
                                                                        fontFamily: 'Nika',
                                                                        fontSize: "large",
                                                                        direction: "rtl",
                                                                    },
                                                                }}
                                                                label={
                                                                    <Typography
                                                                        style={{
                                                                            fontFamily: 'Nika',
                                                                            fontSize: "larger",
                                                                            marginTop: "-7px",
                                                                        }}
                                                                    >
                                                                        نام&nbsp;بانک&nbsp;در&nbsp;کشور&nbsp;مقصد
                                                                    </Typography>
                                                                }

                                                                fullWidth
                                                                disabled={b.nameCheck || !rc.destinationConnectionCheck || !this.state.editable}
                                                                className="margin-bottom-5 destination-bank-input"
                                                                onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "name")}/>

                                                        </Grid>

                                                        <Grid item lg={3} className="">

                                                            <ButtonGroup fullWidth>
                                                                <FormControl fullWidth component="fieldset"
                                                                             size="small">
                                                                    <FormGroup>
                                                                        <FormControlLabel
                                                                            style={{
                                                                                margin: "auto",
                                                                            }}

                                                                            InputProps={{
                                                                                style: {
                                                                                    fontFamily: 'Nika',
                                                                                    fontSize: "large",
                                                                                    direction: "rtl",
                                                                                },
                                                                            }}

                                                                            control={<Checkbox
                                                                                checked={b.nameCheck}
                                                                                onChange={(e) => this.props.onDisableRemittanceBanksNameHandler(e, ri, "destinationBanks", bi)}
                                                                                name={"rc-" + ri + "-destination-name-check-" + bi}
                                                                                id={"rc-" + ri + "-destination-name-check-" + bi}
                                                                                disabled={!rc.destinationConnectionCheck || !this.state.editable}

                                                                            />}
                                                                            label={
                                                                                <Typography
                                                                                    style={{
                                                                                        fontFamily: 'Nika',
                                                                                        fontSize: "large",
                                                                                        marginTop: "-7px",
                                                                                    }}
                                                                                >
                                                                                    عدم&nbsp;افشای&nbsp;نام&nbsp;بانک
                                                                                </Typography>
                                                                            }
                                                                        />
                                                                    </FormGroup>
                                                                </FormControl>
                                                            </ButtonGroup>

                                                        </Grid>

                                                        <Grid container spacing={1} item lg={3}
                                                              className="textfield-container">

                                                            <FormControl variant="outlined" fullWidth size="small">
                                                                <InputLabel>

                                                                    <Typography
                                                                        style={{
                                                                            fontFamily: 'Nika',
                                                                            fontSize: "larger",
                                                                            marginTop: "-7px",
                                                                        }}>
                                                                        سطح&nbsp;مذاکره
                                                                    </Typography>

                                                                </InputLabel>
                                                                <Select

                                                                    InputProps={{
                                                                        style: {
                                                                            // fontWeight: "bold",

                                                                        },
                                                                        shrink: true,
                                                                    }}


                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily: 'Nika',
                                                                                fontSize: "larger",
                                                                                marginTop: "-7px",
                                                                            }}>
                                                                            "سطح&nbsp;مذاکره"
                                                                        </Typography>
                                                                    }

                                                                    onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "negotiationLevel")}
                                                                    value={b.negotiationLevel}
                                                                    disabled={!rc.destinationConnectionCheck || !this.state.editable}>

                                                                    {this.negotiationLevels.map(option => (
                                                                        <MenuItem key={option} value={option}>
                                                                            {option}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>

                                                        </Grid>


                                                    </Grid>
                                                    <Grid container item lg={12} spacing={4} style={{marginTop: "5px"}}>

                                                        <Grid container item lg={6} spacing={1}>
                                                            <Grid item lg={6} className="textfield-container">

                                                                <TextField
                                                                    variant="outlined"
                                                                    size="small"
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            // fontWeight: "bold",

                                                                        },
                                                                        shrink: true,
                                                                    }}

                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily: 'Nika',
                                                                                fontSize: "larger",
                                                                                marginTop: "-7px",
                                                                            }}
                                                                        >
                                                                            "حداقل&nbsp;مقدار&nbsp;حواله&nbsp;ماهانه"
                                                                        </Typography>
                                                                    }

                                                                    fullWidth
                                                                    value={b.minimumAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                    onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "minimumAmount", true)}
                                                                    disabled={!rc.destinationConnectionCheck || !this.state.editable}/>
                                                            </Grid>
                                                            <Grid item lg={6} className="textfield-container">

                                                                <TextField
                                                                    variant="outlined"
                                                                    size="small"
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            // fontWeight: "bold",

                                                                        },
                                                                        shrink: true,
                                                                    }}


                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily: 'Nika',
                                                                                fontSize: "larger",
                                                                                marginTop: "-7px",
                                                                            }}
                                                                        >
                                                                            معادل دلاری
                                                                        </Typography>
                                                                    }

                                                                    fullWidth
                                                                    value={b.minInDollar.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                    onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "minInDollar", true)}
                                                                    disabled={!rc.destinationConnectionCheck || !this.state.editable}/>
                                                            </Grid>
                                                        </Grid>

                                                        <Grid container item lg={6} spacing={1}>
                                                            <Grid item lg={6} className="textfield-container">

                                                                <TextField
                                                                    variant="outlined"
                                                                    size="small"
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            // fontWeight: "bold",

                                                                        },
                                                                        shrink: true,
                                                                    }}

                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily: 'Nika',
                                                                                fontSize: "larger",
                                                                                marginTop: "-7px",
                                                                            }}
                                                                        >
                                                                            "حداکثر&nbsp;مقدار&nbsp;حواله&nbsp;ماهانه"
                                                                        </Typography>
                                                                    }

                                                                    fullWidth
                                                                    value={b.maximumAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                    onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "maximumAmount", true)}
                                                                    disabled={!rc.destinationConnectionCheck || !this.state.editable}/>
                                                            </Grid>
                                                            <Grid item lg={6} className="textfield-container">

                                                                <TextField
                                                                    variant="outlined"
                                                                    size="small"
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            // fontWeight: "bold",

                                                                        },
                                                                        shrink: true,
                                                                    }}

                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily: 'Nika',
                                                                                fontSize: "larger",
                                                                                marginTop: "-7px",
                                                                            }}
                                                                        >
                                                                            معادل&nbsp;دلاری
                                                                        </Typography>
                                                                    }

                                                                    fullWidth
                                                                    value={b.maxInDollar.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                    onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationBanks", bi, "maxInDollar", true)}
                                                                    disabled={!rc.destinationConnectionCheck || !this.state.editable}/>
                                                            </Grid>
                                                        </Grid>

                                                    </Grid>
                                                    <Button className="remove-btn tiny-control-btn top-left"
                                                            onClick={() => this.props.onRemoveContentLevel1Handler("remittanceContents", ri, "destinationBanks", bi)}
                                                            disabled={!rc.destinationConnectionCheck || !this.state.editable}>
                                                        ×</Button>

                                                </Grid>


                                            );
                                        })}

                                    </Grid>
                                    <Button variant="contained"
                                            className="add-btn tiny-control-btn"
                                            style={{marginTop: "10px", marginRight: "-5px"}}
                                            disabled={!rc.destinationConnectionCheck || !this.state.editable}
                                            onClick={() => this.props.onAddContentLevel1Handler("remittanceContents", ri, "destinationBanks")}>+</Button>


                                    <Grid container item md={12} style={{marginTop: "10px"}}>

                                        {rc.destinationPartners.map((p, pi) => {
                                            return (
                                                <Grid container item md={12}
                                                      className="form-inner-content"
                                                      style={{
                                                          marginTop: "10px",
                                                          paddingBottom: "0",
                                                          paddingLeft: "20px",
                                                          position: "relative"
                                                      }}
                                                      key={"rc-" + ri + "-destination-partner-" + pi} spacing={1}>

                                                    <Grid item md={4} className="textfield-container"
                                                          spacing={1}>
                                                        <TextField
                                                            fullWidth
                                                            label={
                                                                <Typography
                                                                    style={{
                                                                        fontFamily: 'Nika',
                                                                        fontSize: "larger",
                                                                        marginTop: "-7px",
                                                                    }}
                                                                >
                                                                    نام شریک&nbsp;اقتصادی&nbsp;در&nbsp;کشور&nbsp;مقصد
                                                                </Typography>
                                                            }
                                                            variant="outlined"
                                                            InputLabelProps={{
                                                                style: {
                                                                    // fontWeight: "bold",

                                                                },
                                                                shrink: true,
                                                            }}
                                                            InputProps={{
                                                                style: {
                                                                    fontFamily: 'Nika',
                                                                    fontSize: "large",
                                                                    direction: "rtl",
                                                                },
                                                            }}
                                                            disabled={!this.state.editable}
                                                            value={p.name}
                                                            className="margin-bottom-5 destination-bank-input"
                                                            onChange={(e) => this.props.onContentLevel2onChangeHandler(e, "remittanceContents", ri, "destinationPartners", pi, "name")}
                                                        />
                                                    </Grid>

                                                    <Grid item md={8} spacing={1}>
                                                        {p.countries.map((c, ci) => {
                                                            return (
                                                                <Grid container item md={12}
                                                                      key={"rc-" + ri + "-destination-partner-" + pi}
                                                                      style={{
                                                                          position: "relative",
                                                                          padding: "10px 5px 5px 20px"
                                                                      }}
                                                                      className="form-content" spacing={1}>

                                                                    <Grid item md={6} spacing={1}
                                                                          className="textfield-container">

                                                                        <Autocomplete
                                                                            id={"rc-" + ri + "-destination-partner-" + pi + "-country-" + ci}

                                                                            debug
                                                                            // disableCloseOnSelect
                                                                            clearOnEscape
                                                                            // disableClearable
                                                                            includeInputInList
                                                                            autoComplete
                                                                            disableListWrap
                                                                            openOnFocus
                                                                            autoHighlight
                                                                            // autoSelect
                                                                            blurOnSelect
                                                                            style={{
                                                                                // backgroundColor: "black"
                                                                            }}
                                                                            value={c.name}
                                                                            groupBy={(option) => option[0]}

                                                                            disabled={!this.state.editable}
                                                                            onChange={(e, selected) => {
                                                                                if (selected !== null) {
                                                                                    this.props.onContentLevel3onChangeHandler(selected, "remittanceContents", ri, "destinationPartners", pi, "countries", ci, "name", false, true)
                                                                                }
                                                                            }}
                                                                            options={this.listedCountries.sort((a, b) => -b[0].localeCompare(a[0]))}
                                                                            renderInput={(params) =>
                                                                                <TextField {...params}
                                                                                           fullWidth
                                                                                           InputLabelProps={{
                                                                                               style: {
                                                                                                   // fontWeight: "bold",

                                                                                               },
                                                                                               shrink: true,
                                                                                           }}

                                                                                           label={
                                                                                               <Typography
                                                                                                   style={{
                                                                                                       fontFamily: 'Nika',
                                                                                                       fontSize: "larger",
                                                                                                       marginTop: "-7px",
                                                                                                   }}
                                                                                               >
                                                                                                   کشور&nbsp;طرف&nbsp;معامله
                                                                                               </Typography>
                                                                                           }

                                                                                           variant="outlined"/>
                                                                            }/>
                                                                    </Grid>

                                                                    <Grid item md={3} className="textfield-container"
                                                                          spacing={1}>
                                                                        <TextField
                                                                            size="small"
                                                                            label={
                                                                                <Typography
                                                                                    style={{
                                                                                        fontFamily: 'Nika',
                                                                                        fontSize: "larger",
                                                                                        marginTop: "-7px",
                                                                                    }}
                                                                                >
                                                                                    حجم&nbsp;معامله
                                                                                </Typography>
                                                                            }

                                                                            disabled={!this.state.editable}
                                                                            value={c.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                            variant="outlined"
                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    // fontWeight: "bold",

                                                                                },
                                                                                shrink: true,
                                                                            }}
                                                                            onChange={(e) => this.props.onContentLevel3onChangeHandler(e, "remittanceContents", ri, "destinationPartners", pi, "countries", ci, "amount", true, false)}
                                                                        />
                                                                    </Grid>

                                                                    <Grid item md={3} className="textfield-container"
                                                                          spacing={1}>
                                                                        <TextField
                                                                            size="small"
                                                                            label={
                                                                                <Typography
                                                                                    style={{
                                                                                        fontFamily: 'Nika',
                                                                                        fontSize: "larger",
                                                                                        marginTop: "-7px",
                                                                                    }}
                                                                                >
                                                                                    معادل&nbsp;دلاری
                                                                                </Typography>
                                                                            }

                                                                            disabled={!this.state.editable}
                                                                            value={c.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                                            variant="outlined"
                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    // fontWeight: "bold",

                                                                                },
                                                                                shrink: true,
                                                                            }}
                                                                            onChange={(e) => this.props.onContentLevel3onChangeHandler(e, "remittanceContents", ri, "destinationPartners", pi, "countries", ci, "amountInDollar", true, false)}
                                                                        />
                                                                    </Grid>

                                                                    <Button
                                                                        className="remove-btn tiny-control-btn top-left"
                                                                        disabled={!this.state.editable}
                                                                        onClick={() => this.props.onRemoveContentLevel2Handler("remittanceContents", ri, "destinationPartners", pi, "countries", ci)}>
                                                                        ×</Button>

                                                                </Grid>

                                                            );
                                                        })}
                                                        <Button variant="primary"
                                                                disabled={!this.state.editable}
                                                                style={{marginTop: "5px"}}
                                                                className="add-btn tiny-control-btn"
                                                                onClick={() => this.props.onAddContentLevel2Handler("remittanceContents", ri, "destinationPartners", pi, "countries")}>+</Button>


                                                    </Grid>


                                                    <Button className="remove-btn tiny-control-btn top-left"
                                                            disabled={!this.state.editable}
                                                            onClick={() => this.props.onRemoveContentLevel1Handler("remittanceContents", ri, "destinationPartners", pi)}>
                                                        ×</Button>

                                                </Grid>


                                            );
                                        })}

                                    </Grid>

                                    <Button variant="primary"
                                            className="add-btn tiny-control-btn"
                                            style={{marginTop: "10px", marginRight: "-5px"}}
                                            disabled={!this.state.editable}
                                            onClick={() => this.props.onAddContentLevel1Handler("remittanceContents", ri, "destinationPartners")}>+</Button>


                                </Grid>

                            </Grid>
                        );
                    })
                );


            form = (
                <div>
                    <form className="main-form my-form" style={{marginBottom: "10px"}}>

                        <Container className="form-inner-content">

                            {remittanceContainers}

                            <Button className="add-btn control-btn margin" variant="primary"
                                    disabled={!this.state.editable}
                                    onClick={() => this.props.onAddContentHandler("remittanceContents")}>+</Button>
                        </Container>

                        {/*<Grid className="form-inner-content">*/}
                        {/*    {customerContainers}*/}
                        {/*    <Button className="add-btn control-btn margin" variant="primary"*/}
                        {/*            onClick={() => this.addContentHandler("customerContents")}>+</Button>*/}
                        {/*</Grid>*/}

                        <Container className="form-inner-content" style={{marginTop: "10px"}}>
                            <Grid container className="form-content margin-bottom-5">

                                <Grid container item spacing={2}>
                                    <Grid item className="textfield-container" md={6}>
                                        <FormControl variant="outlined" fullWidth size="small">
                                            <InputLabel
                                                id="demo-simple-select-outlined-label">

                                                <Typography
                                                    style={{
                                                        fontFamily: 'Nika',
                                                        fontSize: "larger",
                                                        marginTop: "-7px",
                                                    }}>
                                                    سرمایه &nbsp;مورد&nbsp;نیاز&nbsp;برای&nbsp;گسترش&nbsp; شبکه
                                                </Typography>

                                            </InputLabel>
                                            <Select

                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"

                                                InputProps={{
                                                    style: {
                                                        // fontWeight: "bold",

                                                    },
                                                    shrink: true,
                                                }}


                                                label={
                                                    <Typography
                                                        style={{
                                                            fontFamily: 'Nika',
                                                            fontSize: "larger",
                                                            marginTop: "-7px",
                                                        }}
                                                    >
                                                        سرمایه &nbsp;مورد&nbsp;نیاز&nbsp;برای&nbsp;گسترش&nbsp; شبکه

                                                    </Typography>
                                                }
                                                disabled={!this.state.editable}
                                                value={this.props.formData.moneyRequired}
                                                onChange={(e) => this.props.onOnChangeHandler(e, "moneyRequired")}>

                                                {this.moneyScales.map(option => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    <Grid item className="textfield-container" md={6}>
                                        <TextField value={this.props.formData.others} id="others"
                                                   variant="outlined"
                                                   fullWidth
                                                   multiline
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   InputProps={{
                                                       style: {direction: "rtl"},
                                                   }}
                                                   label={
                                                       <Typography
                                                           style={{
                                                               fontFamily: 'Nika',
                                                               fontSize: "larger",
                                                               marginTop: "-7px",
                                                           }}
                                                       >
                                                           سایر&nbsp;توضیحات
                                                       </Typography>
                                                   }
                                                   rowsMax="4"
                                                   disabled={!this.state.editable}
                                                   onChange={(e) => this.props.onOnChangeHandler(e, "others")}
                                        />

                                    </Grid>
                                </Grid>

                            </Grid>
                        </Container>
                    </form>
                    <Button variant="contained" color="secondary" disabled={!this.state.editable}
                            onClick={() => {
                                this.setState({
                                    editable: false,
                                });

                                this.props.onPostForm({username: this.props.username}, this.props.formData)
                            }}>ارسال</Button>

                    <Button variant="contained" disabled={this.state.editable}
                            style={{marginLeft: "5px"}}
                            onClick={() => this.setState({editable: true})}>ویرایش</Button>
                </div>
            )

        } else {
            form = <Spinner/>;
        }

        return (

            <div style={{marginTop: "50px"}}>
                <h4 className={styles.TextCenter}>فرم زیر را کامل کنید</h4>
                <div style={{marginBottom: "50px"}}>
                    {form}

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        username: state.auth.username,
        date: state.main.data[state.main.data.length - 1].date,
        formData: state.main.data[state.main.data.length - 1].data,
        loading: state.main.loading,
        counter: state.main.counter,
        isNew: state.main.data[state.main.data.length - 1].date === "init",
    }
};

const mapDispatchToProps = dispatch => {
    return {

        onOnChangeHandler: (event, control) => dispatch(actions.onChangeHandler(event, control)),
        onAddContentHandler: (control) => dispatch(actions.addContentHandler(control)),
        onRemoveContentHandler: (control, index) => dispatch(actions.removeContentHandler(control, index)),
        onContentLevel1onChangeHandler: (event, control, index, control2, autoFlag) => dispatch(actions.contentLevel1onChangeHandler(event, control, index, control2, autoFlag)),
        onAddContentLevel1Handler: (control, index, control2) => dispatch(actions.addContentLevel1Handler(control, index, control2)),
        onRemoveContentLevel1Handler: (control, index, control2, index2) => dispatch(actions.removeContentLevel1Handler(control, index, control2, index2)),
        onContentLevel2onChangeHandler: (event, control, index, control2, index2, control3, commaFlag) => dispatch(actions.contentLevel2onChangeHandler(event, control, index, control2, index2, control3, commaFlag)),
        onAddContentLevel2Handler: (control, index, control2, index2, control3) => dispatch(actions.addContentLevel2Handler(control, index, control2, index2, control3)),
        onRemoveContentLevel2Handler: (control, index, control2, index2, control3, index3) => dispatch(actions.removeContentLevel2Handler(control, index, control2, index2, control3, index3)),
        onContentLevel3onChangeHandler: (event, control, index, control2, index2, control3, index3, control4, commaFlag, autoFlag) => dispatch(actions.contentLevel3onChangeHandler(event, control, index, control2, index2, control3, index3, control4, commaFlag, autoFlag)),
        onDisableRemittanceBanksNameHandler: (event, index, control, index2) => dispatch(actions.disableRemittanceBanksNameHandler(event, index, control, index2)),
        onDisableRemittanceBanksHandler: (event, index, control, control2) => dispatch(actions.disableRemittanceBanksHandler(event, index, control, control2)),

        onPostForm: (userData, userProfile) => dispatch(actions.postForm(userData, userProfile))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);