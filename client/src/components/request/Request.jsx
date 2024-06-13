import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestUsAction } from "../../redux/actions/otherAction";

const Request = () => {
  const { user } = useSelector((state) => state.userReducer);
  const [input, setInput] = useState({
    name: user?.name || "",
    email: user?.email || "",
    course: "",
  });

  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(requestUsAction(input.name, input.email, input.course));
  };

  return (
    <>
      <div className="bg-lightColor min-h-[750px]">
        <div>
          <h1 className="text-center text-5xl text-white py-14 font-bold">
            Request Your Desired Course
          </h1>
          <div className="grid place-content-center">
            <div className="p-8 bg-cardColor h-[440px] rounded-xl w-[550px]">
              <div className="my-4">
                <label htmlFor="" className="text-dullWhite block">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  onChange={inputHandler}
                  name="name"
                  value={input?.name}
                />
              </div>
              <div className="my-4">
                <label htmlFor="" className="text-dullWhite block">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  onChange={inputHandler}
                  name="email"
                  value={input?.email}
                />
              </div>
              <div className="my-4">
                <label htmlFor="" className="text-dullWhite block">
                  Course Name & Details
                </label>
                <textarea
                  name="course"
                  id=""
                  cols="40"
                  rows="4"
                  onChange={inputHandler}
                  value={input.course}
                  className="bg-slate-300 rounded-sm w-full h-[100px] outline-none p-2 resize-none"
                ></textarea>
              </div>

              <div className="my-4">
                <button
                  className="cursor-pointer hover:bg-green-700 bg-greenColor rounded-sm w-full h-[35px] outline-none px-2 block text-center text-white"
                  onClick={submitHandler}
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;
