import { useEffect } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserRoleAction,
  deleteUserAction,
  getAllUsersAction,
} from "../../redux/actions/adminAction";
import Loader from "../layout/Loader";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);
  const { allUsers } = useSelector((state) => state.adminReducer);

  const changeRole = async (id) => {
    await dispatch(changeUserRoleAction(id));
    dispatch(getAllUsersAction());
  };

  const deleteUser = async (id) => {
    await dispatch(deleteUserAction(id));
    dispatch(getAllUsersAction());
  };
  const { loading } = useSelector((state) => state.globalReducer);

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="bg-[#1D232A] min-h-screen pb-16">
        <h1 className="text-center text-5xl text-white py-14 font-bold">
          All Users
        </h1>
        <div className="mb-10">
          <SideBar />
        </div>
        <div className="grid place-content-center ">
          <table>
            <thead>
              <tr className="text-cyanColor font-light pb-4">
                <td className="p-2 text-center px-6">ID</td>
                <td className="p-2 text-center px-6">Name</td>
                <td className="p-2 text-center px-6">Email</td>
                <td className="p-2 text-center px-6">Role</td>
                <td className="p-2 text-center px-6">Subscription</td>
                <td className="p-2 text-center px-6">Change Role</td>
                <td className="p-2 text-center px-6">Delete User</td>
              </tr>
              {allUsers &&
                allUsers.map((ele, i) => (
                  <tr key={i}>
                    <td className="p-2 text-center px-6 text-white">{i + 1}</td>
                    <td className="p-2 text-center px-6 text-white capitalize">
                      {ele.name}
                    </td>
                    <td className="p-2 text-center px-6 text-white">
                      {ele.email}
                    </td>
                    <td className="p-2 text-center px-6 text-white capitalize">
                      {ele.role}
                    </td>
                    <td className="p-2 text-center px-6 text-white capitalize">
                      {ele.subscription.status}
                    </td>
                    <td className="p-2 text-center px-6 text-white">
                      <button
                        onClick={() => changeRole(ele._id)}
                        className="p-1 bg-greenColor text-white text-sm px-4 rounded-sm hover:bg-green-700"
                      >
                        Change Role
                      </button>
                    </td>
                    <td className="p-2 text-center px-6 text-white">
                      <button
                        onClick={() => deleteUser(ele._id)}
                        className="p-1 bg-redColor text-white text-sm px-4 rounded-sm hover:bg-red-600"
                      >
                        Delete User
                      </button>
                    </td>
                  </tr>
                ))}
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
