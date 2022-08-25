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
              
بنده سپهر خادمی حدودا 4 سال هست که با زبان های مختلف (بیشتر زبان های سمت فرانت طراحی سایت و ساخت بازی های رایانه ای) برنامه نویسی انجام میدم و همچنین به زبان انگلیسی مسلط ام و تمام دوره های اموزشی رو از سایت های خارجی گذروندم همچنین به مدت یک سال در شرکت خارجی گراب 24 و یک سال در شرکت رایین به عنوان 
برنامه نویس طراحی فرانت سایت مشغول به کار بودم. افتخار من این نیست که پروژه هارو با موفقیت به پایان برسونم افتخارم در برنامه نویسی این است که به بهترین روش ممکن مشکلات رو برطرف کنم و به تمیز ترین شکل ممکن کد نویسی هارو انجام بدم تا برای بقیه برنامه نویس ها قابل فهم باشد و در تمامی قسمت های پروژه کامنت گذاری به عنوان یک وظیفه اخلاقی قرار می گیرد:) 
لینک نمونه پروژه انجام شده <a className="Link" href="https://artor.net" target="_blank">wwww.artor.net</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
