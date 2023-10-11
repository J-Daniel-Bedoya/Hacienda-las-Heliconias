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
    <article className="home__activities">
      <div className="home__activities--title">
        <h2 className="">Actividades inolvidables</h2>
      </div>
      <div className="home__activities--cards">
        {activities.map((activity: Activity, index: number) => (
          <div key={index} className="activitiesCard">
            <div className="activitiesCard__img">
              <img src={imgActivities} alt={activity.title.toLowerCase()} />
            </div>
            <div className="activitiesCard__info">
              <div className="activitiesCard__info--title">
                <h3 className="">{activity.title}</h3>
              </div>
              <div className="activitiesCard__info--text">
                <p>{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ActivitiesHome;
