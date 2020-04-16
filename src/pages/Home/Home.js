import React, { Component } from "react";
import "./Home.scss";
import me from "../../me.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="quote">Де є любов, там є життя</h1>
        <div className="two_sides_block">
          <div className="letter">
            <p>
              <strong>Привіт C:</strong>
            </p>
            <p>
              Людинко, якщо ти читаєш цей текст, це означає що ти натрапила (або
              натрапив) на дещо <strong>важливе</strong>, чим я хочу поділитись
              з тобою.
            </p>
            <p>
              <strong>Це не просто домашка.</strong>
            </p>
            <p>
              Скоріш за все, ти знаєш мене як студентку CURSOR.
              <strong> Але</strong> це лише одна сторона медалі.
            </p>
            <p>
              Сьогодні я хочу показати тобі як можна{" "}
              <strong>обіймати на відстані</strong>. Я хочу познайомити тебе зі
              своєю творчістю.
            </p>
          </div>
          <div className="imageWrapper">
            <div className="overlay"></div>
            <img src={me} className="me" alt="me"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
