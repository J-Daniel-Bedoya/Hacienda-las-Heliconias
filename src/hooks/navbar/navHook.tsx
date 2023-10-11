import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsView } from "../../store/slices/isView.slice";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isBlock, setIsBlock] = useState(false);
  const [chekedColor, setChekedColor] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsBlock(false);
        dispatch(setIsView(true));
      } else {
        dispatch(setIsView(false));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const deploy = (page: string, numColor: number) => {
    setIsBlock(false);
    setChekedColor(numColor);
    navigate(`/${page}`);
  };

  return {
    isBlock,
    setIsBlock,
    deploy,
    chekedColor,
  };
};

export default Nav;
