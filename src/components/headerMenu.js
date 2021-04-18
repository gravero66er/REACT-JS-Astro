import React, { useState } from "react";
import { Link } from "react-scroll";
import Modal from "./modal";
import emailjs from "emailjs-com";

function HeaderMenu() {
  const [modalActive, setModalActive] = useState(false);
  const settings = {
    spy: true,
    smooth: true,
    offset: -20,
    duration: 800,
  };


  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kxklvsw",
        "template_jhx9r68",
        e.target,
        "user_uoInagAAwGd2NvwDsvO2n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <div className="header__menu">
        <Link activeсlass="active" to="about" {...settings}>
          <div className="menu__item">Обо мне</div>
        </Link>
        <Link activeсlass="active" to="services" {...settings}>
          <div className="menu__item">Услуги</div>
        </Link>
        <Link activeсlass="active" to="feedback" {...settings}>
          <div className="menu__item">Отзывы</div>
        </Link>
        <div className="menu__item" onClick={() => setModalActive(true)}>
          Контакты
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="modal__wrapper">
          <div className="modal__title">Контакты</div>
          <div className="modal__text">
            Вы можете связаться со мной удобным для вас способом:
          </div>
          <ul>
            <li className="modal__wu">+7 (904) 985-76-50</li>
            <li className="modal__phone">+7 (932) 613-93-98</li>
            <li></li>
          </ul>
          <div className="modal__text">
            Вы также можете оставить заявку на обратную связь:
          </div>
          <form className="modal__form" onSubmit={sendEmail}>
            <input
              type="text"
              className="modal__input"
              name="name"
              placeholder="Имя"
            />
            <input
              type="tel"
              className="modal__input"
              name="phone"
              placeholder="Телефон"
            />
            <input
              type="text"
              className="modal__input"
              name="message"
              placeholder="Ваш вопрос"
            />
            <button type="submit" onClick={() => setModalActive(false)}>Отправить</button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default HeaderMenu;
