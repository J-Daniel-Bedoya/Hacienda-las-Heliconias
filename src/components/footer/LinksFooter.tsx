import { useNavigate } from "react-router-dom";

const LinksFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="info__pages">
      <div className="info__pages--title">
        <p className="">Páginas</p>
      </div>
      <div className="info__pages--links">
        <p onClick={() => navigate("/accommodation")}>Alojamiento</p>
        <p onClick={() => navigate("/activities")}>Actividades</p>
        <p onClick={() => navigate("/services")}>Servicios</p>
        <p onClick={() => navigate("/events")}>Eventos</p>
        <p onClick={() => navigate("/about")}>Nosotros</p>
        <p onClick={() => navigate("/vip")}>Pasate a vip</p>
      </div>
    </div>
  );
};

export default LinksFooter;
