import { Link } from "react-router-dom";
import logo from "../../assets/img/logoHaciendaSvg1.svg";

const LogoFooter = () => {
  return (
    <Link to={`/`} className="logo__img">
      <img src={logo} alt="" />
    </Link>
  );
};

export default LogoFooter;
