import React from "react";
import Code1 from "../images/code1.png";
import Code2 from "../images/code2.png";
import Code3 from "../images/code 3.png";
import Code4 from "../images/code 4.png";
import Code5 from "../images/code 5.png";
import Code6 from "../images/code 6.png";
import Code7 from "../images/code 7.png";
import Code8 from "../images/Screenshot (337).png";
import Code9 from "../images/Screenshot (338).png";

export default function MyCodes() {
  return (
    <div className="container">
    <h3 className='text-dark mt_100 mb-4'>نمونه کدنویسی</h3>
    <hr/> 
      <div className="ScrollerImg">
        <div className="C_Scroll">
          <img src={Code1} className="ImgInScroll" />
          <div className="FontMyCode">کد نویسی تمیز و مینیمال</div>

        </div>
        <div className="C_Scroll">
            <img src={Code2} className="ImgInScroll" />
            <div className="FontMyCode">کامنت گذاری در تمام قسمت ها</div>
        </div>{" "}
        <div className="C_Scroll">
          <img src={Code3} className="ImgInScroll" />
          <div className="FontMyCode">ساختار دقیق</div>

        </div>{" "}
        <div className="C_Scroll">
          <img src={Code4} className="ImgInScroll" />
          <div className="FontMyCode">کاستومایز کردن فرم ها و بخش های خاص</div>

        </div>{" "}
        <div className="C_Scroll">
          <img src={Code5} className="ImgInScroll" />
          <div className="FontMyCode">پیاده سازی هرچیز مطابق نیاز کارفرما</div>
        </div>{" "}
        <div className="C_Scroll">
          <img src={Code6} className="ImgInScroll" />
          <div className="FontMyCodeLast">الگوریتم نویسی</div>
        </div>
        <div className="C_Scroll">
          <img src={Code7} className="ImgInScroll" />
          <div className="FontMyCodeFirst">برای شرایط خاص</div>
        </div>{" "}
        <div className="C_Scroll">
          <img src={Code8} className="ImgInScroll" />
          <div className="FontMyCode">یو ای دقیق</div>
        </div>{" "}
        <div className="C_Scroll">
          <img src={Code9} className="ImgInScroll" />
          <div className="FontMyCode">دیزاین کاملا دقیق با فیگما</div>
        </div>{" "}
      </div>
    </div>
  );
}
