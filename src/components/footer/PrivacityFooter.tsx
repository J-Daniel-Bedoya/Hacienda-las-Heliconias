import { Link } from "react-router-dom";

const PrivacityFooter = () => {
  return (
    <div className="info__privacity">
      <Link className="info__privacity--text" to="/">
        Políticas de privacidad
      </Link>
    </div>
  );
};

export default PrivacityFooter;
