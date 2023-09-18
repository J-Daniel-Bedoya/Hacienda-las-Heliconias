const ActivitiesSection = () => {
  const arrActivities = [
    {
      img: "",
      description: "pasa un día de sol en nuestra piscina",
      price: 10000,
      title: "Piscina",
    },
    {
      img: "",
      description: "Pasa un día de sol en nuestra piscina",
      price: 10000,
      title: "Piscina",
    },
    {
      img: "",
      description: "Pasa un día de sol en nuestra piscina",
      price: 10000,
      title: "Piscina",
    },
    {
      img: "",
      description: "Pasa un día de sol en nuestra piscina",
      price: 10000,
      title: "Piscina",
    },
  ];

  return (
    <div className="ativitiesSec w-screen h-auto mt-12 flex flex-col justify-center mb-12">
      <div className="ativitiesSec__title w-full mb-12">
        <h1 className="text-center font-bold text-xl">
          Actividades inolvidables
        </h1>
      </div>
      <div className="ativitiesSec__section w-full h-auto flex justify-between gap-x-2 gap-y-4 p-4 flex-wrap">
        {arrActivities.map((card, index) => (
          <div
            key={index}
            className="ativitiesSec__section--card w-wc h-60 shadow-lg"
          >
            <div className="head__img w-full h-2/5 bg-slate-200 flex justify-center items-center">
              <img src={card.img} alt={card.title.toLowerCase()} />
            </div>
            <div className="body w-full h-3/5 p-3 relative ">
              <div className="body__title text-center">
                <h2 className="text-xl font-bold">{card.title}</h2>
              </div>
              <div className="body__description mt-4 font-medium">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesSection;
