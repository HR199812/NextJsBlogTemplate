const Footer = () => {
  return (
    <>
      <div>
        {/* <!-- Footer --> */}
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "rgba(63, 81, 181, 1)" }}
        >
          {/* <!-- Grid container --> */}
          <div className="container">
            {/* <!-- Section: Links --> */}
            <section className="mt-5">
              {/* <!-- Grid row--> */}
              <div className="row text-center d-flex justify-content-center pt-5">
                {/* <!-- Grid column --> */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">
                      Docs
                    </a>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">
                      Examples
                    </a>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">
                      Blog
                    </a>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}

            <hr className="my-5" />

            {/* <!-- Section: Text --> */}
            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    A Test Blog.
                  </p>
                </div>
              </div>
            </section>
            {/* <!-- Section: Text --> */}

            {/* <!-- Section: Social --> */}
            <section className="text-center mb-5">
              <a href="" className="text-white me-4">
                <i className="fa fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fa fa-github"></i>
              </a>
            </section>
            {/* <!-- Section: Social --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a className="text-white">Test.com</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
    </>
  );
};
export default Footer;
