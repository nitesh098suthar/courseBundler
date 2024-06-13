import { loadUser } from '../../redux/actions/userActions';
import { cancelSubscriptionAction } from '../../redux/actions/subscriptionActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cancelsubscription = () => {

    const dispatch = useDispatch()
    const nav = useNavigate()
      const cancelSubscriptionHandler = async () => {
        await dispatch(cancelSubscriptionAction());
        dispatch(loadUser());
        nav("/profile")
      };

  return (
    <div>
      <div className="bg-lightColor min-h-[680px]">
        <h1 className="text-center text-5xl text-white py-10 font-bold">
          Cancel Subscription
        </h1>
        <p className="text-dullWhite text-center ">
          Didn't we meet your expectations? Want to cancel your subscription?
        </p>
        <div className="grid place-content-center ">
          <div className="flex justify-center">
            <img
              src="images/subscription/cancel.png"
              alt=""
              className="w-1/2 p-10 "
            />
          </div>
          <div className=" flex justify-center">
            
              <button onClick={cancelSubscriptionHandler} className="cursor-pointer hover:bg-red-700 bg-redColor rounded-sm w-[400px] h-[35px] outline-none p-2 text-center text-white">
                Cancel Subscription
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cancelsubscription
