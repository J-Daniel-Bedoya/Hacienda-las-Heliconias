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
    {
      img: imgCasas,
      description: "Y disfruta de lo mejor de relajantes y hermosos paisajes",
    },
    {
      img: imgCasas,
      description: "Y disfruta de lo mejor de relajantes y hermosos paisajes",
    },
  ];

  return (
    <section className="w-full h-full px-4 my-32">
      <h2 className="text-center text-xl font-bold xs:text-2xl">
        Conecta con la naturaleza
      </h2>
      <article className="w-full h-full mt-12 grid grid-cols-2 gap-4 xs:px-2 xs2:px-4 xs2:gap-6 sm:px-6">
        {casas.map((casa, index) => (
          <div
            key={index}
            className="w-full h-full relative sm:h-48 bg-orange flex justify-center"
          >
            <div className="w-full h-36 flex flex-col items-center gap-8 bg-slate-300 sm:h-full">
              <img className="w-1/3 " src={casa.img} alt="accommodation" />
            </div>
            <p className="text-xs text-center absolute bottom-4">
              {casa.description}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default AccommodationSection;
