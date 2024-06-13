const OurCommunity = () => {
  return (
    <>
      <div className="h-[410px] bg-lightColor">
        <h1 className="text-center text-5xl text-white py-14 font-bold">
          Our Community
        </h1>
        <div className="grid place-items-center p-4">
          <div className="flex justify-center bg-cardColor rounded-3xl items-center p-2 w-[60%] py-5">
            <div className="p-2 mx-8">
              <h1 className="text-4xl font-bold text-white text-center ">
                100+
              </h1>
              <p className="text-dullWhite text-center text-xl">
                Course Lectures
              </p>
            </div>
            <div className="line"></div>
            <div className="p-2 mx-8">
              <h1 className="text-4xl font-bold text-white text-center ">10+</h1>
              <p className="text-dullWhite text-center text-xl">
                Experienced Trainers
              </p>
            </div>
            <div className="line"></div>
            <div className="p-2 mx-8">
              <h1 className="text-4xl font-bold text-white text-center ">
                200+
              </h1>
              <p className="text-dullWhite text-center text-xl">
                Happy Students
              </p>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCommunity;
