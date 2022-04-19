import LINK from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
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
            <LINK href="/sigin">
              <li>SignIn</li>
            </LINK>
            <LINK href="/blog">
              <li>Blog</li>
            </LINK>
            <LINK href="/about">
              <li>About</li>
            </LINK>
            <LINK href="/">
              <li>Home</li>
            </LINK>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
