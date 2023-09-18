import imgWhite from "../../assets/img/library-management.png";

const Ported = () => {
  return (
    <div className="home__ported w-full h-60 bg-slate-200 flex flex-col justify-center items-center">
      <img className="home__ported--img w-32 h-32" src={`${imgWhite}`} alt="" />
      <button className="home__ported--button w-max h-max px-3 py-1 bg-green text-white mt-8 text-sm">
        Descubre nuestra receta!
      </button>
    </div>
  );
};

export default Ported;
