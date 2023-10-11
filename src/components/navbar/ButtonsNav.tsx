import { FunctionComponent } from "react";
import home from "../../../public/home.json";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface ButtonsNavProps {
  deploy: (deploy: string, numColor: number) => void;
  chekedColor: number;
}

const ButtonsNav: FunctionComponent<ButtonsNavProps> = ({
  deploy,
  chekedColor,
}) => {
  const links = home.links;
  const icons = home.iconLinks;
  const view = useSelector((state: RootState) => state.isView);
  const isView = view.isView;

  return (
    <>
      {links.map((link: string, index: number) => (
        <div
          key={index}
          className="buttons__content"
          onClick={() => deploy(link, index)}
          style={{ color: chekedColor === index ? "#fff86d" : "" }}
        >
          <div className="buttons__content--icons">
            <i className={`fa-solid ${icons[index]}`}></i>
          </div>
          <span>{link}</span>
        </div>
      ))}
      <div
        className="buttons__content cuenta"
        onClick={() => deploy("Vip", 100)}
        style={{ color: chekedColor === 100 ? "#fff86d" : "" }}
      >
        {isView ? (
          <i className="fa-solid fa-user"></i>
        ) : (
          <>
            <div className="buttons__content--icons">
              <i className="fa-solid fa-user"></i>
            </div>
            <span>Vip</span>
          </>
        )}
      </div>
    </>
  );
};

export default ButtonsNav;
