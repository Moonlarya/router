import React, { Component } from "react";
import "./Photos.scss";
import illustration1 from "../../assets/images/1.png";
import illustration2 from "../../assets/images/2.jpg";
import illustration3 from "../../assets/images/3.jpg";
import illustration4 from "../../assets/images/4.jpg";
import illustration5 from "../../assets/images/5.jpg";
import illustration6 from "../../assets/images/6.jpg";
import illustration7 from "../../assets/images/7.jpg";
import illustration8 from "../../assets/images/8.jpg";
import illustration9 from "../../assets/images/9.jpg";
import illustration10 from "../../assets/images/10.jpg";
import illustration11 from "../../assets/images/11.jpg";
import illustration12 from "../../assets/images/12.jpg";
import illustration13 from "../../assets/images/13.jpg";
import illustration14 from "../../assets/images/14.jpg";

class Photos extends Component {
  render() {
    return (
      <div className="photos">
        <div className="photos_post">
          <div className="photos_overlay">
            "Намалюй будь ласка мою дівчинку на поні і щоб вона давала "п'ять"
            котику з аніме, що також стоїть на поняшці. І щоб все так
            різнокольорово та райдужно. Будь ласочка. О, ти зрозуміла! Дякую!"
          </div>
          <img src={illustration1}></img>
        </div>
        <div className="photos_post">
          <div className="photos_overlay"></div>
          <img src={illustration2}></img>
          <p></p>
        </div>
        <div className="photos_post">
          <div className="photos_overlay"></div>
          <img src={illustration3}></img>
        </div>
        <div className="photos_post">
          <img src={illustration4}></img>
        </div>
        <div className="photos_post">
          <img src={illustration5}></img>
        </div>
        <div className="photos_post">
          <img src={illustration6}></img>
        </div>
        <div className="photos_post">
          <img src={illustration7}></img>
        </div>
        <div className="photos_post">
          <img src={illustration8}></img>
        </div>
        <div className="photos_post">
          <img src={illustration9}></img>
        </div>
        <div className="photos_post">
          <img src={illustration10}></img>
        </div>
        <div className="photos_post">
          <img src={illustration11}></img>
        </div>
        <div className="photos_post">
          <img src={illustration12}></img>
        </div>
        <div className="photos_post">
          <img src={illustration13}></img>
        </div>
        <div className="photos_post">
          <img src={illustration14}></img>
        </div>
      </div>
    );
  }
}

export default Photos;
