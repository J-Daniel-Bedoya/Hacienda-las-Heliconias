import { useNavigate } from "react-router-dom";
import imgLogo from "../../assets/img/logoHaciendaSvg1.svg";

const LogoNav = () => {
  //
  const navigate = useNavigate();

  return (
    <div className="logo">
      <div
        className="logo__img"
        onClick={() => navigate("/")}
        style={{
          backgroundImage: `url(${imgLogo})`,
        }}
      ></div>
      <p>HTLH</p>
    </div>
  );
};

export default LogoNav;
