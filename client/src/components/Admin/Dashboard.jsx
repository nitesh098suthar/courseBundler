import SideBar from "./SideBar";

const DashboardCards = () => {
  const cards = [
    {
      title: "Web Development",
      description:
        "Learn the latest web development technologies and frameworks, including HTML, CSS, JavaScript, React, and more.",
    },
    {
      title: "Android Development",
      description:
        "Build robust Android applications with comprehensive courses covering Java, Kotlin, and Android Studio.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Explore the world of AI with courses on machine learning, neural networks, and natural language processing.",
    },
    {
      title: "Machine Learning",
      description:
        "Master machine learning algorithms and techniques, including supervised and unsupervised learning.",
    },
    {
      title: "Data Structures & Algorithms",
      description:
        "Enhance your problem-solving skills with in-depth courses on data structures and algorithms.",
    },
    {
      title: "Programming with C/C++",
      description:
        "Get a solid foundation in C and C++ programming, including syntax, functions, pointers, and OOP.",
    },
    {
      title: "Java Programming",
      description:
        "Learn Java from basics to advanced levels, covering syntax, OOP principles, and Java frameworks.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#2E3A47] text-[#A6ADBA] rounded-lg shadow-lg p-6"
        >
          <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
          <p className="text-lg">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="bg-[#1D232A] min-h-screen">
      <h1 className="text-center text-5xl text-white py-14 font-bold">
        Dashboard
      </h1>
      <SideBar />
      <div className="flex">
        <div className="flex-grow p-6">
          <div className="flex flex-col items-center">
            <div className=" flex p-8 rounded-lg shadow-2xl w-[96%] mb-6 justify-evenly items-center">
              <div>
                <p className="mb-4 text-4xl font-bold leading-tight text-yellowColor">
                  <span className="text-white">Welcome to</span> <br /> admin DASHBOARD!
                </p>
                <p className="text-white mb-4 text-xl tracking-normal py-1">
                  Here you can manage your courses
                </p>
              </div>
              <img
                src="/images/dashboard.png"
                alt="Dashboard"
                className=" w-1/4 rounded-lg"
              />
            </div>
            <DashboardCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
