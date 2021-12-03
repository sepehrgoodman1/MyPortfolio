import './App.css';
import Logo from './images/logo.png'
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import SiteDesign from './Components/SiteDesign';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ReactPizza from './images/React-Pizza.jpg' 
import AmazonClone from './images/Amazon-clone.jpg'
import ReactPorfolio from './images/React-Portfolio.jpg'
import FastFood from './images/FastFood.jpg'
import TechWeb from './images/technologyWebSite.jpg'
import Webesign from './images/technologyWebSite2.jpg'
import Onsen from './images/Onsen-ui-js.jpg'
import PageSaver from './images/pagesaver.jpg'
import ThisSite from './images/this-Site.jpg'
import Flayer1 from './images/flayer1.jpg'
import Flayer11 from './images/flayer11.jpg'
import Flayer2 from './images/flayer2.jpg'
import Flayer22 from './images/flayer22.jpg'
import Flayer3 from './images/flayer3.jpg'
import Flayer33 from './images/flayer33.jpg'
import Flayer4 from './images/flayer4.jpg'
import Flayer44 from './images/flayer44.jpg'
import Flayer5 from './images/flayer5.jpg'
import Flayer55 from './images/flayer55.jpg'
import Flayer6 from './images/flayer6.jpg'
import Flayer66 from './images/flayer66.jpg'
import Flayer7 from './images/flayer7.jpg'
import Flayer77 from './images/flayer77.jpg'
import Flayer8 from './images/flayer8.jpg'
import Flayer88 from './images/flayer88.jpg'
import Flayer9 from './images/flayer9.jpg'
import Flayer99 from './images/flayer99.jpg'
import FlayerA from './images/flayerA.jpg'
import FlayerAA from './images/flayerAA.jpg'
import FlayerB from './images/flayerB.jpg'
import FlayerBB from './images/flayerBB.jpg'
import G1 from './images/g1.jpg'
import G2 from './images/g2.jpg'
import G3 from './images/g3.jpg'
import G4 from './images/g4.jpg'
import G5 from './images/g5.jpg'
import G6 from './images/g6.jpg'
import G7 from './images/g7.jpg'
import G8 from './images/g8.jpg'
import G9 from './images/g9.jpg'
import G10 from './images/g10.jpg'
import G11 from './images/g11.jpg'
import G12 from './images/g12.jpg'
import G13 from './images/g13.jpg'
import G14 from './images/g14.jpg'
import G15 from './images/g15.jpg'
import G16 from './images/g16.jpg'
import mobile from './images/Grub-MobileWeb.jpg'

function App() {
  const ListWebDesign =[
    {
      text:'طراحی سایت رستورانی با React js ',
      link:'https://github.com/sepehrgoodman1/React-Pizza-Website',
      img:ReactPizza
    },
    {
      text:'طراحی سایت مشابه امازون با React js',
      link:'https://github.com/sepehrgoodman1/React_Amazon_clone',
      img:AmazonClone
    },
    {
      text:'طراحی سایت پرتفولیو با React Js, Bootstrap 5',
      link:'https://github.com/sepehrgoodman1/React_Bootstrap_Portfolio',
      img:ReactPorfolio
    },
    {
      text:'طراحی سایت فست فودی با Html Css, Java Script ',
      link:'https://github.com/sepehrgoodman1/Restaurant-Design',
      img:FastFood
    },
    {
      text:' طراحی سایت درباره برنامه نویسی با Bootstrap,Java Script',
      link:'https://github.com/sepehrgoodman1/Design-a-website-Using-Bootstrap-5',
      img:TechWeb
    },
    {
      text:'طراحی سایت درباره تکنولوژی با Html Css, Java Script',
      link:'https://github.com/sepehrgoodman1/Html-Css-Js-Technology-Website',
      img:Webesign
    },
    {
      text:'Design Mobile App Using Onsen Ui & Java Script',
      link:'https://github.com/sepehrgoodman1/Pizza-App-Using-onsen-Ui-js',
      img:Onsen
    },
    {
      text:'Design Mobile App Using Onsen Ui & Jquery',
      link:'https://github.com/sepehrgoodman1/Mobile-App-Using-Jquery-And-Onsen-Ui',
      img:Onsen
    },
    {
      text:'لینک گیت هاب همین سایت (React js , Bootstrap 5) ',
      link:'https://github.com/sepehrgoodman1/React-Pizza-Website',
      img:ThisSite
    },
    {
      text:'Design Chrome Extecsion for Saving Pages',
      link:'https://github.com/sepehrgoodman1/Chrome-Extension_Page-sever',
      img:PageSaver
    },
    {
      text:'Design Mobile Web Application With Adobe Xd (Use Vpn For Opening Link)',
      link:'https://xd.adobe.com/view/d257b072-6313-4a3a-82c9-dba0c7a3fa21-8704/',
      img:mobile
    },
  ]
  const GraphicDesign = [
    {
      text:'Flayer Design Front',
      link:null,
      img:Flayer1
    },
    {
      text:'Flayer Design Back',
      link:null,
      img:Flayer11
    },
    {
      text:'Flayer Design Front',
      link:null,
      img:Flayer2
    },
    {
      text:'Flayer Design Back',
      link:null,
      img:Flayer22
    },
    {
      text:'Flayer Design Front',
      link:null,
      img:Flayer3
    },
    {
      text:'Flayer Design Back',
      link:null,
      img:Flayer33
    },
    {
      text:'Flayer Design Front',
      link:null,
      img:Flayer4
    },
    {
      text:'Flayer Design Back',
      link:null,
      img:Flayer44
    },
    {
      text:'Flayer Design Front',
      link:null,
      img:Flayer5
    },
    {
      text:'Flayer Design Back',
      link:null,
      img:Flayer55
    },
    {
      text:'Flayer Design Front',
      link:null,
      img:Flayer6
    },
    {
      text:'Flayer Design Back',
      link:null,
      img:Flayer66
    },
    {
      text:'Flayer Design Front',
      link:null,
      img:Flayer7
    },
    {
      text:'Flayer Design Back',
      link:null,
      img:Flayer77
    },
    {
      text:'Flayer Design Front',
      link:null,
      img:Flayer8
    },
    {
      text:'Flayer Design Back',
      link:null,
      img:Flayer88
    },
    {
      text:'Photoshop Design',
      link:null,
      img:Flayer9
    },
    {
      text:'Photoshop Design',
      link:null,
      img:Flayer99
    },
    {
      text:'Digital Artist',
      link:null,
      img:FlayerA
    },
    {
      text:'Digital Artist',
      link:null,
      img:FlayerAA
    },
    {
      text:'Photoshop Design',
      link:null,
      img:FlayerB
    },
    {
      text:'Photoshop Design',
      link:null,
      img:FlayerBB
    },
  ]
  const GameDev = [
    {
      text:'بازی انلاین شوتر سوم شخص انلاین (منتشر نشده)',
      link:'https://www.youtube.com/watch?v=SVE02wfvM1k',
      img:G15
    },
    {
      text:'بازی انلاین شوتر سوم شخص انلاین (منتشر نشده)',
      link:'https://www.youtube.com/watch?v=SVE02wfvM1k',
      img:G16
    },
    {
      text:'بازی ارتش مینیون ها',
      link:'https://cafebazaar.ir/app/com.SkyGames.ArmyOfMinions',
      img:G1
    },
    {
      text:'بازی ارتش مینیون ها',
      link:'https://cafebazaar.ir/app/com.SkyGames.ArmyOfMinions',
      img:G2
    },
    {
      text:'بازی ارتش مینیون ها',
      link:'https://cafebazaar.ir/app/com.SkyGames.ArmyOfMinions',
      img:G3
    },
    {
      text:'بازی ارتش مینیون ها',
      link:'https://cafebazaar.ir/app/com.SkyGames.ArmyOfMinions',
      img:G4
    },
    {
      text:'بازی ارتش مینیون ها',
      link:'https://cafebazaar.ir/app/com.SkyGames.ArmyOfMinions',
      img:G5
    },
    {
      text:'بازی ارتش مینیون ها',
      link:'https://cafebazaar.ir/app/com.SkyGames.ArmyOfMinions',
      img:G6
    },
    {
      text:'بازی نبرد در خیابان',
      link:'https://cafebazaar.ir/app/com.SkyGames.BattleOnTheStreet',
      img:G7
    },
    {
      text:'بازی نبرد در خیابان',
      link:'https://cafebazaar.ir/app/com.SkyGames.BattleOnTheStreet',
      img:G8
    },
    {
      text:'بازی جک گنجیشکه',
      link:'https://cafebazaar.ir/app/com.SkyGames.JackSparrowAndMagicBeans',
      img:G9
    },
    {
      text:'بازی جک گنحیشکه',
      link:'https://cafebazaar.ir/app/com.SkyGames.JackSparrowAndMagicBeans',
      img:G10
    },
    {
      text:'بازی جک گنجیشکه',
      link:'https://cafebazaar.ir/app/com.SkyGames.JackSparrowAndMagicBeans',
      img:G11
    },
    {
      text:'بازی طلا دزد',
      link:'https://cafebazaar.ir/app/com.skygames.goldrobber2',
      img:G12
    },
    {
      text:'بازی طلا دزد',
      link:'https://cafebazaar.ir/app/com.skygames.goldrobber2',
      img:G13
    },
    {
      text:'بازی طلا دزد',
      link:'https://cafebazaar.ir/app/com.skygames.goldrobber2',
      img:G14
    },
  ]
  return (
    <Router>
      <Navbar Logo={Logo}/>
      <div className="App">
        <Routes>
          <Route path="/Graphic"  element={<><SiteDesign MyList={GraphicDesign} 
          Title={'طراحی های گرافیکی برای شرکت خارجی grub24'} /> </> } />
        </Routes>
        <Routes>
          <Route path="/GameDev"  element={<><SiteDesign MyList={GameDev} Title={'بازی های کامپیوتری'} /> </> } />
        </Routes>
        <Routes>
          <Route path="/DesignWeb"  element={<><SiteDesign MyList={ListWebDesign} Title={'سایت های طراحی شده'} /> </> } />
        </Routes>
        <Routes>
          <Route path="/"  element={<> <Carousel /> <AboutMe/> <Skills/>
          <SiteDesign MyList={ListWebDesign} Title={'سایت های طراحی شده'}/> </> } />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
