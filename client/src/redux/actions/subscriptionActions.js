import { instance } from "../store";
import { buySubscriptionSuccess } from "../reducers/subscriptionReducers";
import { rej, req, res } from "../reducers/globalReducer";

export const buySubscriptionAction = () => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.get("/subscription");
    dispatch(buySubscriptionSuccess(data));
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};

export const cancelSubscriptionAction = () => async (dispatch) => {
  try {
    dispatch(req());
    const { data } = await instance.delete("/subscriptioncancel");
    dispatch(res(data));
  } catch (error) {
    dispatch(rej(error?.response?.data?.message));
  }
};
