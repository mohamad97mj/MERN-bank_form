import React, {Component} from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './Profile.module.css';
import axios from 'axios';
import "./Profile.css";
import $ from "jquery";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import * as actions from '../../../api/index';
import {connect} from 'react-redux';
import {getProfile} from "../../../api/index";


class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editable : false,
        }
    }

    componentDidUpdate  = (prevProps, prevState, snapshot) => {


        if (this.props.profileData !== null){
            this.props.onGetProfile({username : this.props.myUsername});


            this.updateFields();
        }
    };

    updateFields = () => {

        $("#name").val(this.props.profileData.name);
        $("#national-code").val(this.props.profileData.nationalCode);
        $("#state").val(this.props.profileData.state);
        $("#city").val(this.props.profileData.city);
        $("#address").val(this.props.profileData.address);
        $("#postal-code").val(this.props.profileData.postalCode);
        $("#telephone").val(this.props.profileData.telephone);
        $("#last-license-number").val(this.props.profileData.lastLicenseNumber);
        $("#last-license-validity-date").val(this.props.profileData.lastLicenseValidityDate);
        $("#register-number").val(this.props.profileData.registerNumber);
        $("#manager").val(this.props.profileData.manager);

    };

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

     onChangeHandler = (event) => {
        const cities = event.target.value;
        const _city = document.getElementById("city");
        _city.options.length = 0;
        if(cities != "") {
            const arr = cities.split(",");
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] != "") {
                    _city.options[_city.options.length]=new Option(arr[i],arr[i]);
                }
            }
        }
    };

    render() {


        let form = (
            <Form onSubmit={this.submitHandler}>
                <Form.Group as={Row} noGutters="true">
                    <Form.Label column sm="4">
                        نام و نام خانوادگی
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control id="name" disabled={!this.state.editable}/>
                    </Col>

                </Form.Group>

                <Form.Group as={Row} noGutters="true">
                    <Form.Label column sm="4">
                        کد ملی
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control id="national-code" disabled={!this.state.editable}/>
                    </Col>

                </Form.Group>

                <Form.Group as={Row} noGutters="true">

                    <Form.Label column sm="2">
                        استان
                    </Form.Label>


                    <Col sm="4">
                        <Form.Control id="state" disabled={!this.state.editable}/>
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

                    <Col sm="1"></Col>

                    <Form.Label column sm="1">
                        شهر
                    </Form.Label>

                    <Col sm="4">
                        <Form.Control id="city" disabled={!this.state.editable}/>
                        {/*<Form.Control as="select" id="city"></Form.Control>*/}
                    </Col>





                </Form.Group>

                <Form.Group as={Row} noGutters="true">
                    <Form.Label column sm="2">
                        آدرس
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control id="address" as="textarea" disabled={!this.state.editable}/>
                    </Col>

                </Form.Group>

                <Form.Group as={Row} noGutters="true">
                    <Form.Label column sm="2">
                        کد پستی
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control id="postal-code" disabled={!this.state.editable} />
                    </Col>

                    <Col sm="1"></Col>
                    <Form.Label column sm="1">
                        تلفن
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control id="telephone" disabled={!this.state.editable}/>
                    </Col>

                </Form.Group>

                <Form.Group as={Row}  noGutters="true">
                    <Form.Label column sm="5">
                        شماره آخرین مجوز
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control id="last-license-number" disabled={!this.state.editable}/>
                    </Col>

                </Form.Group>

                <Form.Group as={Row} noGutters="true">
                    <Form.Label column sm="6">
                        تاریخ اعتبار آخرین مجوز
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control id="last-license-validity-date" disabled={!this.state.editable}/>
                    </Col>

                </Form.Group>

                <Form.Group as={Row} noGutters="true">
                    <Form.Label column sm="5">
                        شماره ثبت
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control id="register-number" disabled={!this.state.editable}/>
                    </Col>

                </Form.Group>

                <Form.Group as={Row} noGutters="true">
                    <Form.Label column sm="4">
                        مدیر
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control id="manager" disabled={!this.state.editable}/>
                    </Col>

                </Form.Group>

            </Form>
        );

        if (this.props.loading) {
            form = <Spinner/>;
        }
        return (
            <div>
                <h4>اطلاعات شخصی </h4>
                <div className={styles.ProfileForm}>
                    {form}
                </div>
                <Button className="margin-top-5" disabled={!this.state.editable}>ویرایش</Button>

            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        myUsername : state.profile.username,
        profileData : state.profile.data,
        loading : state.profile.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetProfile : (userData) => dispatch(actions.getProfile(userData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export default Profile;