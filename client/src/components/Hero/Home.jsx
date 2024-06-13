import Hero from "./Hero";
import PopularCourses from "./popularCourseSection/PopularCourses.jsx";
import SliderMain from "./slider/SliderMain.jsx";
import OurCommunity from "./OurCommunity.jsx";
import CoreOffering from "./CoreOffering/CoreOffering.jsx";
import TopCompanies from "./TopCompanies/TopCompanies.jsx";
import TestimonialsMain from "./Testimonials/TestimonialsMain.jsx";
import OurMission from "./OurMission.jsx";

const Home = () => {
  return (
    <div className="xs:w-[430px] ">
      <Hero />
      <PopularCourses />
      <SliderMain />
      <OurCommunity />
      <CoreOffering />
      <TopCompanies />
      <TestimonialsMain />
      <OurMission />
    </div>
  );
};

export default Home;
