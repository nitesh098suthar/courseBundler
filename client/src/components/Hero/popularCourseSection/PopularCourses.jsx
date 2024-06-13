import PopularCourseCard from './PopularCourseCard';

const courseData = [
  {
    courseImg: "images/courseThumbnails/jsbeginner.webp",
    courseHeading: "Java Script For Beginners",
    courseDes:
      "In-Depth JavaScript Course: Strengthen Your Fundamentals and Core Skills",
  },
  {
    courseImg: "/images/courseThumbnails/cAndCpp.webp",
    courseHeading: "Programming with C/C++",
    courseDes:
      "Enroll to deep dive into programming sea. Strengthen Your Programming Skills",
  },
  {
    courseImg: "images/courseThumbnails/dsaJava.jpg",
    courseHeading: "DSA with Java",
    courseDes:
      "Comprehensive DSA with Java: Enhance Your Data Structures and Algorithms Mastery",
  },
];

const PopularCourses = () => {
  return (
    <>
      <div className="min-h-[600px] bg-lightColor xs:py-12">
        <h1 className="text-center text-5xl text-white py-12 font-bold xs:text-4xl">
          Popular Courses
        </h1>
        <div className="">
          <div className="flex justify-evenly flex-wrap">
            {courseData.map((ele, i) => {
              return (
                <div key={i} className="xs:py-6">
                  <PopularCourseCard
                    courseHeading={ele.courseHeading}
                    courseDes={ele.courseDes}
                    courseImg={ele.courseImg}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularCourses
