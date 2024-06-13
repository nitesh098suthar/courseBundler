import SliderCard from "./SliderCard.jsx";

const SliderMain = () => {
  return (
    <>
      <div className="h-[600px] bg-darkColor">
        <h1 className="text-center text-5xl text-white py-20 font-bold xs:text-4xl">
          500+ Topics Taught
        </h1>
        <div className="sliderWrapper overflow-hidden">
          <SliderCard />
        </div>
      </div>
    </>
  );
};

export default SliderMain;
