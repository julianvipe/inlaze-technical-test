import { useState } from "react";
import { AppRoutes } from "../AppRoutes";
import { Link, BrowserRouter as Router } from "react-router-dom";

export const Navbar = () => {
  const [name, setName] = useState<string>();
  const [expanded,setExpanded]=useState(false)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setName(value);
  }

  function toggleMenu(){
    setExpanded(!expanded);
  }
  return (
    <>
      <Router>
        <nav className="bg-white border-gray-200 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Inlaze Movies
            </span>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={"items-center justify-between w-full md:flex md:w-auto md:order-1"+(expanded?" hidden":" ")}
            >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                  <li>
                    <Link
                      to="/"
                      className="block py-2 px-3 text-gray-900  rounded hover:bg-gray-100 md:bg-transparent md:hover:text-blue-700 md:p-0"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/favorites"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    >
                      Favorites
                    </Link>
                  </li>
                </ul>
                <div className="flex items-center gap-2 ">
                  <input
                    type="text"
                    id="search-navbar"
                    className="py-2.5 px-10 ml-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search..."
                    onChange={handleChange}
                  />
                  <Link
                    className="my-2 py-2 px-5 bg-white rounded-lg border me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                    to={`/search/${name}`}
                  >
                    Search
                  </Link>
                </div>
            </div>
          </div>
        </nav>
        <AppRoutes />
      </Router>
    </>
  );
};
