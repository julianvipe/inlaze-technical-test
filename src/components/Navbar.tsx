import { useState } from "react";
import { AppRoutes } from "../AppRoutes";
import { Link, BrowserRouter as Router } from "react-router-dom";

export const Navbar = () => {
  const [name, setName] = useState<string>();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setName(value);
  }
  return (
    <>
      <Router>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Inlaze Movies
            </span>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Favorites
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-2 ">
            <input
              type="text"
              id="search-navbar"
              className="py-2.5 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              onChange={handleChange}
            />
            <Link className="my-2 py-2 px-5 bg-white rounded-lg border me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" to={`/search/${name}`}>Search</Link>
            </div>
          </div>
        </nav>
        <AppRoutes />
      </Router>
    </>
  );
};
