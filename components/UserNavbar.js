import LINK from "next/link";
import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { logoutLayout } from "../store/actions";
const UserNavbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.floatDivOne}>
          <LINK href="/">
            <p className={styles.logo}>Next Js Blog</p>
          </LINK>
        </div>
        <div className={styles.floatDivTwo}>
          <ul className="navbar-links">
            <LINK onClick={() => dispatch(logoutLayout())} href="/User/logout">
              <li>Sign-Out</li>
            </LINK>
            <LINK href="/blog">
              <li>Profile</li>
            </LINK>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
