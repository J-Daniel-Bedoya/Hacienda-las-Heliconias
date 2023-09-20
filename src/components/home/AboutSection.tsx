import imgNosotros from "../../assets/img/library-management.png";

const AboutSection = () => {
  const nosotros = [
    {
      img: imgNosotros,
      text: "En Hacienda Las Heliconias, nuestra pasión es crear experiencias memorables que trascienden los límites de lo ordinario. Somos mucho más que una empresa; somos los que impulsan el turismo en nuestra región.",
    },
    {
      img: imgNosotros,
      text: "Nuestra enfoque es claro, somos una herramienta que atrae nuevos corazones aventureros, una fuente de aventura y relajación. Aquí, encontrarás una experiencia a medida que te lleva de la rutina a la emoción, y de la tensión al descanso. Somos tu escapada perfecta. Pero eso es solo el comienzo.",
    },
    {
      img: imgNosotros,
      text: "Somos un lienzo digital cuidadosamente diseñado para presentar con orgullo todo lo que Heliconia y el Alto del Corral tienen para ofrecer. Cada detalle, cada imagen y cada palabra que encuentres aquí está seleccionada para transmitir la autenticidad, la belleza y la riqueza de nuestras ofertas.",
    },
    {
      img: imgNosotros,
      text: "En resumen, somos la puerta de entrada a un universo de oportunidades donde los límites son tan amplios como tu imaginación. Te invitamos a sumergirte en este mundo y a hacer tus sueños y aventuras realidad en Hacienda Las Heliconias.",
    },
  ];

  return (
    <section className="w-full h-auto px-4 mb-40">
      <h2 className="text-center text-xl font-bold xs:text-2xl">
        Sobre Nosotros
      </h2>

      <article className="w-full h-auto mt-12 flex flex-col gap-4 xs:px-2 xs:gap-6">
        {nosotros.map((info, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-x-4 py-2 place-items-center"
          >
            <div className="w-full h-32 flex justify-center items-center bg-slate-300 xs:h-40 xs2:h-48">
              <img className="w-1/3 " src={info.img} alt={info.img} />
            </div>
            <div
              className={`${
                index % 2 === 0
                  ? " col-start-2 col-end-3"
                  : "row-start-1 row-end-2 col-start-1 col-end-2"
              } flex justify-center items-center`}
            >
              <p className="text-xs xs:text-sm xs2:text-base">{info.text}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default AboutSection;
