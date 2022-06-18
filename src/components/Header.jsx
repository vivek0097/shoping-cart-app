import React, { useState } from "react";

import "./header.css";
import Home from "./Home";


const  Header = ({x,handleWishlistData,showWishlist,getBack,search}) => {





  return (
    <>
      <div className="container-fluid ">
        <div className="row header-bg py-2">
          <div className="col-12 col-md-12 col-lg-3 d-flex justify-content-lg-start justify-content-md-center  justify-content-center mt-3 mt-md-4 ">
            <img
              src="/asset/images/logo_white.svg"
              alt="logo"
              className="ps-3  logo-img"
            />
          </div>

          <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-lg-center   justify-content-md-center justify-content-start mt-3 mt-md-4 ">
          {showWishlist == true ? <div></div> : 
            <div className="d-flex justify-content-center inpt-box">
              <input
                class=" searchInpt ps-3 pe-3"
                type="text"
                placeholder="Search..."
                onChange={(e)=>search(e.target.value)}
              />

              <button
                className=" bg-none  ps-0 search-btn py-0"
                type="button"
                style={{ width: "45px", height: "34px" }}
              >
                <img
                  src="/asset/images/search-icon.png"
                  className="ps-0 srch-icon"
                  style={{ width: "45px", height: "34px" }}
                />
              </button>
            </div>
            }
          </div>

          <div className="col-12 col-md-12 col-lg-3 mt-lg-4 mt-md-4  mt-4 d-flex justify-content-lg-end justify-content-md-center justify-content-center pe-lg-4 ps-sm-5 pe-0 icon-group">
            <p className="text-white counted-value pe-2">{x}</p>

            {showWishlist == false ? (
              <img
                src="/asset/images/heart-icon.png"
                className="ps-1  pe-3 header-imagesx"
                style={{ width: "55px", height: "34px" }}
                onClick={() => handleWishlistData(true)}
              />
            ) : (
              <img
                src="/asset/images/heart-fill.svg"
                className="ps-1  pe-3 header-imagesx"
                style={{ width: "55px", height: "34px" }}
                onClick={() => {
                  handleWishlistData(true);
                  getBack();
                }}
              />
            )}

            <img
              src="/asset/images/msg-icon.png"
              className="ps-2 pe-3  header-imagesx"
              style={{ width: "55px", height: "34px" }}
            />
            <img
              src="/asset/images/Ellipse 3.png"
              className="ps-2 pe-3  header-imagesx"
              style={{ width: "55px", height: "34px" }}
            />
          </div>
        </div>    
      </div>
    </>
  );
}

export default Header;