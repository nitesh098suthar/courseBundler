import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="parent">
        <div className="childone">
          <video
            src="/videos/bg.mp4"
            id="bgVideo"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="black">{/* <!-- this is black --> */}</div>
        <div className="mainTexting">
          <div className="tex ">
            <p className="text-5xl leading-tight mb-4">
              Welcome to <br />
              <span className="text-yellowColor font-bold">
                {" "}
                Course Bundler
              </span>
            </p>
            <Link to="/allCourses">
              <button className="px-4 py-2 bg-blueColor rounded-lg text-lg hover:bg-hoverColorBlue">
                Let's Explore
              </button>
            </Link>
          </div>
          <div className="laptopBox">
            <img src="/images/laptop.png" alt="" className="laptop" />
            <div className="typing">
              <video
                src="/videos/typing.mp4"
                className="typVid"
                autoPlay
                muted
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
