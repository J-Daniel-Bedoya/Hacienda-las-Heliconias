import imgWhite from "../../assets/img/hacienda1.jpg";

const Ported = () => {
  return (
    <article className="w-full grid grid-cols-1 gap-y-4 p-4 md:grid-cols-2 md:p-16">
      <div className="w-full h-max flex flex-col relative  p-4 md:px-12 md:py-16">
        <p className="text-lg font-bold md:text-4xl">
          ¿En busca de nuevas experiencias? ¡Hacienda las Heliconias tiene la
          receta perfecta!
        </p>
        <br />
        <button className="absolute left-4 px-2 py-1 font-bold md:left-12 bottom-0 bg-green text-white">
          ¡Descubrela ahora!
        </button>
      </div>
      <img
        className="w-full h-full shadow-xl"
        src={`${imgWhite}`}
        alt="hacienda"
      />
    </article>
  );
};

export default Ported;
