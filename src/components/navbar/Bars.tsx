import { FunctionComponent } from "react";

interface BarsvProps {
  isBlock: boolean;
  setIsBlock: (isBlock: boolean) => void;
}

const Open: FunctionComponent<BarsvProps> = ({ isBlock, setIsBlock }) => {
  return (
    <>
      {!isBlock && (
        <button
          className="navbar__container--bars"
          onClick={() => setIsBlock(!isBlock)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      )}
    </>
  );
};

// export default Open;

const Clear: FunctionComponent<BarsvProps> = ({ isBlock, setIsBlock }) => {
  return (
    <>
      {isBlock && (
        <button className="nav__inActive" onClick={() => setIsBlock(!isBlock)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </>
  );
};

export { Open, Clear };
