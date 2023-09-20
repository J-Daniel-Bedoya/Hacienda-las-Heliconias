import imgWhite from "../../assets/img/library-management.png";

const Ported = () => {
  return (
    <section className="home__ported w-full h-60 bg-slate-200 flex flex-col justify-center items-center relative xs:h-72 xs2:h-80 sm:h-96">
      <img className="home__ported--img w-32 h-32" src={`${imgWhite}`} alt="" />
      <button className="home__ported--button w-max h-max px-3 py-1 bg-green text-white absolute bottom-4 text-sm xs:text-base">
        Descubre nuestra receta!
      </button>
    </section>
  );
};

export default Ported;
