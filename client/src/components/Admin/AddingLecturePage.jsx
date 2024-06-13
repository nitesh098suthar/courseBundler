import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLectureInACourseAction } from "../../redux/actions/adminAction";
import { getCourseLecturesAction } from "../../redux/actions/courseActions";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../layout/Loader";

const AddingLecturePage = () => {
  const [videoPreview, setVideoPreview] = useState("");
  const [video, setVideo] = useState("");
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  const { id } = useParams();
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const imageClickInputHandler = () => {
    const signUpAvatar = document.getElementById("signUpAvatar");
    signUpAvatar.click();
  };

  const videoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideo(file);
      setVideoPreview(reader.result); // result of reader.readAsDataURL(file)
    };
  };
  const nav = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", input.title);
    myForm.append("description", input.description);
    myForm.append("file", video);

    await dispatch(addLectureInACourseAction(id, myForm));
    await dispatch(getCourseLecturesAction(id));
    nav("/admin/admincourse");
  };
  const { loading } = useSelector((state) => state.globalReducer);
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="bg-[#1D232A] h-full pb-20">
        <h1 className="text-center text-5xl text-white py-14 font-bold">
          Add New Lecture
        </h1>

        <div className="grid place-content-center">
          <form
            action=""
            onSubmit={submitHandler}
            className="p-8 bg-cardColor rounded-xl w-[500px]"
          >
            <div className="flex justify-center">
              <div className="addingLectures">
                <div className="my-4">
                  <label htmlFor="" className="text-dullWhite block w-[100%]">
                    Lecture Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={input.title}
                    onChange={inputHandler}
                    className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="" className="text-dullWhite block w-[100%]">
                    Lecture Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={input.description}
                    onChange={inputHandler}
                    className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  />
                </div>

                <div className="my-4">
                  <label htmlFor="" className="text-dullWhite block w-[100%]">
                    Choose Lecture
                  </label>
                  <label
                    onClick={imageClickInputHandler}
                    className="cursor-pointer hover:bg-hoverColorBlue bg-blueColor rounded-sm w-full h-[35px] outline-none p-2 block text-center text-white"
                  >
                    Choose Lecture
                  </label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={videoHandler}
                    className="hidden"
                    id="signUpAvatar"
                  />
                </div>
                <div className="my-6 flex justify-center w-[436px]">
                  {videoPreview && (
                    <video width="320" height="240" controls>
                      <source src={videoPreview} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <button
                  className="text-white bg-greenColor rounded-sm w-full h-[35px] border-0 outline-none hover:bg-green-700"
                  type="submit"
                >
                  Add Lecture
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddingLecturePage;
