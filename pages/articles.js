import requireAuthentication from "./middleware/requireAuthentication";
import ArticlesRibbon from "../components/ArticlesRibbon";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const articles = (props) => {
  const id = props.id;

  const state = useSelector((state) => state.searchValue);

  const [searchedTasks, setSearchedTasks] = useState(false);

  function fetchSearchedTasksOnly() {
    console.log(state);
    setSearchedTasks(false);
  }
  useEffect(() => {
    fetchSearchedTasksOnly();
  }, [searchedTasks]);
  return (
    <>
      <div className="container min-h-screen my-20 mx-auto px-4 md:px-12">
        <ArticlesRibbon passSearchState={setSearchedTasks} />
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/* <!-- Column --> */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    Article Title
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p className="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = requireAuthentication((context) => {
  const { req } = context;
  console.log("req.session in getserverside props ******", req.session);
  return {
    props: {
      id: req.session.user._id,
    },
  };
});
export default articles;
