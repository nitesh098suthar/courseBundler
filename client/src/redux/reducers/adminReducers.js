import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: {
    courses: null,
    lectures: [],
    allUsers: [],
  },
  reducers: {
    //removed: createCourseRequest, createCourseSuccess, createCourseFail,deleteOneCourseRequest,deleteOneCourseSuccess,deleteOneCourseFail,
    //  getLecturesOfACourseRequest,getLecturesOfACourseFail, addLectureInACourseRequest,addLectureInACourseSuccess,addLectureInACourseFail,
    // deleteLectureFromACourseRequest,deleteLectureFromACourseSuccess, deleteLectureFromACourseFail
    //deleteUserSuccess,deleteUserRequest, deleteUserFail
    //getAllUsersRequest,getAllUsersFail,changeUserRoleRequest,changeUserRoleFail,changeUserRoleSuccess
    getLecturesOfACourseSuccess: (state, action) => {
      state.lectures = action.payload.lectures;
    },
    getAllUsersSuccess: (state, action) => {
      state.allUsers = action.payload.allUsers;
    },
  },
});

export const { getLecturesOfACourseSuccess, getAllUsersSuccess } =
  adminSlice.actions;
export default adminSlice.reducer;
