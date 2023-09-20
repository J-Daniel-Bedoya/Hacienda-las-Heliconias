import { Link } from "react-router-dom";
import logo from "../../assets/img/logoHaciendaSvg1.svg";

const Footer = () => {
  const redes = [
    "fa-brands fa-facebook-f",
    "fa-brands fa-instagram",
    "fa-brands fa-whatsapp",
    "fa-regular fa-envelope",
  ];

  return (
    <footer className="footer w-full h-auto p-4 bg-slate-300 grid grid-cols-5">
      <Link to={`/`} className="w-12 col-start-1 col-end-2 xs:w-16">
        <img src={logo} alt="" />
      </Link>
      <div className="col-start-2 col-end-6 grid-rows-2">
        <div className="row-start-1 row-end-2">
          <h2 className="text-center font-bold text-base xs:text-lg sm:text-xl">
            Hacienda las Heliconias
          </h2>
        </div>
        <div className="row-start-2 row-end-3 grid grid-cols-2 mt-8 gap-x-4">
          <div>
            <p className="text-base font-medium">Páginas</p>
            <div className="text-sm font-medium px-2 mt-2 flex flex-col">
              <Link to={`/accommodation`}>Alojamiento</Link>
              <Link to={`/activities`}>Actividades</Link>
              <Link to={`/services`}>Servicios</Link>
              <Link to={`/events`}>Eventos</Link>
              <Link to={`/about`}>Nosotros</Link>
              <Link to={`/vip`}>Pasate a vip</Link>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap xs:gap-4">
            {redes.map((red, index) => (
              <Link to="/" key={index}>
                <i className={`${red} text-xl xs:text-2xl`}></i>
              </Link>
            ))}
          </div>
          <div className="col-start-1 col-end-3 mt-4">
            <Link className="text-base font-medium" to="/">
              Políticas de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
