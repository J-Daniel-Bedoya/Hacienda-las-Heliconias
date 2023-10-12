import imgWhite from "../../assets/img/hacienda1.jpg";

const Ported = () => {
  return (
    <article className="home__ported">
      <div className="home__ported--info">
        <p className="info__text">
          ¿En busca de nuevas experiencias? ¡Hacienda las Heliconias tiene la
          receta perfecta!
          {/* Hacienda las Heliconias */}
        </p>
        <button className="info__button">¡Descubrela ahora!</button>
      </div>
      <img className="home__ported--img" src={`${imgWhite}`} alt="hacienda" />
    </article>
  );
};

export default Ported;
