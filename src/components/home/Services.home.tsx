import imgMenus from "../../assets/img/hacienda1.jpg";

import homeJson from "../../../public/home.json";

const ServicesHome = () => {
  return (
    <article className="home__services">
      <div className="home__services--title">
        <h2>¡Prueba nuestros menus!</h2>
      </div>
      <div className="home__services--cards">
        {homeJson.menus.map((menu, index) => (
          <div key={index} className="servicesHome">
            <div className="servicesHome__img">
              <img className="" src={imgMenus} alt="menu" />
            </div>
            <div className="servicesHome__info">
              <p>{menu.name}</p>
              <button>{menu.price}</button>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ServicesHome;
