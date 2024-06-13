import { Link } from 'react-router-dom'

const PaymentFailed = () => {
  return (
    <>
      <div className="bg-lightColor min-h-[680px]">
        <h1 className="text-center text-5xl text-white py-10 font-bold">
          Payment Failed
        </h1>
        <p className="text-dullWhite text-center ">
         There are some technical issues in payment. Please try again after some time.
        </p>
        <div className="grid place-content-center ">
          <div className="flex justify-center">
            <img
              src="images/subscription/successfull.png"
              alt=""
              className="w-1/2 p-10 "
            />
          </div>
          <div className=" flex justify-center">
            <Link to="/subscribe">
              <button className="cursor-pointer hover:bg-yellow-700 bg-yellowColor rounded-sm w-[400px] h-[35px] outline-none p-2 text-center text-white">
                Try Again
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentFailed
