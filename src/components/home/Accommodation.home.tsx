import imgHouses from "../../assets/img/hacienda1.jpg";

import homeJson from "../../../public/home.json";

const AccommodationHome = () => {
  return (
    <article className="home__acommodaiton">
      <div className="home__acommodaiton--title">
        <h2>Conecta con la naturaleza</h2>
      </div>
      <div className="home__acommodaiton--cards">
        {homeJson.houses.map((house, index) => (
          <div key={index} className="accommodationCard">
            <div className="accommodationCard__img">
              <img className="" src={imgHouses} alt="accommodation" />
            </div>
            <div className="accommodationCard__text">
              <p className="">{house.description}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default AccommodationHome;
