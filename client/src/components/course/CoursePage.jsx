import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseLecturesAction } from "../../redux/actions/courseActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import notfound from "/images/notfound.png"

const CoursePage = () => {
  const [currentLecture, setCurrentLecture] = useState(0);
  const { lectures } = useSelector(
    (state) => state.courseReducer
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourseLecturesAction(id));
  }, [dispatch, id]); // added id
 
  return (
    <>
      {lectures.length > 0 ? (
        <div className="flex justify-between bg-lightColor">
          <div className="w-[900px]">
            <video
              controls
              src={lectures[currentLecture]?.video?.url}
              className="px-10 pt-10"
            ></video>
            <div className="px-10 py-10">
              <h3 className="capitalize text-cyanColor text-3xl font-bold pt-6 pb-2">
                title : {lectures[currentLecture]?.title}
              </h3>
              <p className="capitalize text-dullWhite text-lg">
                {lectures[currentLecture]?.description}
              </p>
              <h6 className="capitalize text-dullWhite text-lg">
                lecture no - {currentLecture + 1}
              </h6>
            </div>
          </div>

          <div className="bg-darkColor">
            {lectures?.map((ele, index) => {
              return (
                <div
                  key={index}
                  className="px-10 pt-10 w-[400px] flex items-center"
                >
                  <button
                    className="hover:bg-cardColor text-white p-2 px-3 rounded-lg mx-2 text-sm cursor-pointer capitalize flex items-center bg-cardColor w-full"
                    onClick={() => setCurrentLecture(index)}
                  >
                    <span className="bg-greenColor rounded-sm text-center block py-1 px-3 mr-4">
                      {index}
                    </span>{" "}
                    {ele.title}{" "}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-lightColor min-h-[680px]">
          <h1 className="text-center text-5xl text-white py-14 font-bold">
            No lecture found in this course
          </h1>
          <div className="flex justify-center">
            <img src={notfound} alt="" className="w-1/2" />
          </div>
          <div className="flex justify-center text-center mt-12">
            <Link to="/" className="">
              <button className="cursor-pointer hover:bg-green-700 bg-greenColor rounded-sm w-40 h-[35px] outline-none pb-1 inline-block text-center text-white">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursePage;
