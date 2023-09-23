import imgCasas from "../../assets/img/hacienda1.jpg";

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
    <article className="w-full h-full px-4 my-32">
      <h2 className="text-center text-xl font-bold xs:text-4xl">
        Conecta con la naturaleza
      </h2>
      <div className="w-full h-full mt-28 grid auto-rows-[25rem] grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-8 px-4 md:px-16">
        {casas.map((casa, index) => (
          <div
            key={index}
            className="w-full h-full relative bg-orange flex justify-center"
          >
            <div className="w-full h-full flex flex-col items-center gap-8 shadow-xl">
              <img
                className="w-full h-full "
                src={casa.img}
                alt="accommodation"
              />
            </div>
            <p className="text-xs text-center absolute bottom-4">
              {casa.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default AccommodationSection;
// xs:px-2 xs2:px-4 xs2:gap-6 sm:px-6
