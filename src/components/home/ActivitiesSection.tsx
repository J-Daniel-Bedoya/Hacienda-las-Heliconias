import activities from "../../assets/img/hacienda1.jpg";

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
    <article className="w-full h-auto my-32 flex flex-col justify-center px-4">
      <div className="w-full mb-12">
        <h2 className="text-center font-bold text-xl  xs:text-2xl xs2:text-4xl">
          Actividades inolvidables
        </h2>
      </div>
      <div className="w-full h-auto mt-16 grid auto-rows-[20rem] grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] gap-8 md:px-16 ">
        {arrActivities.map((card, index) => (
          <div key={index} className="w-full h-full shadow-lg">
            <div className=" w-full h-3/5 sm:h-2/3 bg-slate-200 flex justify-center items-center">
              <img
                className="w-full h-full"
                src={card.img}
                alt={card.title.toLowerCase()}
              />
            </div>
            <div className="w-full h-2/5 sm:h-1/3 p-1 relative flex flex-col justify-center items-center ">
              <div className="text-center">
                <h3 className="text-lg font-bold xs2:text-lg">{card.title}</h3>
              </div>
              <div className="mt-2 font-medium text-sm text-center xs2:text-base">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ActivitiesSection;
