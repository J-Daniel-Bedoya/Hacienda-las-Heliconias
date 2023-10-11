import Ported from "../components/home/Ported.home";
import ActivitiesHome from "../components/home/Activities.home";
import AccommodationHome from "../components/home/Accommodation.home";
import ServicesHome from "../components/home/Services.home";
import AboutHome from "../components/home/About.home";

const Home = () => {
  return (
    <main className="home">
      <div className="home__container">
        <Ported />
        <ActivitiesHome />
        <AccommodationHome />
        <ServicesHome />
        <AboutHome />
      </div>
    </main>
  );
};

export default Home;
