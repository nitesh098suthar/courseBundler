import { createSlice } from "@reduxjs/toolkit";

const subscriptionSlice = createSlice({
  name: "subscriptionSlice",
  initialState: {
    subscriptionId: null,
    message: null,
  },
  reducers: {
    // removed: buySubscriptionRequest,buySubscriptionFail,cancelSubscriptionRequest,cancelSubscriptionSuccess, cancelSubscriptionFail

    buySubscriptionSuccess: (state, action) => {
      state.subscriptionId = action.payload.subscriptions_id;
    },
  },
});

export const {
  buySubscriptionSuccess,
} = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
