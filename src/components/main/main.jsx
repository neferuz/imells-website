import { useState, useEffect, useRef } from "react";
import "./main.css";
// import Facebook from "../../../public/img/facebook.png";
import Center1 from "../../../public/img/Group.svg";
import Services from "../../../public/img/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg";
import Arrow from "../../../public/img/arrow.svg";
import Services1 from "../../../public/img/Illustration (1).svg";
import Services3 from "../../../public/img/Illustration (2).svg";
import Services4 from "../../../public/img/Illustration (3).svg";
import Services5 from "../../../public/img/Illustration.svg";
import Team from "../../../public/img/Picture.svg";
import Contact from "../../../public/img/contact.png";
import Message from "../../../public/img/message.png";
import Message2 from "../../../public/img/message1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const AccordionItem = ({ number, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-number">{number}</span>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{ maxHeight: `${height}` }}
      >
        {content}
      </div>
    </div>
  );
};
const Main = () => {
  return (
    <>
      <div className="main">
        <section className="container main-services">
          <h2>Всегда вовремя, всегда рядом</h2>
          <div className="main-services-wrapper">
            <div className="services-item">
              <div className="services-item-text">
                <h2>
                  <span className="outlined-text">Такси</span>
                  {/* <span className="outlined-text">оптимизация</span> */}
                </h2>
                <h3>
                  <img className="services-img" src={Arrow} alt="sdf" />
                  Подробнее
                </h3>
              </div>
              <img src={Services1} alt="asd" />
            </div>
            <div className="services-item">
              <div className="services-item-text">
                <h2>
                  <span className="outlined-text">Доставка</span>
                  {/* <span className="outlined-text">оптимизация</span> */}
                </h2>
                <h3>
                  <img className="services-img" src={Arrow} alt="sdf" />
                  Подробнее
                </h3>
              </div>
              <img src={Services3} alt="asd" />
            </div>
          </div>
        </section>
        <section className="container main-center">
          <div className="main-center-left">
            <h2>Хочешь работать с нами?</h2>
            <p>
              Присоединяйся к нашей команде и получай удовольствие от любимой
              работы
            </p>
            <button>Просмотреть вакансии</button>
          </div>
          <div className="main-center-right">
            <img src={Center1} alt="asd" />
          </div>
        </section>
        {/* <h2 className="container main-h2">
          Case Studies
          <p>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </h2>
        <section className="container main-studies">
          <div className="main-studies-item">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <h3>
              Подробнее
              <img className="studies-img" src={Arrow} alt="sdf" />
            </h3>
          </div>
          <span></span>
          <div className="main-studies-item">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <h3>
              Подробнее
              <img className="studies-img" src={Arrow} alt="sdf" />
            </h3>
          </div>
          <span></span>
          <div className="main-studies-item">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <h3>
              Подробнее
              <img className="studies-img" src={Arrow} alt="sdf" />
            </h3>
          </div>
        </section> */}
        <h2 className="container main-h2">
        Взгляд изнутри
          <p>Рассказываем почему мы любим и рекомендуем этот сервис</p>
        </h2>
        <div className="container accordion">
          <AccordionItem
            number="01"
            title="Consultation"
            content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
          />
          <AccordionItem
            number="02"
            title="Research and Strategy Development"
            content="uring the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements"
          />
          <AccordionItem
            number="03"
            title="Implementation"
            content="uring the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements"
          />
          <AccordionItem
            number="04"
            title="Monitoring and Optimization"
            content="uring the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements"
          />
        </div>
        <h2 className="container main-h2">
          Team
          <p>
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </h2>
        <section className="container main-team">
          <div className="main-team-item">
            <div className="main-team-text">
              <img className="main-team-arrow" src={Arrow} alt="asd" />
              <img className="main-team-img" src={Team} alt="asd" />
              <h2>
                John Smith
                <br />
                <span>CEO and Founder</span>
              </h2>
            </div>
            <span className="spn"></span>
            <p>
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy
            </p>
          </div>
          <div className="main-team-item">
            <div className="main-team-text">
              <img className="main-team-arrow" src={Arrow} alt="asd" />
              <img className="main-team-img" src={Team} alt="asd" />
              <h2>
                John Smith
                <br />
                <span>CEO and Founder</span>
              </h2>
            </div>
            <span className="spn"></span>
            <p>
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy
            </p>
          </div>
          <div className="main-team-item">
            <div className="main-team-text">
              <img className="main-team-arrow" src={Arrow} alt="asd" />
              <img className="main-team-img" src={Team} alt="asd" />
              <h2>
                John Smith
                <br />
                <span>CEO and Founder</span>
              </h2>
            </div>
            <span className="spn"></span>
            <p>
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy
            </p>
          </div>
        </section>
        <h2 className="container main-h2">
        Взгляд изнутри
          <p>Рассказываем почему мы любим и рекомендуем этот сервис</p>
        </h2>
        <section className="container main-messages">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1.1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              1025: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              {" "}
              <div className="main-messages-item">
                <img
                  className="main-messages-item-img"
                  src={Message2}
                  alt="asd"
                />
                <img
                  className="main-messages-item-img2"
                  src={Message}
                  alt="asd"
                />
                <p>
                  "We have been working with Positivus for the past year and
                  have seen a significant increase in website traffic and leads
                  as a result of their efforts. The team is professional,
                  responsive, and truly cares about the success of our business.
                  We highly recommend Positivus to any company looking to grow
                  their online presence."
                </p>
                <h2>
                  John Smith <br /> <span>Marketing Director at XYZ Corp</span>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="main-messages-item">
                <img
                  className="main-messages-item-img"
                  src={Message2}
                  alt="asd"
                />
                <img
                  className="main-messages-item-img2"
                  src={Message}
                  alt="asd"
                />
                <p>
                  "We have been working with Positivus for the past year and
                  have seen a significant increase in website traffic and leads
                  as a result of their efforts. The team is professional,
                  responsive, and truly cares about the success of our business.
                  We highly recommend Positivus to any company looking to grow
                  their online presence."
                </p>
                <h2>
                  John Smith <br /> <span>Marketing Director at XYZ Corp</span>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="main-messages-item">
                <img
                  className="main-messages-item-img"
                  src={Message2}
                  alt="asd"
                />
                <img
                  className="main-messages-item-img2"
                  src={Message}
                  alt="asd"
                />
                <p>
                  "We have been working with Positivus for the past year and
                  have seen a significant increase in website traffic and leads
                  as a result of their efforts. The team is professional,
                  responsive, and truly cares about the success of our business.
                  We highly recommend Positivus to any company looking to grow
                  their online presence."
                </p>
                <h2>
                  John Smith <br /> <span>Marketing Director at XYZ Corp</span>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main-messages-item">
                <img
                  className="main-messages-item-img"
                  src={Message2}
                  alt="asd"
                />
                <img
                  className="main-messages-item-img2"
                  src={Message}
                  alt="asd"
                />
                <p>
                  "We have been working with Positivus for the past year and
                  have seen a significant increase in website traffic and leads
                  as a result of their efforts. The team is professional,
                  responsive, and truly cares about the success of our business.
                  We highly recommend Positivus to any company looking to grow
                  their online presence."
                </p>
                <h2>
                  John Smith <br /> <span>Marketing Director at XYZ Corp</span>
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <h2 className="container main-h2">
          Contact Us
          <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
        </h2>
        <section className="container main-contact">
          <form className="main-form">
            <label>
              Name*
              <input placeholder=" Name" type="text" />
            </label>
            <label>
              Email*
              <input placeholder="Email" type="text" />
            </label>
            <label>
              Message*
              <textarea placeholder="Message"></textarea>
            </label>
            <button>send message</button>
          </form>
          <img src={Contact} alt="asd" />
        </section>
      </div>
    </>
  );
};

export default Main;
