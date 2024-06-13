
const CoreOfferingCard = ({ coreOffering }) => {
  return (
    <>
      <div className="flex justify-evenly flex-wrap px-4">
        {coreOffering.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-cardColor m-3 p-3 rounded-lg w-[280px] h-[280px] text-center"
            >
              <div className="grid place-items-center p-4">
                {" "}
                <img src={item.image} alt="" className="w-14 iconImage" />
              </div>
              <h3 className="text-white p-2 font-bold text-2xl">{item.title}</h3>
              <p className="text-white p-2">{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CoreOfferingCard;
