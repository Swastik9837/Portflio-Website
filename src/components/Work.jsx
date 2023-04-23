import React from "react";
import Netflix from "../assets/projects/netflix.jpeg";
import Cocktail from "../assets/projects/cocktails.png";
import Projects from "../assets/projects/projects.png";
import Linkedin from "../assets/projects/linkedin.jpeg";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full min-h-screen text-gray-300 bg-[#0a192f] "
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center  w-full h-full p-9 ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recents work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Netflix Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  href=" https://netflix-clone-swastik.netlify.app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Swastik9837/NETFLIX-CLONE"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Cocktail})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Cocktail website
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://swastik-cocktailss.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Swastik9837/Cocktials"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Linkedin})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Linkedin Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://lnkd.in/e-nCzp45
"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Swastik9837/Linkdin-clone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div classname="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div
            style={{ backgroundImage: `url(${Projects})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div my-7"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Reactjs Projects course on Udemy. (25+ Projects)
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-projects.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold ">
                    Demo
                  </button>
                </a>
                <a
                  href="https://www.udemy.com/course/react-tutorial-and-projects-course/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  ">
                    Check udemy link for more information about the course
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
