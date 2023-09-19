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
    <section className="w-full h-auto px-4">
      <h2 className="text-center text-xl font-bold">¡Prueba nuestros menus!</h2>
      <div className="w-full h-auto my-12 grid grid-cols-2 gap-4">
        {menus.map((menu, index) => (
          <div key={index} className="w-full h-52 shadow-md">
            <div className="w-full h-1/2 flex justify-center items-center bg-slate-300">
              <img className="w-1/2" src={menu.img} alt="menu" />
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center p-2 gap-4">
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
