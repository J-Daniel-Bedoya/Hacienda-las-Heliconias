import LogoNav from "../components/navbar/LogoNav";
import { Open, Clear } from "../components/navbar/Bars";
import FondoNav from "../components/navbar/FondoNav";
import ButtonsNav from "../components/navbar/ButtonsNav";
import Nav from "../hooks/navbar/navHook";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isBlock, setIsBlock, deploy, chekedColor } = Nav();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setNavbarVisible(true); // El scroll está yendo hacia arriba, muestra el navbar
      } else {
        setNavbarVisible(false); // El scroll está yendo hacia abajo, oculta el navbar
      }
      setPrevScrollPos(currentScrollPos);
    };

    // Agregar un listener para el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Eliminar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarClass = navbarVisible ? "" : "navbar__hidden";

  return (
    <div className={`navbar ${navbarClass}`}>
      <div className="navbar__container">
        <LogoNav />
        <Open isBlock={isBlock} setIsBlock={setIsBlock} />
        <FondoNav isBlock={isBlock} setIsBlock={setIsBlock} />
        <div
          className={`navbar__container--nav ${
            isBlock
              ? "navbar__container--active"
              : "navbar__container--inActive"
          }`}
        >
          <Clear isBlock={isBlock} setIsBlock={setIsBlock} />
          <div className="buttons">
            <ButtonsNav deploy={deploy} chekedColor={chekedColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
