import imgMenus from "../../assets/img/hacienda1.jpg";

import homeJson from "../../../public/home.json";

const ServicesHome = () => {
  return (
    <div className="background background-services">
      <section className="home__container">
        <div className="home__container--title">
          <h2>¡Prueba nuestros menus!</h2>
        </div>
        <div className="home__container--cards">
          {homeJson.menus.map((menu, index) => (
            <div key={index} className="card">
              <div className="card__img">
                <img src={imgMenus} alt="menu" />
              </div>
              <div className="card__info">
                <p>{menu.name}</p>
                <button>{menu.price}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesHome;
