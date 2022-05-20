import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchValue } from "../store/actions/index";

const ArticlesRibbon = (props) => {
  const state = useSelector((state) => state.searchValue);
  const dispatch = useDispatch();

  const [searchedText, setSearchedText] = useState("");
  const [showCreateArticleModal, setShowCreateArticleModal] = useState(false);

  function applyFilter(event) {
    event.preventDefault();
  }
  function applSearchVal(event) {
    event.preventDefault();
    if (searchedText != " ") {
      dispatch(searchValue(searchedText));
      props.passSearchState(true);
    } else {
      props.passSearchState(false);
    }
  }
  return (
    <>
      <nav className="mt-16 mx-auto my-bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <ul className="text-center w-full flex flex-wrap ...">
          <li className="basis-1/5">
            <button
              onClick={() => setShowCreateArticleModal(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Create New Article
            </button>
          </li>
          <li className="basis-3/5">
            <div className="flex flex-justify-center">
              <div className="mb-3 w-full mr-8">
                <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                  <input
                    type="search"
                    className="form-control relative flex-auto min-w-0 block w-10/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    value={searchedText}
                    onChange={(event) => setSearchedText(event.target.value)}
                  />
                  <button
                    className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                    type="button"
                    id="button-addon2"
                    onClick={applSearchVal}
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="basis-1/5">
            <select
              onChange={(e) => applyFilter(e.target.value)}
              className="block cursor-pointer appearance-none text-white w-full bg-blue-500 hover:bg-blue-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select Filter</option>
              <option>Music</option>
              <option>Politics</option>
              <option>Gaming</option>
              <option>Geeks</option>
              <option>Sports</option>
              <option>Travel</option>
              <option>Fashion</option>
              <option>Home &amp; Decor</option>
            </select>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ArticlesRibbon;
