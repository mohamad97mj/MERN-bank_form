import React, {Component} from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './Profile.module.css';
import "./Profile.css";
import $ from "jquery";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
// import ToggleButtonGroup from "react-bootstrap/ButtonGroup";
// import Container from "react-bootstrap/Container";

import {connect} from 'react-redux';
import '../Form.css';
import * as actions from "../../../api";

import {
    Grid,
    Button,
    Container,
    Box,
    TextField,
    Typography,
    ButtonGroup,
    Checkbox,
    FormControl,
    FormLabel,
    FormControlLabel,
    FormGroup
} from '@material-ui/core';


class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editable: false,
        }
    }

    // componentDidMount() {
    //     if (this.testStorage() === true) {
    //         this.hydrateStateWithStorage();
    //         window.addEventListener(
    //             "pagehide",
    //             this.saveStateToStorage.bind(this)
    //         );
    //     }
    // }
    //
    // componentWillUnmount() {
    //     if (this.testStorage() === true) {
    //         this.saveStateToStorage();
    //         window.removeEventListener(
    //             "pagehide",
    //             this.saveStateToStorage.bind(this)
    //         );
    //     }
    // }


    // checkValidity(value, rules) {
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

    // onChangeHandler = (event) => {
    //     const cities = event.target.value;
    //     const _city = document.getElementById("city");
    //     _city.options.length = 0;
    //     if (cities != "") {
    //         const arr = cities.split(",");
    //         for (let i = 0; i < arr.length; i++) {
    //             if (arr[i] != "") {
    //                 _city.options[_city.options.length] = new Option(arr[i], arr[i]);
    //             }
    //         }
    //     }
    // };


    inputOnChangeHandler = (e, control) => {

        this.props.onChangeHandler({control: control, value: e.target.value});
    };

    checkInputOnChangeHandler = (e, control) => {

        this.props.onChangeHandler({control: control, value: e.target.checked});
    };

    render() {

        let form = null;

        if (this.props.profileData !== undefined) {
            form = (
                <div style={{marginTop: "50px"}}>
                    <h4>فرم زیر را کامل کنید</h4>
                    <form onSubmit={this.submitHandler} style={{marginBottom: "10px"}}
                          className="profile-form form-inner-content my-form">
                        <Grid container spacing={1}>
                            <Grid container item md={12} className="form-content" spacing={2}>
                                <Grid container item spacing={2}>
                                    <Grid item md={8} className="textfield-container">
                                        {/*<Grid item md="3">*/}
                                        {/*    نام و نام خانوادگی:*/}
                                        {/*</Grid>*/}
                                        <TextField id="name" value={this.props.profileData.name}
                                                   disabled={!this.state.editable}
                                                   variant="outlined"
                                                   InputLabelProps={{
                                                       style: {
                                                           // fontWeight: "bold",

                                                       },
                                                       shrink: true,
                                                   }}
                                                   InputProps={{
                                                       style: {
                                                           direction: "rtl",
                                                       },
                                                   }}
                                                   label={
                                                       <Typography
                                                           style={{
                                                               fontFamily: 'Nika',
                                                               fontSize: "large",
                                                               marginTop: "-7px",

                                                           }}
                                                       >
                                                           نام و نام خانوادگی
                                                       </Typography>
                                                   }


                                                   fullWidth
                                                   onChange={(e) => this.inputOnChangeHandler(e, "name")}/>
                                    </Grid>

                                    <Grid item md={4} className="textfield-container">

                                        <TextField id="national-code"

                                                   label={
                                                       <Typography
                                                           style={{
                                                               fontFamily: 'Nika',
                                                               fontSize: "large",
                                                               marginTop: "-7px",

                                                           }}
                                                       >
                                                           کد ملی
                                                       </Typography>
                                                   }
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

                            <Grid container item md={12} className="form-content" spacing={2}>
                                <Grid container item md={12} spacing={2}>
                                    <Grid container item md={3} spacing={2}>
                                        <Grid item style={{marginBottom: "5px"}}
                                              className="textfield-container">
                                            <TextField id="state" value={this.props.profileData.state}

                                                       label={
                                                           <Typography
                                                               style={{
                                                                   fontFamily: 'Nika',
                                                                   fontSize: "large",
                                                                   marginTop: "-7px",

                                                               }}
                                                           >
                                                               استان
                                                           </Typography>
                                                       }
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

                                        <Grid item className="textfield-container">
                                            <TextField value={this.props.profileData.postalCode} id="postal-code"

                                                       label={
                                                           <Typography
                                                               style={{
                                                                   fontFamily: 'Nika',
                                                                   fontSize: "large",
                                                                   marginTop: "-7px",

                                                               }}
                                                           >
                                                               کد پستی
                                                           </Typography>
                                                       }
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
                                    <Grid container item md={3} spacing={2}>
                                        <Grid item md={12} className="textfield-container">

                                            <TextField value={this.props.profileData.city} id="city"

                                                       label={
                                                           <Typography
                                                               style={{
                                                                   fontFamily: 'Nika',
                                                                   fontSize: "large",
                                                                   marginTop: "-7px",

                                                               }}
                                                           >
                                                               شهر
                                                           </Typography>
                                                       }
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

                                        <Grid item md={12} className="textfield-container">

                                            <TextField value={this.props.profileData.telephone} id="telephone"

                                                       label={
                                                           <Typography
                                                               style={{
                                                                   fontFamily: 'Nika',
                                                                   fontSize: "large",
                                                                   marginTop: "-7px",

                                                               }}
                                                           >
                                                               تلفن
                                                           </Typography>
                                                       }
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
                                    <Grid container item md={6} className="textfield-container">

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

                                                   label={
                                                       <Typography
                                                           style={{
                                                               fontFamily: 'Nika',
                                                               fontSize: "large",
                                                               marginTop: "-7px",

                                                           }}
                                                       >
                                                           آدرس
                                                       </Typography>
                                                   }
                                                   rowsMax="4"
                                                   disabled={!this.state.editable}
                                                   onChange={(e) => this.inputOnChangeHandler(e, "address")}
                                        />

                                    </Grid>

                                </Grid>
                                <Grid container item spacing={2}>
                                    <Grid item md={3} className="textfield-container">
                                        <TextField id="mobile" value={this.props.profileData.mobile}

                                                   label={
                                                       <Typography
                                                           style={{
                                                               fontFamily: 'Nika',
                                                               fontSize: "large",
                                                               marginTop: "-7px",

                                                           }}
                                                       >
                                                           شماره موبایل
                                                       </Typography>
                                                   }
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

                                    <Grid container item spacing={2} md={7}>

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

                                                        label={
                                                            <Typography
                                                                style={{
                                                                    fontFamily: 'Nika',
                                                                    fontSize: "large",
                                                                    marginTop: "-7px",

                                                                }}
                                                            >
                                                                امکان دسترسی از طریق شبکه های اجتماعی
                                                            </Typography>
                                                        }
                                                    />
                                                </FormGroup>
                                            </FormControl>
                                        </ButtonGroup>


                                    </Grid>


                                </Grid>
                            </Grid>

                            <Grid container item md={12} className="form-content" spacing={2}>
                                <Grid container item spacing={2}>
                                    <Grid item sm={4} className="textfield-container">
                                        <TextField value={this.props.profileData.lastLicenseNumber}

                                                   label={
                                                       <Typography
                                                           style={{
                                                               fontFamily: 'Nika',
                                                               fontSize: "large",
                                                               marginTop: "-7px",

                                                           }}
                                                       >
                                                           شماره آخرین مجوز
                                                       </Typography>
                                                   }
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


                                    <Grid item md={4} className="textfield-container">

                                        <TextField value={this.props.profileData.lastLicenseValidityDate}

                                                   label={
                                                       <Typography
                                                           style={{
                                                               fontFamily: 'Nika',
                                                               fontSize: "large",
                                                               marginTop: "-7px",

                                                           }}
                                                       >
                                                           تاریخ اعتبار آخرین مجوز
                                                       </Typography>
                                                   }
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

                                    <Grid item md={4} className="textfield-container">
                                        <TextField value={this.props.profileData.registerNumber}

                                                   label={
                                                       <Typography
                                                           style={{
                                                               fontFamily: 'Nika',
                                                               fontSize: "large",
                                                               marginTop: "-7px",

                                                           }}
                                                       >
                                                           شماره ثبت
                                                       </Typography>
                                                   }
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

                                </Grid>
                                <Grid container item spacing={2}>
                                    <Grid item md={6} className="textfield-container">

                                        <TextField id="manager" value={this.props.profileData.manager}

                                                   label={
                                                       <Typography
                                                           style={{
                                                               fontFamily: 'Nika',
                                                               fontSize: "large",
                                                               marginTop: "-7px",

                                                           }}
                                                       >
                                                           مدیر
                                                       </Typography>
                                                   }

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
                   <Button variant="contained" color="secondary" disabled={!this.state.editable}
                            onClick={() => {
                                this.setState({
                                    editable: false,
                                });
                                this.props.onPostProfile(this.props.profileData)
                            }}>ارسال</Button>
                    <Button variant="contained" disabled={this.state.editable}
                            style={{marginLeft: "5px"}}
                            onClick={() => this.setState({editable: true})}>ویرایش</Button>


                </div>
            );
        } else {

            form = <Spinner/>;
        }

        return (
            <div>
                {form}
            </div>
        );
    }
}


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


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export default Profile;