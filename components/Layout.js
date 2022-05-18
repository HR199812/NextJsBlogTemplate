import Footer from "./Footer";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import UserNavbar from "./UserNavbar";

function Layout({ children }) {
  const changeLayout = useSelector((state) => state.changeLayout);
  console.log(changeLayout);
  return (
    <>
      {changeLayout.isUser ? <UserNavbar /> : <Navbar />}
      {children}
      <Footer />
    </>
  );
}

export default Layout;
