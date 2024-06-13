import CoreOfferingCard from "./CoreOfferingCard.jsx";
import { coreOffering } from "./CoreOfferingAPI.js";
const CoreOffering = () => {
  return (
    <div>
      <div className="min-h-[900px] bg-darkColor xs:py-8 ">
        <h1 className="text-center text-5xl text-white py-16 font-bold xs:text-4xl">
          Core Offering
        </h1>
        <div className="">
          <CoreOfferingCard coreOffering={coreOffering} />
        </div>
      </div>
    </div>
  );
};

export default CoreOffering;
