import { Link } from "react-router-dom";

const LinksFooter = () => {
  return (
    <div className="info__pages">
      <div className="info__pages--title">
        <p className="">Páginas</p>
      </div>
      <div className="info__pages--links">
        <Link to={`/accommodation`}>Alojamiento</Link>
        <Link to={`/activities`}>Actividades</Link>
        <Link to={`/services`}>Servicios</Link>
        <Link to={`/events`}>Eventos</Link>
        <Link to={`/about`}>Nosotros</Link>
        <Link to={`/vip`}>Pasate a vip</Link>
      </div>
    </div>
  );
};

export default LinksFooter;
