import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logoHaciendaSvg1.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
  //
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(0);
  const [deploy, setDeploy] = useState(false);

  const rutas = [
    "/",
    "activities",
    "accommodation",
    "services",
    "events",
    "about",
    "Vip",
  ];
  const links = [
    "Home",
    "Actividades",
    "Alojamiento",
    "Servicios",
    "Eventos",
    "Nosotros",
    "VIP",
  ];

  useEffect(() => {
    if (isActive === 0) {
      navigate("/");
      setIsActive(1);
    }
  }, []);

  const active = (valor: number, active: boolean) => {
    setIsActive(valor);
    setDeploy(active);
  };

  const vipRouete = (vip: string) => {
    navigate(vip);
    setIsActive(links.length - 1);
  };
  const homeRoute = () => {
    navigate("/");
    setIsActive(1);
  };
  console.log(isActive);

  return (
    <header className="navbar fixed bg-white z-10">
      <div className="navbar__logo">
        <div className="navbar__logo--img" onClick={() => homeRoute()}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <button className="navbar__menu" onClick={() => setDeploy(!deploy)}>
        <i className="fa-solid fa-bars"></i>
      </button>

      <nav
        className={`navbar__container ${deploy ? "active" : "inActive"}`}
        onClick={() => setDeploy(false)}
      >
        <button
          className="navbar__container--close"
          onClick={() => setDeploy(!deploy)}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <ul className="navbar__container--link">
          {rutas.map((item: string, i: number) => (
            <Link
              onClick={() => active(i, false)}
              className="link "
              style={{ color: isActive === i ? "#ff9021" : "#058b3d" }}
              key={i}
              to={deploy ? `/${item}` : `/${rutas[i - 1]}`}
            >
              {deploy ? links[i] : links[i - 1]}
            </Link>
          ))}
        </ul>
        {!deploy && (
          <button className="icon" onClick={() => vipRouete("/vip")}>
            <i className="fa-regular fa-circle-user"></i>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
