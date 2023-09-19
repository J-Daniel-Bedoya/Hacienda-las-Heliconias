import imgNosotros from "../../assets/img/library-management.png";

const AboutSection = () => {
  const nosotros = [
    {
      img: imgNosotros,
      text: "Nuestra enfoque es claro, somos una herramienta que atrae nuevos corazones aventureros, una fuente de aventura y relajación. Aquí, encontrarás una experiencia a medida que te lleva de la rutina a la emoción, y de la tensión al descanso. Somos tu escapada perfecta. Pero eso es solo el comienzo.",
    },
    {
      img: imgNosotros,
      text: "Nuestra enfoque es claro, somos una herramienta que atrae nuevos corazones aventureros, una fuente de aventura y relajación. Aquí, encontrarás una experiencia a medida que te lleva de la rutina a la emoción, y de la tensión al descanso. Somos tu escapada perfecta. Pero eso es solo el comienzo.",
    },
    {
      img: imgNosotros,
      text: "Nuestra enfoque es claro, somos una herramienta que atrae nuevos corazones aventureros, una fuente de aventura y relajación. Aquí, encontrarás una experiencia a medida que te lleva de la rutina a la emoción, y de la tensión al descanso. Somos tu escapada perfecta. Pero eso es solo el comienzo.",
    },
    {
      img: imgNosotros,
      text: "Nuestra enfoque es claro, somos una herramienta que atrae nuevos corazones aventureros, una fuente de aventura y relajación. Aquí, encontrarás una experiencia a medida que te lleva de la rutina a la emoción, y de la tensión al descanso. Somos tu escapada perfecta. Pero eso es solo el comienzo.",
    },
  ];

  return (
    <section className="w-full h-auto px-4">
      <h2 className="text-center text-xl font-bold">Sobre Nosotros</h2>

      <article className="w-full h-auto my-12 flex flex-col gap-4">
        {nosotros.map((info, index) => (
          <div key={index} className="grid grid-cols-2 gap-x-4 py-2">
            <div className="flex justify-center items-center bg-slate-300">
              <img className="w-1/2" src={info.img} alt={info.img} />
            </div>
            <div
              className={`${
                index % 2 === 0
                  ? " col-start-2 col-end-3"
                  : "row-start-1 row-end-2 col-start-1 col-end-2"
              } flex justify-center items-center`}
            >
              <p className="text-xs">{info.text}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default AboutSection;
