import activities from "../../assets/img/library-management.png";

const ActivitiesSection = () => {
  const arrActivities = [
    {
      img: activities,
      description: "Pasa un emocionante día de sol",
      price: 10000,
      title: "Piscina",
    },
    {
      img: activities,
      description: "Prueba suerte en nuestros estanques",
      price: 10000,
      title: "Piscina",
    },
    {
      img: activities,
      description: "Pasa noches relajantes y divertidas",
      price: 10000,
      title: "Piscina",
    },
    {
      img: activities,
      description: "Pasa momentos agradables en familia",
      price: 10000,
      title: "Piscina",
    },
  ];

  return (
    <section className="ativitiesSec w-full h-auto my-32 flex flex-col justify-center px-4">
      <div className="ativitiesSec__title w-full mb-12">
        <h2 className="text-center font-bold text-xl  xs:text-2xl xs2:text-3xl">
          Actividades inolvidables
        </h2>
      </div>
      <article className="ativitiesSec__section w-full h-auto grid grid-cols-2 gap-4 xs:px-2 xs:gap-6 xs2:px-4 xs2:gap-8 sm:px-6 ">
        {arrActivities.map((card, index) => (
          <div
            key={index}
            className="ativitiesSec__section--card shadow-lg h-44 xs:h-52 xs2:h-60 sm:h-80"
          >
            <div className="head__img w-full h-3/5 sm:h-2/3 bg-slate-200 flex justify-center items-center">
              <img
                className="w-1/3"
                src={card.img}
                alt={card.title.toLowerCase()}
              />
            </div>
            <div className="body w-full h-2/5 sm:h-1/3 p-1 relative ">
              <div className="body__title text-center">
                <h3 className="text-sm font-bold xs2:text-lg">{card.title}</h3>
              </div>
              <div className="body__description mt-2 font-medium text-xs text-center xs2:text-base">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default ActivitiesSection;
