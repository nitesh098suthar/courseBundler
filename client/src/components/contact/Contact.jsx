import { useState } from "react";
import { contactUsAction } from "../../redux/actions/otherAction";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const { user } = useSelector((state) => state.userReducer);
  const [input, setInput] = useState({
    name: user?.name || "",
    email: user?.email || "",
    message: "",
  });
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUsAction(input.name, input.email, input.message));
  };

  return (
    <>
      <div className="bg-lightColor min-h-[750px]">
        <div>
          <h1 className="text-center text-5xl text-white py-14 font-bold">
            Contact Us
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
                  value={input.name}
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
                  value={input.email}
                />
              </div>
              <div className="my-4">
                <label htmlFor="" className="text-dullWhite block">
                  Message
                </label>
                <textarea
                  name="message"
                  id=""
                  cols="40"
                  rows="4"
                  onChange={inputHandler}
                  value={input.message}
                  className="bg-slate-300 rounded-sm w-full h-[100px] outline-none p-2 resize-none"
                ></textarea>
              </div>
              <div className="my-4">
                <button
                  className="cursor-pointer hover:bg-green-700 bg-greenColor rounded-sm w-full h-[35px] outline-none p-2 block text-center text-white"
                  onClick={submitHandler}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
