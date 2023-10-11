import imgHouses from "../../assets/img/hacienda1.jpg";

import homeJson from "../../../public/home.json";

const AccommodationHome = () => {
  return (
    <div className="background background-accommodation">
      <section className="home__container">
        <div className="home__container--title">
          <h2>Conecta con la naturaleza</h2>
        </div>
        <div className="home__container--cards">
          {homeJson.houses.map((house, index) => (
            <div key={index} className="card">
              <div className="card__img">
                <img src={imgHouses} alt="accommodation" />
              </div>
              <div className="card__info">
                <p>{house.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AccommodationHome;
