import React from "react";
import Title from "../components/title";
import Slider from "react-slick";

function Services() {
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
    <div className="services">
      <div className="container">
        <div className="services__wrapper">
          <div className="services__title" id="services">
            <Title name={"Услуги"} />
          </div>
          <Slider {...settings} className="services__slider">
            <div className="services__item">
              <div className="services__lead">
                Полный разбор натальной карты
              </div>
              <div className="services__text">
                Суть интерпретации гороскопа сводится к тому, чтобы
                комбинировать смысл из четырех базовых элементов астрологии
                (Планет, Знаков, Аспектов и Домов) в один сплав, который
                собственно и будет индивидуален для каждого. У этих элементов
                разная суть и роль.
              </div>
              <div className="services__price">3 000 RUR</div>
            </div>
            <div className="services__item">
              <div className="services__lead">Детская карта</div>
              <div className="services__text">
                Детский гороскоп является символической картой, которая
                раскрывает и помогает лучше понять физические, эмоциональные и
                интеллектуальные особенности и потребности конкретного ребенка.
                Ведь очень важно позволить ребенку оставаться тем, кто он есть
                на самом деле, давая возможность проявиться заложенным в нём
                талантам и способностям.
              </div>
              <div className="services__price">3 000 RUR</div>
            </div>
            <div className="services__item">
              <div className="services__lead">Совместимость</div>
              <div className="services__text">
                Гороскоп совместимости может стать хорошим подспорьем в
                отношениях пары. Это не значит, что перспективы романтического
                союза зависят от процента совместимости — человеческий фактор
                исключать нельзя. Однако зная влияние планет на нашу жизнь,
                особенности личности и характера, можно избежать многих
                подводных камней и сделать вашу сердечную связь еще крепче.
              </div>
              <div className="services__price">5 000 RUR</div>
            </div>
            <div className="services__item">
              <div className="services__lead">Гороскоп переезда</div>
              <div className="services__text">
                При переезде меняется событийный ряд, что делает Локальную карту
                важной частью астрологического анализа. Если Вы проживаете не в
                том городе, в котором родились или часто путешествуете —
                Гороскоп переезда является незаменимым помощником в решении самых
                важных вопросов.
              </div>
              <div className="services__price">2 500 RUR</div>
            </div>
            <div className="services__item">
              <div className="services__lead">Подбор профессии для ребенка</div>
              <div className="services__text">
                Выбор профессии относится к одному из самых важных жизненных
                решений ребенка. Он должен определить для себя не только
                основное занятие, но и будущее материальное благополучие, свой
                круг общения и статус.
              </div>
              <div className="services__price">2 000 RUR</div>
            </div>
            <div className="services__item">
              <div className="services__lead">Подбор удачной даты события</div>
              <div className="services__text">
                Каждому из нас хочется знать, какой из предстоящих дней будет
                позитивным и удачным. Если вы заранее будет знать благоприятные
                дни, то вам с легкостью удастся повысить шансы на успех в любой
                из сфер жизни.
              </div>
              <div className="services__price">1 500 RUR</div>
            </div>
            <div className="services__item">
              <div className="services__lead">Соляр</div>
              <div className="services__text">
                Солярный гороскоп или метод Соляра (Солнечных возвращений)
                позволяет рассчитать потенциал значимых событий, которые могут
                произойти в течении солнечного года, который берет свое начала,
                со дня рождения.
              </div>
              <div className="services__price">2 000 RUR</div>
            </div>
            <div className="services__item">
              <div className="services__lead">Формула души</div>
              <div className="services__text">
                Используя формулу души, можно понять, какие трудности ожидают
                человека, что ему нужно изменить в себе и как лучше это сделать.
                В нашей статье мы разберем основные термины данной формулы и
                подробно расскажем о ее значении.
              </div>
              <div className="services__price">2 500 RUR</div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Services;
