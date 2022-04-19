// import { useRouter } from "next/router";

// const blogNo = () => {
//   const router = useRouter();
//   const pageNumber = router.query.blogNo;

//   return (
//     <>
//       <div className="blog">My {pageNumber} contents</div>
//     </>
//   );
// };

// export default blogNo;
import Navbar from "../components/Navbar";

const blog = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="blog">My Blog contents</div>
    </>
  );
};

export default blog;
