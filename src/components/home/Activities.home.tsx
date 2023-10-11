import imgActivities from "../../assets/img/hacienda1.jpg";

import home from "../../../public/home.json";

const ActivitiesHome = () => {
  const activities = home.activities;

  interface Activity {
    img: string;
    description: string;
    price: number;
    title: string;
  }

  return (
    <div className="background background-activities">
      <section className="home__container">
        <div className="home__container--title">
          <h2 className="">Actividades inolvidables</h2>
        </div>
        <div className="home__container--cards">
          {activities.map((activity: Activity, index: number) => (
            <div key={index} className="card">
              <div className="card__img">
                <img src={imgActivities} alt={activity.title.toLowerCase()} />
              </div>
              <div className="card__info">
                <div className="card__info--title">
                  <h3>{activity.title}</h3>
                </div>
                <div className="card__info--text">
                  <p>{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ActivitiesHome;
