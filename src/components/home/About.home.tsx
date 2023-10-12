import imgAbout from "../../assets/img/hacienda1.jpg";

import homeJson from "../../../public/home.json";

const AboutHome = () => {
  return (
    <div className="background background-about">
      <section className="home__container">
        <div className="home__container--title">
          <h2>Sobre Nosotros</h2>
        </div>
        <div className="home__container--cards">
          {homeJson.about.map((about, index) => (
            <div
              key={index}
              className={`card ${
                index === 1 || index === 3 ? "card-reverse" : ""
              }`}
            >
              <div className="card__img">
                <img src={imgAbout} alt={about.img} />
              </div>
              <div className="card__info">
                <p>{about.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutHome;
