import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <>
      <div
        className={`${styles.footer} sm:mt-16 md:mt-8 mt-4 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-full`}
        style={{ backgroundColor: "rgb(189, 195, 199)", color: "black" }}
      >
        <div className="p-2 w-full">
          <div className="text-center w-full ml-16 mr-4 flex flex-row ...">
            <div className="basis-1/4">
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div className="basis-1/4">
              <Link href="/about">
                <a className="w-full aspect-video ...">About</a>
              </Link>
            </div>
            <div className="basis-1/4">
              <Link href="/blog">
                <a className="w-full aspect-video ...">Blog</a>
              </Link>
            </div>
            <div className="basis-1/4">
              <Link href="/signin">
                <a className="w-full aspect-video ...">Sign In</a>
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center">
            A custom theme for blogs using fullstack MERN tech Stack.
          </p>
          <div
            className="w-full flex flex-row ..."
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div className="flex flex-row ... mt-4">
              <div className="mr-4">
                <FontAwesomeIcon icon={faCoffee} />
              </div>
              <div className="mr-4">02</div>
              <div className="mr-4">03</div>
              <div className="mr-4">04</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-4">
          <p className="text-center">&#169; Copyright 2022 | BlogTheme.com</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
