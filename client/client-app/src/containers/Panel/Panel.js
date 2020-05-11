import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/UI/Header/Header.js";
import Footer from "../../components/UI/Footer/Footer.js";
import Button from "../../components/UI/CustomButtons/Button.js";
import GridContainer from "../../components/UI/Grid/GridContainer.js";
import GridItem from "../../components/UI/Grid/GridItem.js";
import HeaderLinks from "../../components/UI/Header/HeaderLinks.js";
// import NavPills from "../../components/UI/NavPills/NavPills.js";
import Parallax from "../../components/UI/Parallax/Parallax.js";
import './Panel.css';


import profile from "../../assets/img/faces/christian.jpg";

import studio1 from "../../assets/img/examples/studio-1.jpg";
import studio2 from "../../assets/img/examples/studio-2.jpg";
import studio3 from "../../assets/img/examples/studio-3.jpg";
import studio4 from "../../assets/img/examples/studio-4.jpg";
import studio5 from "../../assets/img/examples/studio-5.jpg";
import work1 from "../../assets/img/examples/olu-eletu.jpg";
import work2 from "../../assets/img/examples/clem-onojeghuo.jpg";
import work3 from "../../assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../assets/img/examples/clem-onojegaw.jpg";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import LoggedInHeaderLinks from "../../components/UI/Header/LoggedInHeaderLinks";

const useStyles = makeStyles(styles);

export default function Panel(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<LoggedInHeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("../../assets/images/tinified/panel2.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <div className={classes.description + " panel-container panel-page"}>
              <h5 style={{textAlign: "center"}}>
                بسم الله الرحمن الرحیم
              </h5>
              <br/>
              <p>

                بانک اقتصاد نوین در نظر دارد با شناخت توانایی صرافی های غیر بانکی کوچک متوسط و بزرگ موجود در
                کشور
                بخشی از نیاز خود در انجام تبادلات بین المللی را به کمک آنها انجام دهد.

              </p>
              <p>
                لذا اقدام به جمع آوری بانکی از این صرافی ها و طراحی این سایت جهت استعلام توانایی آنها نموده تا
                در
                نهایت امکان سفارش حواله ها و سایر نیازهای ارزی به آنها ممکن گردد.

              </p>
              <p>


                این سایت شامل دو پرسش نامه اصلی می باشد که اولی با نام <Nav.Link exact as={NavLink}
                                                                                 to="/profile" style={{
                display: "inline",
                margin: "0",
                padding: "0",
                textDecoration: "underline"
              }}>مشخصات صرافی</Nav.Link> در صفحه قابل مشاهده است شامل
                اطلاعات هویتی شما می باشد که خواهشمندیم اگر این اطلاعات نقصانی دارد آنرا اصلاح کرده و شماره تلفن
                همراه برای ارتباط در شبکه های اجتماعی مانند واتساپ و تلگرام و همینطور ارتباط مستقیم در اختیار
                بانک
                قرار دهید.

              </p>
              <p>
                پرسش نامه دوم که به نام <Nav.Link exact as={NavLink} to="/form" style={{
                display: "inline",
                margin: "0",
                padding: "0",
                textDecoration: "underline"
              }}>اطلاعات ارتباطات داخلی وخارجی</Nav.Link> قابل مشاهده می باشد، شامل اطلاعات حرفه ای شما
                شامل توانایی شما در ارسال و دریافت حواله بین کشورهای گوناگون و همینطور ارتباطات موثر شما شامل
                بانک
                هایی که امکان مذاکره با آنها دارید و سایر شرکای اقتصادی شما در آن کشور و نوع ارتباطات آنها
                استعلام
                شده است.
              </p>
              <p>
                در صورتی که ارتباطات شما با بیش از یک کشور می باشد یا با بیش از یک بانک ارتباط دارید یا امکان
                تعامل
                با بیش از یک فعال اقتصادی دارید می توانید با استفاده از دکمه سبز رنگ + در زیر هر قسمت اقدام به
                اضافه
                کردن اطلاعات بیشتر نمایید. و در صورت انصراف از ارسال این اطلاعات به کمک دکمه قرمز رنگ – امکان
                حذف را
                خواهید داشت.
              </p>
              <p>


                در صورتیکه نیاز به پاسخگویی هر نوع سوالی در این مورد داشتید به شماره <span
                  style={{textDecoration: "underline"}}>09027237097</span> در واتساپ یا تلگرام
                یا به شکل پیامکی درخواست داده یا به رایانامه <Nav.Link exact as={NavLink} to="/form" style={{
                display: "inline",
                margin: "0",
                padding: "0",
                textDecoration: "underline"
              }}>ma.tavallaei@enbank.ir</Nav.Link> یک رایانامه ارسال فرمایید و حتما
                نام صرافی خود را ذکر بفرمایید تا در اسرع وقت خدمت شما تماس گرفته شود.
              </p>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
