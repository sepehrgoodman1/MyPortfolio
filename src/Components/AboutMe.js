import React from "react";
import myPic from "../images/Sepehr.jpg";

function AboutMe() {
  return (
    <div className="container my-5">
      <div className="row info-aboutMe">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center ">
          <img src={myPic} className="img-thumbnail rounded-circle myPic" />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
          <div className="text-center">
            <h2>درباره من</h2>
            <p className="myInfo pt-4">
              سلام من سپهر خادمی هستم، حدودا 7 ماه
              در شرکت خارجی گراب و 8 ماه در شرکت رایین به عنوان برنامه نویس <span className="bold">html css, Bootstrap, java script , React js, Next Js</span> مشغول به کار بودم بزرگترین پروژه ای که انجام دادم پروژه 
                 یارت گالری بود که فاز اول پروژه نزدیک به 4 ماه طول کشید و با موفقیت تمام قسمت های پروژه ران شد  <a href="https://raeen-art-gallery78.vercel.app/" className="link" target="_blank">لینک پروژه</a> و اگر به کدنویسی های این پروژه دقت کنید متوجه خواهید شد که به تمیز ترین شکل ممکن کد نویسی انجام شده است <a href="https://github.com/sepehrgoodman1/Gallery-New-Project" className="link" target="_blank">لینک سورس کد</a>  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
