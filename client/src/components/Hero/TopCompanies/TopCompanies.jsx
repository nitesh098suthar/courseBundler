import { companiesLogo } from "./topCompanies.js";
const TopCompanies = () => {
  return (
    <>
      <div className="mainContainer min-h-[300px] bg-lightColor xs:py-10">
        <h1 className="text-center text-5xl xs:text-4xl xs:p-10 text-white py-12 font-bold leading-tight">
          Top Companies Where Our Students Placed
        </h1>
        <div className="innerContainer overflow-hidden">
          <div className="SliderWrapperTopComp">
            <div className="taglistTopComp">
              {companiesLogo.map((item) => {
                return (
                  <img key={item} src={item} alt="" className="compImage" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCompanies;
