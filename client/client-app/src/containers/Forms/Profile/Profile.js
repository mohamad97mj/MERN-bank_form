import React, {Component} from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './Profile.module.css';
import "./Profile.css";
import $ from "jquery";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {connect} from 'react-redux';
import '../Form.css';
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import * as actions from "../../../api";
import Container from "react-bootstrap/Container";


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

        if (e.target.checked) {
            this.props.onChangeHandler({control: control, value: "true"});
        } else {
            this.props.onChangeHandler({control: control, value: "false"})
        }

    };

    render() {

        let form = null;

        if (this.props.profileData !== undefined) {
            form = (

                <div className="mt-5">
                    <h4>اطلاعات شخصی </h4>
                    <Form onSubmit={this.submitHandler} className="profile-form form-inner-content my-form">
                        <Container fluid className="form-content mb-2">
                            <Row noGutters={true}>
                                <Col md="7" as={Row} noGutters={true}>
                                    <Col md="3">
                                        <Form.Label>
                                            نام و نام خانوادگی:
                                        </Form.Label>

                                    </Col>
                                    <Col md="8">
                                        <Form.Control id="name" value={this.props.profileData.name}
                                                      disabled={!this.state.editable}
                                                      onChange={(e) => this.inputOnChangeHandler(e, "name")}/>
                                    </Col>
                                </Col>

                                <Col md="1"/>

                                <Col md="4" as={Row} noGutters={true}>
                                    <Col md="3">
                                        <Form.Label>
                                            کد ملی:
                                        </Form.Label>
                                    </Col>

                                    <Col md="7">
                                        <Form.Control id="national-code"
                                                      onChange={(e) => this.inputOnChangeHandler(e, "nationalCode")}
                                                      value={this.props.profileData.nationalCode}
                                                      disabled={!this.state.editable}/>
                                    </Col>
                                </Col>

                            </Row>
                        </Container>

                        <Container fluid className="form-content mb-2">
                            <Row noGutters={true}>

                                <Col as={Row} md="3" noGutters={true}>
                                    <Col as={Row} md="12" noGutters={true}>
                                        <Col md="5">
                                            <Form.Label>
                                                استان:
                                            </Form.Label>
                                        </Col>
                                        <Col md="7">
                                            <Form.Control id="state" value={this.props.profileData.state}
                                                          disabled={!this.state.editable}
                                                          onChange={(e) => this.inputOnChangeHandler(e, "state")}/>
                                            {/*<Form.Control as="select" runat="server" id="state" onChange={this.onChangeHandler.bind(this)}>*/}

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

                                            {/*</Form.Control>*/}
                                        </Col>
                                    </Col>


                                    <Col as={Row} md="12" noGutters={true}>

                                        <Col md="5">
                                            <Form.Label>
                                                کد پستی:
                                            </Form.Label>

                                        </Col>
                                        <Col md="7">
                                            <Form.Control value={this.props.profileData.postalCode} id="postal-code"
                                                          disabled={!this.state.editable}
                                                          onChange={(e) => this.inputOnChangeHandler(e, "postalCode")}

                                            />
                                        </Col>
                                    </Col>
                                </Col>
                                <Col as={Row} md="1" noGutters={true}></Col>
                                <Col as={Row} md="3" noGutters={true}>
                                    <Col as={Row} md="12" noGutters={true}>

                                        <Col md="3">
                                            <Form.Label>
                                                شهر:
                                            </Form.Label>

                                        </Col>

                                        <Col md="8">
                                            <Form.Control value={this.props.profileData.city} id="city"
                                                          disabled={!this.state.editable}
                                                          onChange={(e) => this.inputOnChangeHandler(e, "city")}
                                            />

                                            {/*<Form.Control as="select" id="city"></Form.Control>*/}
                                        </Col>

                                    </Col>

                                    <Col as={Row} md="12" noGutters={true}>

                                        <Col md="3">
                                            <Form.Label>
                                                تلفن:
                                            </Form.Label>

                                        </Col>
                                        <Col md="8">
                                            <Form.Control value={this.props.profileData.telephone} id="telephone"
                                                          disabled={!this.state.editable}
                                                          onChange={(e) => this.inputOnChangeHandler(e, "telephone")}/>

                                        </Col>

                                    </Col>
                                </Col>


                                <Col as={Row} md="5" noGutters={true}>
                                    <Col md="2">
                                        <Form.Label>
                                            آدرس:
                                        </Form.Label>

                                    </Col>
                                    <Col md="10">
                                        <Form.Control value={this.props.profileData.address} id="address" as="textarea"
                                                      rows="3" disabled={!this.state.editable}
                                                      onChange={(e) => this.inputOnChangeHandler(e, "address")}
                                        />
                                    </Col>

                                </Col>

                            </Row>
                            <Row noGutters={true}>
                                <Col as={Row} md="3" noGutters={true}>
                                    <Col md="5">
                                        <Form.Label>
                                            شماره موبایل:
                                        </Form.Label>

                                    </Col>
                                    <Col md="7">
                                        <Form.Control id="mobile" value={this.props.profileData.mobile}
                                                      disabled={!this.state.editable}
                                                      onChange={(e) => this.inputOnChangeHandler(e, "mobile")}
                                        />
                                    </Col>

                                </Col>
                                <Col md="2"/>
                                <Col as={Row} md="7" noGutters={true}>

                                    <Col md="10">
                                        <ToggleButtonGroup type="checkbox" className="mb-2"
                                                           defaultValue={this.props.profileData.socialNetworkAccess}>
                                            <Form.Check
                                                disabled={!this.state.editable}
                                                value={true}
                                                custom
                                                type="checkbox"
                                                label="امکان دسترسی از طریق شبکه های اجتماعی"
                                                name="social-check"
                                                id="social-check"
                                                onChange={(e) => this.checkInputOnChangeHandler(e, "socialNetworkAccess")}
                                            />
                                        </ToggleButtonGroup>

                                    </Col>

                                </Col>


                            </Row>
                        </Container>

                        <Container fluid className="form-content" style={{marginBottom: 0}}>
                            <Row noGutters={true} className="mb-1">
                                <Col sm="4" as={Row} noGutters={true}>
                                    <Col md="5">
                                        <Form.Label>
                                            شماره آخرین مجوز:
                                        </Form.Label>

                                    </Col>
                                    <Col md="5">
                                        <Form.Control value={this.props.profileData.lastLicenseNumber}
                                                      id="last-license-number" disabled={!this.state.editable}
                                                      onChange={(e) => this.inputOnChangeHandler(e, "lastLicenseNumber")}/>

                                    </Col>

                                </Col>


                                <Col md="5" as={Row} noGutters={true}>

                                    <Col md="5">
                                        <Form.Label>
                                            تاریخ اعتبار آخرین مجوز:
                                        </Form.Label>

                                    </Col>
                                    <Col md="5">
                                        <Form.Control value={this.props.profileData.lastLicenseValidityDate}
                                                      id="last-license-validity-date" disabled={!this.state.editable}
                                                      onChange={(e) => this.inputOnChangeHandler(e, "lastLicenseValidityDate")}/>
                                    </Col>

                                </Col>

                                <Col md="3" as={Row} noGutters={true}>
                                    <Col md="5">
                                        <Form.Label>
                                            شماره ثبت:
                                        </Form.Label>

                                    </Col>
                                    <Col md="7">
                                        <Form.Control value={this.props.profileData.registerNumber} id="register-number"
                                                      disabled={!this.state.editable}
                                                      onChange={(e) => this.inputOnChangeHandler(e, "registerNumber")}/>
                                    </Col>


                                </Col>

                            </Row>
                            <Row noGutters={true}>
                                <Col md="8" as={Row} noGutters={true}>
                                    <Col md="1">
                                        <Form.Label>
                                            مدیر:
                                        </Form.Label>

                                    </Col>
                                    <Col md="6">
                                        <Form.Control id="manager" value={this.props.profileData.manager}
                                                      disabled={!this.state.editable}
                                                      onChange={(e) => this.inputOnChangeHandler(e, "manager")}/>
                                    </Col>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                    <Button className="mt-5 submit-btn" disabled={this.state.editable}
                            onClick={() => this.setState({editable: true})}>ویرایش</Button>
                    <Button className="mt-5 ml-2  submit-btn" disabled={!this.state.editable}
                            onClick={() => {
                                this.setState({
                                    editable: false,
                                });
                                this.props.onPostProfile(this.props.profileData)
                            }}>ارسال</Button>

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