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
    <section className="ativitiesSec w-full h-auto mt-12 flex flex-col justify-center mb-12 px-4">
      <div className="ativitiesSec__title w-full mb-12">
        <h2 className="text-center font-bold text-xl">
          Actividades inolvidables
        </h2>
      </div>
      <article className="ativitiesSec__section w-full h-auto flex justify-between gap-x-2 gap-y-4 flex-wrap">
        {arrActivities.map((card, index) => (
          <div
            key={index}
            className="ativitiesSec__section--card w-wc h-44 shadow-lg"
          >
            <div className="head__img w-full h-1/2 bg-slate-200 flex justify-center items-center">
              <img
                className="w-1/3"
                src={card.img}
                alt={card.title.toLowerCase()}
              />
            </div>
            <div className="body w-full h-1/2 p-1 relative ">
              <div className="body__title text-center">
                <h3 className="text-sm font-bold ">{card.title}</h3>
              </div>
              <div className="body__description mt-4 font-medium text-xs text-center">
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
