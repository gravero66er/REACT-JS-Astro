import React from "react";
import Title from "../components/title";

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="about__title" id="about">
          <Title name={"Обо мне"} />
        </div>
        <div className="about__wrapper">
          <div className="about__img" />
          <div className="about__info">
            <div className="about__lead">ИРИНА ПАНЧЕНКО</div>
            <div className="about__text">
              Я астролог западного направления в астрологии. Мой опыт — сотни
              консультаций и огромное количество положительных отзывов.
              <br />
              <br />
              Мои учителя:
              <ul>
                <li>- А. А. Астрогор</li>
                <li>- Е. Дятлова</li>
                <li>- Т. Легасова</li>
                <li>- Т. Юдина</li>
                <li>- Т. Янская</li>
                <li>и многие другие</li>
              </ul>
              Для быстрого решения сложных вопросов и лучшего понимания себя и
              своих близких, вы можете обратиться ко мне за консультацией.
              <br />
              <br />
              Моя цель помоч людям стать успешными и счастливыми.
            </div>
          </div>
        </div>
        <div className="patterns__top"></div>
        <div className="patterns__bottom"></div>
      </div>
    </div>
  );
}

export default About;
