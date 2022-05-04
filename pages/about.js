import Head from "next/head";
import LINK from "next/link";
const about = () => {
  return (
    <>
      <div className="mt-24">
        <div className="mx-96 my-3 flex flex-col bg-white rounded-lg border shadow-md md:flex-row md:max-w-2/5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            style={{ height: "58vh" }}
            className="object-cover w-full rounded-t-lg md:w-96 md:rounded-none md:rounded-l-lg"
            src="https://picsum.photos/600/400/?random"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tasks Manager
            </h5>
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Developed by: Hritwik Agarwal
            </h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A mini project using NextJs, MongoDB Atlas, Express, NodeJs and
              Tailwind.
            </p>
            <LINK href="/login">
              <a className="inline-flex items-center w-24 py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign In
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </LINK>
          </div>
        </div>
      </div>    </>
  );
};

export default about;
