import React, { useState } from 'react';
import './App.scss';
import { Carousel } from './js/Components/Carousel/carousel';
import { GalleryCarousel } from './js/Components/GalleryCarousel/gallery-carousel';
import { Input } from './js/Components/Input/input';
import { Menu } from './js/Components/Menu/menu';
import { Wheel } from './js/Components/Wheel/wheel';

function App() {
  const [menu, setMenu] = useState(false);
  function menuClick(value) {
    // if(!document.getElementsByClassName("menu-bar-transform"))
    //   document.getElementsByClassName('.menu-bar').className += " menu-bar-transform";
    // else{
    //   document.getElementsByClassName('.menu-bar').className += "";
    // }
    setMenu(value);
  }
  return (
    <div className="App">
      <header>
        <div className="menu-icon" onClick={() => menuClick(true)}>
          <div className="menu-icon-parent-line">
            <div className="menu-icon-line"></div>
          </div>
          <div className="menu-icon-parent-line">
            <div className="menu-icon-line"></div>
          </div>          <div className="menu-icon-parent-line">
            <div className="menu-icon-line"></div>
          </div>
        </div>
      </header>
      {
        menu ? <Menu menu={menu} menuClick={menuClick} /> : null
      }
      <Carousel></Carousel>
      <div style={{width: "100%", height: "30px"}}>

      </div>
      <Input></Input>
      <div style={{width: "100%", height: "30px"}}>

      </div>
      <GalleryCarousel></GalleryCarousel>
      <div style={{width: "100%", height: "30px"}}>
      </div>
      <Wheel></Wheel> 
      <div style={{width: "100%", height: "30px"}}>
      </div>
      {/* <MyCarousel></MyCarousel> */}
    </div>
  );
}

export default App;
