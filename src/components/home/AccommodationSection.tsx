import img from "../../assets/img/library-management.png";

const AccommodationSection = () => {
  return (
    <section className="w-full h-auto px-4 mb-12">
      <h2 className="text-center text-xl font-bold">
        Conecta con la naturaleza
      </h2>
      <article className="w-full h-full mt-12 flex flex-col justify-between gap-8">
        <div className="w-full h-32 flex">
          <div className="w-1/2 h-full flex justify-center items-center bg-slate-300">
            <img className="w-1/2" src={img} alt="img" />
          </div>
          <div className="w-1/2 h-full flex justify-center items-center p-4">
            <p className="text-xs text-center">
              ¡Alójate en algunas de nuestras casas campesinas!{" "}
            </p>
          </div>
        </div>
        <div className="w-full h-32 flex">
          <div className="w-1/2 h-full flex justify-center items-center p-4">
            <p className="text-xs text-center">
              Y disfruta de lo mejor de relajantes y hermosos paisajes
            </p>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center bg-slate-300">
            <img className="w-1/2" src={img} alt="img" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default AccommodationSection;
