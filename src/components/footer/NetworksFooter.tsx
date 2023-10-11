import { Link } from "react-router-dom";

const NetworksFooter = () => {
  const netWorks = [
    "fa-brands fa-facebook-f",
    "fa-brands fa-instagram",
    "fa-brands fa-whatsapp",
    "fa-regular fa-envelope",
  ];
  return (
    <div className="info__networks">
      {netWorks.map((netWork: string, index: number) => (
        <Link to="/" key={index} className="info__networks--link">
          <i className={netWork}></i>
        </Link>
      ))}
    </div>
  );
};

export default NetworksFooter;
