import AboutSection from "../components/home/AboutSection";
import AccommodationSection from "../components/home/AccommodationSection";
import ActivitiesSection from "../components/home/ActivitiesSection";
import ServicesSection from "../components/home/ServicesSection";
import Ported from "../components/home/Ported";

const Home = () => {
  return (
    <div className="home w-full min-h-screen ">
      <Ported />
      <ActivitiesSection />
      <AccommodationSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
};

export default Home;
