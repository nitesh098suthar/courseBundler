import { Link } from "react-router-dom";

const SingleCourse = ({
  title,
  description,
  category,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  lectureCount,
  views,
}) => {
  return (
    <>
      <div className="bg-cardColor w-[350px] h-[450px] p-6 rounded-lg">
        <div>
          <div className="overflow-hidden bg-white rounded-lg w-[100%] h-[180px]">
            <img
              src={imageSrc}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="text-white">
            <h1 className="capitalize py-1 text-cyanColor font-bold text-xl mt-2">
              {" "}
              {title}
            </h1>
            <p className="capitalize py-1 text-dullWhite dullWhite text-sm ">
              {" "}
              {description.length >= 40
                ? description.slice(0, 40) + "..."
                : description}
            </p>
            <p className="capitalize py-1  text-white text-sm">
              Category : {category}
            </p>
            <p className="capitalize py-1  text-white  text-sm">
              Creator : {creator}
            </p>
            <p className="capitalize py-1  text-white  text-sm">
              Lecture Count : {lectureCount}
            </p>
            <p className="capitalize py-1  text-white dullWhite text-sm">
              Views : {views}
            </p>
          </div>
          <div className="w-[100%] flex mt-2">
            <Link to={`/course/${id}`}>
              <button className="text-white text-sm bg-greenColor rounded-sm w-[120px] h-[35px] hover:bg-green-700 mr-3">
                Watch Now
              </button>
            </Link>
            <button
              onClick={() => addToPlaylistHandler(id)}
              className="text-white text-sm bg-blueColor rounded-sm w-full h-[35px] border-0 outline-none hover:bg-hoverColorBlue"
            >
              Add to Playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
