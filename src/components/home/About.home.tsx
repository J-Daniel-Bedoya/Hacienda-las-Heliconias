import imgAbout from "../../assets/img/hacienda1.jpg";

import homeJson from "../../../public/home.json";

const AboutHome = () => {
  return (
    <article className="home__about">
      <div className="home__about--title">
        <h2>Sobre Nosotros</h2>
      </div>
      <div className="home__about--cards">
        {homeJson.about.map((about, index) => (
          <div key={index} className="abouCard">
            <div className="aboutCard__img">
              <img src={imgAbout} alt={about.img} />
            </div>
            <div className="aboutCard__text">
              <p>{about.text}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default AboutHome;
