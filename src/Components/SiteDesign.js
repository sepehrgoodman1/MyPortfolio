import React from 'react'

function SiteDesign({MyList, Title}) {
    return (
        <div className='container my-5 pt-5'>
            <h2 className='text-dark pt-5'>{Title}</h2>
            <hr/>
            <div className='row'>
                {MyList.map(List =>(
                    <div className='col-12 col-md-6 MyWorks '>
                    <div className='text-center h4 my-4'>{List.text} </div>
                    <div className='img-site m-auto text-center'>
                        <a href={List.link} target="_blank">
                            <img src={List.img} className='img-fluid img-myWorks'/>
                        </a>
                    </div>
                </div>
                 ) )}
                {/* <div className='col-12 col-md-6 MyWorks '>
                    <div className='text-center h4 my-4'>React js طراحی سایت رستورانی با </div>
                    <div className='img-site'>
                        <a href='https://github.com/sepehrgoodman1/React-Pizza-Website' target="_blank">
                            <img src={ReactPizza} className='img-fluid '/>
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 MyWorks '>
                    <div className='text-center h4 my-4'>React js طراحی سایت مشابه آمازون با </div>
                    <div className='img-site'>
                        <a href='https://github.com/sepehrgoodman1/React_Amazon_clone' target="_blank">
                            <img src={AmazonClone} className='img-fluid '/>
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 MyWorks '>
                    <div className='text-center h4 my-4'>React js, Bootstrap طراحی یک سایت پرتفولیو با </div>
                    <div className='img-site'>
                        <a href='https://github.com/sepehrgoodman1/React_Bootstrap_Portfolio' target="_blank">
                            <img src={ReactPorfolio} className='img-fluid '/>
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 MyWorks '>
                    <div className='text-center h4 my-4'>Html Css, Java Script طراحی سایت فست فودی با </div>
                    <div className='img-site'>
                        <a href='https://github.com/sepehrgoodman1/Restaurant-Design' target="_blank">
                            <img src={FastFood} className='img-fluid '/>
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 MyWorks '>
                    <div className='text-center h4 my-4'>Bootstrap,Java Script طراحی سایت درباره برنامه نویسی با </div>
                    <div className='img-site'>
                        <a href='https://github.com/sepehrgoodman1/Design-a-website-Using-Bootstrap-5' target="_blank">
                            <img src={TechWeb} className='img-fluid '/>
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 MyWorks '>
                    <div className='text-center h4 my-4'> Html Css, Java Scriptطراحی سایت درباره تکنولوژی با </div>
                    <div className='img-site'>
                        <a href='https://github.com/sepehrgoodman1/Html-Css-Js-Technology-Website' target="_blank">
                            <img src={Webesign} className='img-fluid '/>
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 MyWorks '>
                    <div className='text-center h4 my-4'>Design Mobile App Using Onsen Ui & Java Script</div>
                    <div className='img-site m-auto text-center'>
                        <a href='https://github.com/sepehrgoodman1/Pizza-App-Using-onsen-Ui-js' target="_blank">
                            <img src={Onsen} className='img-fluid '/>
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 MyWorks '>
                    <div className='text-center h4 my-4'>Design Mobile App Using Onsen Ui & Jquery</div>
                    <div className='img-site m-auto text-center'>
                        <a href='https://github.com/sepehrgoodman1/Mobile-App-Using-Jquery-And-Onsen-Ui' target="_blank">
                            <img src={Onsen} className='img-fluid '/>
                        </a>
                    </div>
                </div>
                <div className='col-12 MyWorks '>
                    <div className='text-center h4 my-4'>Design Chrome Extecsion for Saving Pages</div>
                    <div className='img-site m-auto text-center'>
                        <a href='https://github.com/sepehrgoodman1/Chrome-Extension_Page-sever' target="_blank">
                            <img src={PageSaver} className='img-fluid '/>
                        </a>
                    </div>
                </div> 
               */}
                
            </div>
            
            

        </div>
    )
}

export default SiteDesign
