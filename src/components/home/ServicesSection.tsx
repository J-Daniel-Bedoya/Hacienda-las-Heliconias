import img from "../../assets/img/hacienda1.jpg";

const ServicesSection = () => {
  const menus = [
    {
      img: img,
      name: "Nombre del Menu",
      price: 8000,
    },
    {
      img: img,
      name: "Nombre del Menu",
      price: 8000,
    },
    {
      img: img,
      name: "Nombre del Menu",
      price: 8000,
    },
    {
      img: img,
      name: "Nombre del Menu",
      price: 8000,
    },
    {
      img: img,
      name: "Nombre del Menu",
      price: 8000,
    },
    {
      img: img,
      name: "Nombre del Menu",
      price: 8000,
    },
  ];

  return (
    <article className="w-full h-auto px-4 my-32">
      <h2 className="text-center text-xl font-bold xs:text-4xl">
        ¡Prueba nuestros menus!
      </h2>
      <div className="w-full h-full mt-28 grid auto-rows-[15rem] grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] gap-8 md:px-16">
        {menus.map((menu, index) => (
          <div key={index} className="w-full h-full shadow-lg">
            <div className="w-full h-1/2 flex justify-center items-center xs2:h-2/3">
              <img className="w-full h-full" src={menu.img} alt="menu" />
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center p-2 gap-4 xs2:h-1/3">
              <p className="text-sm text-center font-medium">{menu.name}</p>
              <button className="text-sm font-medium text-green">
                {menu.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ServicesSection;
