import img from "../../assets/img/library-management.png";

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
    <section className="w-full h-auto px-4 my-32">
      <h2 className="text-center text-xl font-bold xs:text-2xl">
        ¡Prueba nuestros menus!
      </h2>
      <div className="w-full h-auto mt-12 grid grid-cols-2 gap-4 xs:px-2 xs:gap-6 xs2:px-4 xs2:gap-8 sm:px-6">
        {menus.map((menu, index) => (
          <div key={index} className="w-full h-52 shadow-md xs2:h-60">
            <div className="w-full h-1/2 flex justify-center items-center bg-slate-300 xs2:h-2/3">
              <img className="w-1/3" src={menu.img} alt="menu" />
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
    </section>
  );
};

export default ServicesSection;
