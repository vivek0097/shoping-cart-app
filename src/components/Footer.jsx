import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer-ct mb-0 ">
      <div className="row ">
        <div className="col-12 col-md-6 col-lg-6 mt-4">
          <div className="d-flex justify-content-lg-start justify-content-md-start justify-content-start ps-lg-0 ps-4 ps-md-4 mt-2">
            <p className="ps-lg-5 pe-5 ps-md-0 text-white ">
              {" "}
              <a href="#" className="anchor-txt  text-white ps-lg-3 ps-2">
                ABOUT US
              </a>
            </p>
            <p className="px-0">
              <a href="#" className="anchor-txt  text-white ps-lg-3 ps-md-0 ps-5">
                CONTACT US
              </a>
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 mt-lg-4 mt-md-4 mt-0 ">
          <div className="ps-2 ">
            <ul className="list-unstyled d-flex justify-content-md-center justify-content-sm-center px-3 justify-content-lg-end pe-lg-5 pe-0 ps-md-5  ps-3  mt-2">
              <li className="mx-2 pe-lg-0 pe-md-0 pe-3 text-white">follow us</li>
              <li className="mx-2 ">
                <a href="https://www.facebook.com/" target="_blank">
                  <img
                    src="/asset/images/facebook.png"
                    className="px-3"
                    style={{ width: "55px", height: "22px" }}
                  />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://twitter.com/" target="_blank">
                  <img
                    src="/asset/images/twitter.png"
                    className="px-3"
                    style={{ width: "55px", height: "22px" }}
                  />
                </a>
              </li>

              <li className="ml-2 ">
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    src="/asset/images/instragram.png"
                    className="px-3 "
                    style={{ width: "55px", height: "22px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-12 d-flex justify-content-start justify-content-md-center justify-content-lg-center mb-0 ps-lg-0 ps-md-0 ps-4 mt-1">
          <div className="d-flex ps-3 justify-content-start ">
            <p className="text-white ">
             &nbsp;www.asmadiya.com <span> | </span>©asmadiya-2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
