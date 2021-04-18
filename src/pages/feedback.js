import React from "react";
import Slider from "react-slick";
import Title from "../components/title";

function Feedback() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="feedback">
      <div className="container">
        <div className="feedback__wrapper">
          <div className="feedback__title" id="feedback">
            <Title name={"Отзывы"} />
          </div>
          <Slider {...settings} className="feedback__slider">
            <div className="feedback__item">
              <div className="feedback__lead">Марина</div>
              <div className="feedback__text">
                Ирина, спасибо за расклад ваш про нашу дочку. Я долго отходила
                от сказанного. Вроде этого и боялась, но сама вижу все
                предрасположенности, что вы спрогнозировали. Предупрежден —
                вооружен. Очень всё схоже с темпераментом и характером, что вы
                сказали. Спасибо ещё раз.
              </div>
            </div>
            <div className="feedback__item">
              <div className="feedback__lead">Ирина</div>
              <div className="feedback__text">
                Я в восторге. Очень во время, я узнаю свою дочь. Заканчиваем с
                медалью, и подаём документы в город на севере. Очень переживаю.
                Мамина дочь, но очень самостоятельная и целеустремленная.
                Прослушала и на душе спокойней стало. Спасибо вам.
              </div>
            </div>
            <div className="feedback__item">
              <div className="feedback__lead">Анна</div>
              <div className="feedback__text">
                Ирина, добрый вечер! Хочется сказать вам большое СПАСИБО за
                проделанную работу! Честно сказать я и подумать не могла, что
                получу такой развёрнутый и обширный материал. Безумно интересно
                всё то, что вы рассказали по натальной карте моей дочери.
                Какие-то аспекты у неё уже ярко выражены. Здорово что теперь у
                меня есть очень полезная пища для размышлений и наблюдений.
              </div>
            </div>
            <div className="feedback__item">
              <div className="feedback__lead">Мария</div>
              <div className="feedback__text">
                Ирина, добрый день! Я если честно, в хорошем шоке нахожусь,
                реально факты из моего детства и по сей день — все в точку! И
                реально у меня уже года 2 в голове вопрос себя реализовать или
                быть семейной дамой... Проблемы из детства и в отношениях с
                мамой тоже сейчас решаю. Вы очень и очень правы! Сейчас буду
                вносить коррективы, опираясь на вашу работу. У меня столько
                вопросов появилось, что дальше делать.
              </div>
            </div>
            <div className="feedback__item">
              <div className="feedback__lead">Екатерина</div>
              <div className="feedback__text">
                Здравствуйте! Спасибо вам большое за столь интересную
                информацию. Вот честно сказать, именно о гимнастике и фигурном
                катании у нас с мужем возникали мысли относительно Анисии.
                Сегодня ей исполнилось 3 года. Она у нас очень любит всячески
                крутиться на ногах вокруг себя, прыгать. И да, к музыке тоже у
                неё проявляется интерес. Вот книжки читать, ну никак я не могу
                её завлечь, начинаешь ей читать, и она буквально через минуту
                захлопывает книгу и отвлекается на что другое.
              </div>
            </div>
          </Slider>
        </div>
        <div className="patterns__top"></div>
        <div className="patterns__bottom"></div>
      </div>
    </div>
  );
}

export default Feedback;
