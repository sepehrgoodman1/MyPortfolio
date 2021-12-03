import React from 'react'
import Slider1 from '../images/SiteDesign.jpg'
import Slider2 from '../images/gameDevSlider.jpg'
import Slider3 from '../images/graphicDesign.jpg'



export const Carousel = () => {
    return (
        <div >
            <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={Slider1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>طراحی سایت</h1>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={Slider2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>ساخت بازی های کامپیوتری</h1>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={Slider3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>طراحی های گرافیکی</h1>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}

export default Carousel

