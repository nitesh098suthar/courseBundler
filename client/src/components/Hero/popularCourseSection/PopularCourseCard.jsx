import { Link } from 'react-router-dom';

const PopularCourseCard = ({ courseHeading, courseDes, courseImg }) => {
  return (
    <>
      <div className="p-4 w-[320px] h-[400px] bg-cardColor rounded-xl flex flex-wrap justify-center">
        <div className="w-full h-40 rounded-lg bg-lightColor overflow-hidden">
          <img src={courseImg} alt="" style={{objectFit:"cover", height:"100%", width:"100%"}}/>
        </div>

        <h3 className="text-white text-center font-bold text-2xl">
          {courseHeading}
        </h3>
        <h3 className="text-white text-center ">{courseDes}</h3>
        <Link to="/allCourses">
          <button className="px-4 py-2 text-white bg-greenColor rounded-lg text-sm my-2 hover:bg-green-700">
            Browse Course
          </button>
        </Link>
      </div>
    </>
  );
};

export default PopularCourseCard
