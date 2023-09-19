import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logoHaciendaSvg1.svg";
import { useState } from "react";

const Navbar = () => {
  //
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(0);
  const [deploy, setDeploy] = useState(false);

  const rutas = [
    "Vip",
    "",
    "about",
    "services",
    "accommodation",
    "activities",
    "events",
  ];
  const links = [
    // <i className="fa-regular fa-circle-user"></i>,
    "VIP",
    "Home",
    "Abous Us",
    "Services",
    "Accommodation",
    "Activities",
    "Events",
  ];

  const active = (valor: number, active: boolean) => {
    setIsActive(valor);
    setDeploy(active);
  };

  const vip = (vip: string) => {
    navigate(vip);
    setIsActive(links.length - 1);
  };
  console.log(isActive);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo--img">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <button className="navbar__menu" onClick={() => setDeploy(!deploy)}>
        <i className="fa-solid fa-bars"></i>
      </button>

      <nav className={`navbar__container ${deploy ? "active" : "inActive"}`}>
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
              to={deploy ? `/${item}` : `/${rutas[i + 1]}`}
            >
              {deploy ? links[i] : links[i + 1]}
            </Link>
          ))}
        </ul>
        {!deploy && (
          <button className="icon" onClick={() => vip("/vip")}>
            <i className="fa-regular fa-circle-user"></i>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
