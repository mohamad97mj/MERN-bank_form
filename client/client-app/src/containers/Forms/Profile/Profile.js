import React, {Component,  Suspense, lazy } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {
    makeStyles,
    withStyles,
    createMuiTheme,
    ThemeProvider,
    jssPreset,
    StylesProvider
} from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../../components/UI/Header/Header.js";
import Footer from "../../../components/UI/Footer/Footer.js";
import Button from "../../../components/UI/CustomButtons/Button.js";
import GridContainer from "../../../components/UI/Grid/GridContainer.js";
import GridItem from "../../../components/UI/Grid/GridItem.js";
import HeaderLinks from "../../../components/UI/Header/HeaderLinks.js";
// import NavPills from "../../components/UI/NavPills/NavPills.js";
import Parallax from "../../../components/UI/Parallax/Parallax.js";
import '../../Panel/Panel.css';
import './Profile.css';
import '../Form.css';


import styles from "../../../assets/jss/material-kit-react/views/profilePage.js";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import LoggedInHeaderLinks from "../../../components/UI/Header/LoggedInHeaderLinks";
import {connect} from "react-redux";
import * as actions from "../../../api";
import {
    ButtonGroup, Checkbox, Container, FormControl,
    FormControlLabel, FormGroup,
    FormLabel,
    Grid, InputLabel, MenuItem,
    Radio,
    RadioGroup, Select,
    TextField,
    Typography
} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import Spinner from "../../../components/UI/Spinner/Spinner";

import {create} from 'jss';
import rtl from 'jss-rtl';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});


const mapStateToProps = state => {
    return {
        username: state.auth.username,
        profileData: state.profile.data[state.profile.data.length - 1],
        loading: state.profile.loading,
        counter: state.profile.counter,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (state) => dispatch(actions.profileOnChangeHandler(state)),
        onPostProfile: (userProfile) => dispatch(actions.postProfile(userProfile))

    }
};


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editable: false,
        }
    }

    inputOnChangeHandler = (e, control) => {

        this.props.onChangeHandler({control: control, value: e.target.value});
    };

    checkInputOnChangeHandler = (e, control) => {

        this.props.onChangeHandler({control: control, value: e.target.checked});
    };

    theme = createMuiTheme({
        direction: 'rtl', // Both here and <body dir="rtl">
    });

    //..................................................................................

    componentDidMount() {
        this.setState({
            editable: this.state.editable || this.props.isNew,
        })
    }

    render() {

        let form = null;

        if (this.props.profileData !== undefined) {
            form = (
                <ThemeProvider theme={this.theme}>
                    <div style={{padding: "50px 0 50px 0"}}>
                        <h5>فرم زیر را کامل کنید</h5>
                        <form onSubmit={this.submitHandler} style={{marginBottom: "10px"}}
                              className="profile-form  my-form">
                            <Grid className="form-inner-content">

                                <Grid item className="form-content">
                                    <Grid container item xs={12} xs={12} spacing={2}>
                                        <Grid item xs={12} sm={8} className="textfield-container">
                                            <TextField id="name" value={this.props.profileData.name}
                                                       disabled={!this.state.editable}
                                                       variant="outlined"
                                                // style={{direction: "ltr"}}
                                                       InputLabelProps={{
                                                           style: {
                                                               // fontWeight: "bold",
                                                               // direction: "ltr",

                                                           },
                                                           shrink: true,
                                                       }}
                                                       InputProps={{
                                                           style: {
                                                               // direction: "rtl",
                                                               // textAlign: "right",
                                                           },
                                                       }}
                                                       label="نام و نام خانوادگی"
                                                       fullWidth
                                                       onChange={(e) => this.inputOnChangeHandler(e, "name")}/>
                                        </Grid>
                                        <Grid item xs={12} sm={4} className="textfield-container">

                                            <TextField id="national-code"

                                                       label="کد ملی"
                                                       variant="outlined"
                                                       fullWidth
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }}
                                                       InputProps={{
                                                           style: {direction: "rtl"},
                                                       }}
                                                       onChange={(e) => this.inputOnChangeHandler(e, "nationalCode")}
                                                       value={this.props.profileData.nationalCode}
                                                       disabled={!this.state.editable}/>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item className="form-content">
                                    <Grid container item xs={12} spacing={2} style={{marginBottom: "15px"}}>
                                        <Grid container item xs={12} sm={6} md={3}>
                                            <Grid item xs={12} style={{marginBottom: "15px"}}
                                                  className="textfield-container">
                                                <TextField id="state" value={this.props.profileData.state}

                                                           label = "استان"
                                                           variant="outlined"
                                                           fullWidth
                                                           InputLabelProps={{
                                                               shrink: true,
                                                           }}
                                                           InputProps={{
                                                               style: {direction: "rtl"},
                                                           }}
                                                           disabled={!this.state.editable}
                                                           onChange={(e) => this.inputOnChangeHandler(e, "state")}/>
                                                {/*<Grid as="select" runat="server" id="state" onChange={this.onChangeHandler.bind(this)}>*/}

                                                {/*    <option value=""></option>*/}
                                                {/*    <option value="  ,آذرشهر ,اسکو ,اهر ,بستان‌آباد ,بناب ,تبریز ,جلفا ,چاراویماق ,سراب ,شبستر ,عجب‌شیر ,کلیبر ,مراغه ,مرند ,ملکان ,میانه ,ورزقان ,هریس ,هشترود">آذربایجان شرقی</option>*/}
                                                {/*    <option value="  ,ارومیه ,اشنویه ,بوکان ,پیرانشهر ,تکاب ,چالدران ,خوی ,سردشت ,سلماس ,شاهین‌دژ ,ماکو ,مهاباد ,میاندوآب ,نقده">آذربایجان غربی</option>*/}
                                                {/*    <option value="  ,اردبیل ,بیله‌سوار ,پارس‌آباد ,خلخال ,کوثر ,گِرمی ,مِشگین‌شهر ,نَمین ,نیر">اردبیل</option>*/}
                                                {/*    <option value="  ,آران و بیدگل ,اردستان ,اصفهان ,برخوار و میمه ,تیران و کرون ,چادگان ,خمینی‌شهر ,خوانسار ,سمیرم ,شهرضا ,سمیرم سفلی ,فریدن ,فریدون‌شهر ,فلاورجان ,کاشان ,گلپایگان ,لنجان ,مبارکه ,نائین ,نجف‌آباد ,نطنز">اصفهان</option>*/}
                                                {/*    <option value="  ,آبدانان ,ایلام ,ایوان ,دره‌شهر ,دهلران ,شیروان و چرداول ,مهران">ایلام</option>*/}
                                                {/*    <option value="  ,بوشهر ,تنگستان ,جم ,دشتستان ,دشتی,دیر ,دیلم ,کنگان ,گناوه">بوشهر</option>*/}
                                                {/*    <option value="  ,اسلام‌شهر ,پاکدشت ,تهران ,دماوند ,رباط‌کریم ,ری ,ساوجبلاغ ,شمیرانات ,شهریار ,فیروزکوه ,کرج ,نظرآباد ,ورامین">تهران</option>*/}
                                                {/*    <option value="  ,اردل ,بروجن ,شهرکرد ,فارسان ,کوهرنگ ,لردگان">چهارمحال و بختیاری</option>*/}
                                                {/*    <option value="  ,بیرجند ,درمیان ,سرایان ,سربیشه ,فردوس ,قائنات,نهبندان">خراسان جنوبی</option>*/}
                                                {/*    <option value="  ,بردسکن ,تایباد ,تربت جام ,تربت حیدریه ,چناران ,خلیل‌آباد ,خواف ,درگز ,رشتخوار ,سبزوار ,سرخس ,فریمان ,قوچان ,کاشمر ,کلات ,گناباد ,مشهد ,مه ولات ,نیشابور">خراسان رضوی</option>*/}
                                                {/*    <option value="  ,اسفراین ,بجنورد ,جاجرم ,شیروان ,فاروج ,مانه و سملقان">خراسان شمالی</option>*/}
                                                {/*    <option value="  ,آبادان ,امیدیه ,اندیمشک ,اهواز ,ایذه ,باغ‌ملک ,بندر ماهشهر ,بهبهان ,خرمشهر ,دزفول ,دشت آزادگان ,رامشیر ,رامهرمز ,شادگان ,شوش ,شوشتر ,گتوند ,لالی ,مسجد سلیمان,هندیجان ">خوزستان</option>*/}
                                                {/*    <option value="  ,ابهر ,ایجرود ,خدابنده ,خرمدره ,زنجان ,طارم ,ماه‌نشان">زنجان</option>*/}
                                                {/*    <option value="  ,دامغان ,سمنان ,شاهرود ,گرمسار ,مهدی‌شهر">سمنان</option>*/}
                                                {/*    <option value="  ,ایرانشهر ,چابهار ,خاش ,دلگان ,زابل ,زاهدان ,زهک ,سراوان ,سرباز ,کنارک ,نیک‌شهر">سیستان و بلوچستان</option>*/}
                                                {/*    <option value="  ,آباده ,ارسنجان ,استهبان ,اقلید ,بوانات ,پاسارگاد ,جهرم ,خرم‌بید ,خنج ,داراب ,زرین‌دشت ,سپیدان ,شیراز ,فراشبند ,فسا ,فیروزآباد ,قیر و کارزین ,کازرون ,لارستان ,لامِرد ,مرودشت ,ممسنی ,مهر ,نی‌ریز">فارس</option>*/}
                                                {/*    <option value="  ,آبیک ,البرز ,بوئین‌زهرا ,تاکستان ,قزوین">قزوین</option>*/}
                                                {/*    <option value="  ,قم">قم</option>*/}
                                                {/*    <option value="  ,بانه ,بیجار ,دیواندره ,سروآباد ,سقز ,سنندج ,قروه ,کامیاران ,مریوان">کردستان</option>*/}
                                                {/*    <option value="  ,بافت ,بردسیر ,بم ,جیرفت ,راور ,رفسنجان ,رودبار جنوب ,زرند ,سیرجان ,شهر بابک ,عنبرآباد ,قلعه گنج ,کرمان ,کوهبنان ,کهنوج ,منوجان">کرمان</option>*/}
                                                {/*    <option value="  ,اسلام‌آباد غرب ,پاوه ,ثلاث باباجانی ,جوانرود ,دالاهو ,روانسر ,سرپل ذهاب ,سنقر ,صحنه ,قصر شیرین ,کرمانشاه ,کنگاور ,گیلان غرب ,هرسین">کرمانشاه</option>*/}
                                                {/*    <option value="  ,بویراحمد ,بهمئی ,دنا ,کهگیلویه ,گچساران">کهگیلویه و بویراحمد</option>*/}
                                                {/*    <option value="  ,آزادشهر ,آق‌قلا ,بندر گز ,ترکمن ,رامیان ,علی‌آباد ,کردکوی ,کلاله ,گرگان ,گنبد کاووس ,مراوه‌تپه ,مینودشت">گلستان</option>*/}
                                                {/*    <option value="  ,آستارا ,آستانه اشرفیه ,اَملَش ,بندر انزلی ,رشت ,رضوانشهر ,رودبار ,رودسر ,سیاهکل ,شَفت ,صومعه‌سرا ,طوالش ,فومَن ,لاهیجان ,لنگرود ,ماسال">گیلان</option>*/}
                                                {/*    <option value="  ,ازنا ,الیگودرز ,بروجرد ,پل‌دختر ,خرم‌آباد ,دورود ,دلفان ,سلسله ,کوهدشت">لرستان</option>*/}
                                                {/*    <option value="  ,آمل ,بابل ,بابلسر ,بهشهر ,تنکابن ,جویبار ,چالوس ,رامسر ,ساری ,سوادکوه ,قائم‌شهر ,گلوگاه ,محمودآباد ,نکا ,نور ,نوشهر">مازندران</option>*/}
                                                {/*    <option value="  ,آشتیان ,اراک ,تفرش ,خمین ,دلیجان ,زرندیه ,ساوه ,شازند ,کمیجان ,محلات">مرکزی</option>*/}
                                                {/*    <option value="  ,ابوموسی ,بستک ,بندر عباس ,بندر لنگه ,جاسک ,حاجی‌آباد ,شهرستان خمیر ,رودان  ,قشم ,گاوبندی ,میناب">هرمزگان</option>*/}
                                                {/*    <option value="  ,اسدآباد ,بهار ,تویسرکان ,رزن ,کبودرآهنگ ,ملایر ,نهاوند ,همدان">همدان</option>*/}
                                                {/*    <option value="  ,ابرکوه ,اردکان ,بافق ,تفت ,خاتم ,صدوق ,طبس ,مهریز ,مِیبُد ,یزد">یزد</option>*/}

                                                {/*</Grid>*/}
                                            </Grid>

                                            <Grid item xs={12} className="textfield-container">
                                                <TextField value={this.props.profileData.postalCode} id="postal-code"

                                                           label="کد پستی"
                                                           variant="outlined"
                                                           fullWidth
                                                           InputLabelProps={{
                                                               shrink: true,
                                                           }}
                                                           InputProps={{
                                                               style: {direction: "rtl"},
                                                           }}
                                                           disabled={!this.state.editable}
                                                           onChange={(e) => this.inputOnChangeHandler(e, "postalCode")}

                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container item xs={12} sm={6} md={3}>
                                            <Grid item xs={12} className="textfield-container"
                                                  style={{marginBottom: "15px"}}>

                                                <TextField value={this.props.profileData.city} id="city"

                                                           label="شهر"

                                                           variant="outlined"
                                                           fullWidth
                                                           InputLabelProps={{
                                                               shrink: true,
                                                           }}
                                                           InputProps={{
                                                               style: {direction: "rtl"},
                                                           }}
                                                           disabled={!this.state.editable}
                                                           onChange={(e) => this.inputOnChangeHandler(e, "city")}
                                                />

                                                {/*<Grid as="select" id="city"></Grid>*/}


                                            </Grid>

                                            <Grid item xs={12} className="textfield-container">

                                                <TextField value={this.props.profileData.telephone} id="telephone"

                                                           label="تلفن"

                                                           variant="outlined"
                                                           fullWidth
                                                           InputLabelProps={{
                                                               shrink: true,
                                                           }}
                                                           InputProps={{
                                                               style: {direction: "rtl"},
                                                           }}
                                                           disabled={!this.state.editable}
                                                           onChange={(e) => this.inputOnChangeHandler(e, "telephone")}/>

                                            </Grid>

                                        </Grid>
                                        <Grid container item xs={12} sm={12} md={6} className="textfield-container">

                                            <TextField value={this.props.profileData.address} id="address"
                                                       variant="outlined"
                                                       fullWidth
                                                       multiline
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }}
                                                       InputProps={{
                                                           style: {direction: "rtl"},
                                                       }}

                                                       label="آدرس"

                                                       rowsMax="4"
                                                       disabled={!this.state.editable}
                                                       onChange={(e) => this.inputOnChangeHandler(e, "address")}
                                            />

                                        </Grid>

                                    </Grid>
                                    <Grid container item xs={12} spacing={2}>
                                        <Grid item xs={12} md={3} className="textfield-container">
                                            <TextField id="mobile" value={this.props.profileData.mobile}

                                                       label="شماره موبایل"

                                                       variant="outlined"
                                                       fullWidth
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }}
                                                       InputProps={{
                                                           style: {direction: "rtl"},
                                                       }}
                                                       disabled={!this.state.editable}
                                                       onChange={(e) => this.inputOnChangeHandler(e, "mobile")}
                                            />
                                        </Grid>

                                        <Grid container item spacing={2} xs={12} md={7}>

                                            <ButtonGroup fullWidth>

                                                <FormControl fullWidth
                                                             component="fieldset"
                                                             color="secondary"
                                                >
                                                    <FormGroup>
                                                        <FormControlLabel
                                                            control={<Checkbox
                                                                checked={this.props.profileData.socialNetworkAccess}
                                                                onChange={(e) => this.checkInputOnChangeHandler(e, "socialNetworkAccess")}
                                                                name="social-network-check"
                                                                id="social-check"
                                                                disabled={!this.state.editable}

                                                            />}

                                                            label="امکان دسترسی از طریق شبکه های اجتماعی"

                                                        />
                                                    </FormGroup>
                                                </FormControl>
                                            </ButtonGroup>


                                        </Grid>


                                    </Grid>
                                </Grid>

                                <Grid item className="form-content">
                                    <Grid container item xs={12} spacing={2}>
                                        <Grid item xs={12} sm={6} md={4} className="textfield-container">
                                            <TextField value={this.props.profileData.lastLicenseNumber}

                                                       label="شماره آخرین مجوز"

                                                       variant="outlined"
                                                       fullWidth
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }}
                                                       InputProps={{
                                                           style: {direction: "rtl"},
                                                       }}
                                                       id="last-license-number" disabled={!this.state.editable}
                                                       onChange={(e) => this.inputOnChangeHandler(e, "lastLicenseNumber")}/>


                                        </Grid>


                                        <Grid item xs={12} sm={6} md={4} className="textfield-container">

                                            <TextField value={this.props.profileData.lastLicenseValidityDate}

                                                       label="تاریخ اعتبار آخرین مجوز"

                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }}
                                                       InputProps={{
                                                           style: {direction: "rtl"},
                                                       }}
                                                       variant="outlined"
                                                       fullWidth
                                                       id="last-license-validity-date" disabled={!this.state.editable}
                                                       onChange={(e) => this.inputOnChangeHandler(e, "lastLicenseValidityDate")}/>

                                        </Grid>

                                        <Grid item xs={12} sm={4} md={4} className="textfield-container">
                                            <TextField value={this.props.profileData.registerNumber}

                                                       label="شماره ثبت"

                                                       id="register-number"
                                                       variant="outlined"
                                                       fullWidth
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }}
                                                       InputProps={{
                                                           style: {direction: "rtl"},
                                                       }}
                                                       disabled={!this.state.editable}
                                                       onChange={(e) => this.inputOnChangeHandler(e, "registerNumber")}/>
                                        </Grid>

                                        <Grid item xs={12} sm={8} md={6} className="textfield-container">

                                            <TextField id="manager" value={this.props.profileData.manager}

                                                       label="مدیر"

                                                       variant="outlined"
                                                       fullWidth
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }}
                                                       InputProps={{
                                                           style: {direction: "rtl"},
                                                       }}
                                                       disabled={!this.state.editable}
                                                       onChange={(e) => this.inputOnChangeHandler(e, "manager")}/>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </form>
                        <Button variant="contained" color="primary" disabled={!this.state.editable}
                                onClick={() => {
                                    this.setState({
                                        editable: false,
                                    });
                                    this.props.onPostProfile(this.props.profileData)
                                }}>ارسال</Button>
                        <Button variant="contained" color="primary" disabled={this.state.editable}
                                style={{marginLeft: "5px"}}
                                onClick={() => this.setState({editable: true})}>ویرایش</Button>


                    </div>
                </ThemeProvider>
            );
        } else {

            form = <Spinner/>;
        }


        return (
            <StylesProvider jss={jss}>
                <Header
                    color="transparent"
                    brand="Material Kit React"
                    rightLinks={<LoggedInHeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...this.props.classes}
                />
                <Parallax small filter image={require("../../../assets/images/tinified/panel2.jpg")}/>
                <div className={classNames(this.props.classes.main, this.props.classes.mainRaised)}>
                    <div>
                        {form}
                    </div>
                </div>
                <Footer/>
            </StylesProvider>
        )
    }

}))
