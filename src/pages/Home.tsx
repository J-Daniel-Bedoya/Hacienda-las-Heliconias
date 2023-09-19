import AboutSection from "../components/home/AboutSection";
import AccommodationSection from "../components/home/AccommodationSection";
import ActivitiesSection from "../components/home/ActivitiesSection";
import ServicesSection from "../components/home/ServicesSection";
import Ported from "../components/home/Ported";

const Home = () => {
  return (
    <main className="home w-full min-h-screen z-0">
      <Ported />
      <ActivitiesSection />
      <AccommodationSection />
      <ServicesSection />
      <AboutSection />
    </main>
  );
};

export default Home;
