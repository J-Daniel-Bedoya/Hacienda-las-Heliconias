import imgCasas from "../../assets/img/library-management.png";

const AccommodationSection = () => {
  const casas = [
    {
      img: imgCasas,
      description: "¡Alójate en algunas de nuestras casas campesinas!",
    },
    {
      img: imgCasas,
      description: "Y disfruta de lo mejor de relajantes y hermosos paisajes",
    },
  ];

  return (
    <section className="w-full h-auto px-4 mb-12">
      <h2 className="text-center text-xl font-bold">
        Conecta con la naturaleza
      </h2>
      <article className="w-full h-full mt-12 flex flex-col justify-between gap-8">
        {casas.map((casa, index) => (
          <div key={index} className="w-full h-32 grid grid-cols-2 gap-x-4">
            <div className=" h-full flex justify-center items-center bg-slate-300">
              <img className="w-1/2" src={casa.img} alt="img" />
            </div>
            <div
              className={`${
                index % 2 === 0
                  ? "row-start-1 row-end-2 col-start-2 col-end-3"
                  : "row-start-1 row-end-2 col-start-1 col-end-2"
              } flex justify-center items-center p-4`}
            >
              <p className="text-xs text-center">{casa.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default AccommodationSection;
