import { Link } from "react-router-dom";
import logo from "../../assets/img/logoHaciendaSvg1.svg";

const Footer = () => {
  const redes = [
    <i className="fa-brands fa-facebook-f text-xl"></i>,
    <i className="fa-brands fa-instagram text-xl"></i>,
    <i className="fa-brands fa-whatsapp text-xl"></i>,
    <i className="fa-regular fa-envelope text-xl"></i>,
  ];

  return (
    <footer className="footer w-full h-auto p-4 bg-slate-300 grid grid-cols-5">
      <div className="w-12 col-start-1 col-end-2">
        <img className="" src={logo} alt="" />
      </div>
      <div className="col-start-2 col-end-6 grid-rows-2">
        <div className="row-start-1 row-end-2">
          <h2 className="text-center font-bold ">Hacienda las Heliconias</h2>
        </div>
        <div className="row-start-2 row-end-3 grid grid-cols-2 mt-4 gap-x-4">
          <div>
            <p className="text-base font-medium">Páginas</p>
            <div className="text-sm font-medium px-2 mt-2">
              <Link to={`/accommodation`}>Alojamiento</Link>
              <p>Actividades</p>
              <p>Servicios</p>
              <p>Eventos</p>
              <p>Nosotros</p>
              <p>Pasate a vip</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {redes.map((red, index) => (
              <Link to="/" key={index}>
                {red}
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
