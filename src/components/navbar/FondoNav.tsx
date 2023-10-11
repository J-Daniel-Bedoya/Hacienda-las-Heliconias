import { FunctionComponent } from "react";

interface FondoNavProps {
  isBlock: boolean;
  setIsBlock: (isBlock: boolean) => void;
}

const FondoNav: FunctionComponent<FondoNavProps> = ({
  isBlock,
  setIsBlock,
}) => {
  return (
    <>
      {isBlock && (
        <div
          className="navbar__container--fondo"
          onClick={() => setIsBlock(!isBlock)}
        ></div>
      )}
    </>
  );
};

export default FondoNav;
