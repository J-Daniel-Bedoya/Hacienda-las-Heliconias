import AboutSection from "../components/home/AboutSection";
import AccommodationSection from "../components/home/AccommodationSection";
import ActivitiesSection from "../components/home/ActivitiesSection";
import ServicesSection from "../components/home/ServicesSection";
import Ported from "../components/home/Ported";

const Home = () => {
  return (
    <section className="w-full h-auto mt-20">
      <Ported />
      <ActivitiesSection />
      <AccommodationSection />
      <ServicesSection />
      <AboutSection />
    </section>
  );
};

export default Home;
