import React from 'react'
import myPic from '../images/Sepehr.jpg'




function AboutMe() {
    return (
        <div className='container my-5'>
            <div className='row info-aboutMe'>
                <div className='col-12 col-md-6 d-flex justify-content-center align-items-center '>
                    <img src={myPic} className='img-thumbnail rounded-circle myPic'/>
                </div>
                <div className='col-12 col-md-6 d-flex justify-content-end align-items-center'>
                    <div className='text-center'>
                        <h2>درباره من</h2>
                        <p className='myInfo pt-4'>سلام،
                             من سپهر خادمی هستم  
                             از سال 1397 برنامه نویسی
                              رو با زبان های پایه مثل c++  شروع کردم و الان نزدیک به چهار سال
                               هست که با انواع زبان های برنامه نویسی
                               و نرم افزار 
                               های طراحی کار کردم و سابقه
                                کار کردن به عنوان گرافیست به مدت 6 ماه در شرکت خارجی grub24 رو دارم
                                  همچنین به زبان انگیسی مسلط ام و 
                                حدودا یک سال هست تمام دوره
                                 های اموزشی رو با منابع
                                 انگلیسی زبان دنبال می کنم و سابقه ی ساخت 5 بازی رایانه ای رو با زبان c# دارم و تا 
                                 الان ده تا سایت با html css, java script و react js  طراحی کردم. هدف من اینه به 
                                 عنوان برنامه نویس فرانت استخدام بشم چون
                                  این چیزی هست که من براش ساخته شدم... برنامه نویسی!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
