import React from 'react'

function Navbar({Logo}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark fixed-top">
                <div className="container ">
                <a className="navbar-brand logo" href="/">
                    <img  src={Logo} className='img-fluid '/>
                </a>
                <button className="navbar-toggler" type="button"
                 data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5 ">
                    <a className="nav-link  text-white px-3 mx-3 nav-list text-center" href="/Graphic">طراحی های گرافیکی</a>
                    <a className="nav-link text-white px-3 mx-3 nav-list text-center" href="/GameDev">بازی های کامپیوتری</a>
                    <a className="nav-link text-white px-3 mx-3 nav-list text-center" href="/DesignWeb">طراحی سایت</a>
                    <a className="nav-link  text-white px-3 mx-3 nav-list text-center" aria-current="page" href="/">صفحه اصلی</a>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
