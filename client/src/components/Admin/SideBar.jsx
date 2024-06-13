import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div>
          <Link to="/admin/dashboard">
            <button className="m-2 bg-cardColor rounded-sm text-sm text-white px-5 p-2 hover:bg-hoverColor">
              Dashboard
            </button>
          </Link>
          <Link to="/admin/createcourse">
            <button className="m-2 bg-cardColor rounded-sm text-sm text-white px-5 p-2 hover:bg-hoverColor">
              Create Course
            </button>
          </Link>
          <Link to="/admin/admincourse">
            <button className="m-2 bg-cardColor rounded-sm text-sm text-white px-5 p-2 hover:bg-hoverColor">
              View Courses | Add Lecture
            </button>
          </Link>
          <Link to="/admin/users">
            <button className="m-2 bg-cardColor rounded-sm text-sm text-white px-5 p-2 hover:bg-hoverColor">
              Show All Users
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideBar
