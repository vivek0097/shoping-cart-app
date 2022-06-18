import React, { useEffect, useState, useImperativeHandle, forwardRef, useRef } from "react";
import "./product.css";

const Product = (props, ref) => {
  // console.log(props);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(8);
  const [hideBtn, setHideBtn] = useState(true)
  const [wishlistVisible, setWishlistVisible] = useState(4)

  useEffect(() => {

    if (props.filterData.length == 0) {
      setData(props.data);
    } else {
      setData(props.filterData);
    }
    setHideBtn(props.toggle)

  }, [props]);
  // console.log(props);
  //console.log(props.toggle, hideBtn)
  // ------ Load more- function------------

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 8);
    setData([...data]);
    console.log(data)

  };


  //--------wishlist load more function------------
  const showMoreWishlistItem = () => {

    setWishlistVisible((prevValue) => prevValue + 4);
    setData([...data]);

  }

  // ------for Load more and wishlish loadmore--end-----------
  // console.log(props);


  useImperativeHandle(ref, () => ({
   resetValues: () => {
    setVisible(8);
    // setHideBtn(true);
    setWishlistVisible(4)
   }
  }));

console.log(hideBtn)

  return (
    <div className="">

   
    <p className="mt-5 mb-5 heading-all ps-2"
            hidden={props.toggle}
          >
            <span className="all-txt">{props.category}</span>
            <span className="ps-3">
              {props.filterData.length === 0 ? (
                <span>( {props.data.length})</span>
              ) : (
                <span>( {props.filterData.length} items)</span>
              )}
            </span>
          </p>
    
       
          
          {props.toggle === true ? <button onClick={props.getBack} className="back-btn mb-5 ms-2 mt-5">← Back</button> : <div></div>}
          {data !== 0 && (
            <div className="container product-crds d-flex  flex-row flex-wrap justify-content-start pe-0 ">
              {props.filterData?.length === 0
                ? data.slice(0, visible).map((item) => (
                    <div className="card product-cards mb-5  " key={item.id}>
                      <button
                        className="wishlist-btn active"
                        type="button"
                        onClick={() => props.handleEvent(item)}
                        onChange={props.addTwoWishlist}
                      >
                        {
                          hideBtn === false ?
                          <img
                          src={
                            props.addedIDs.indexOf(item.id) === -1
                              ? "/asset/images/heart-outline.svg"
                              : "/asset/images/heart-fill.svg"
                          }
                          className="wishlist-image"
                          style={{ width: "22px", height: "21px" }}
                          
    
                        />
                        :
                          <img
                         src="/asset/images/heart-fill.svg"
                          className="wishlist-image"
                          style={{ width: "22px", height: "21px" }}
                          
                        />
                        }
                      </button>
    
                      <div className="mt-2">
                        <img
                          alt="laptop"
                          src={item.image_url}
                          className="p-images d-flex justify-content-center ps-5"
                          style={{ width: "190px", height: "125px" }}
                        />
                      </div>
    
                      <div className="ps-5 ps-lg-2 d-flex mt-2">
                        <p className="ps-0 ps-lg-3 pe-2 card-txt2">₹{item.price}</p>
                      
                        <p className="ps-5 pe-2 card-txt2">{item.created_on}</p>
                      </div>
                      <div className="d-block mt-0">
                        <p className="ps-lg-4 pe-lg-2 ps-5 ">{item.title}</p>
                      </div>
                      <div className="mt-0 d-flex">
                        <p className="ps-lg-4  ps-5">{item.rating}</p>
                       
                      </div>
                      <div className="mt-0 ps-lg-2 ps-md-0 ps-5">
                        <p className="d-flex justify-content-lg-center justify-content-md-center justify-content-sm-center  tag-txt ">{item.tags}</p>
                      </div>
                    </div>
                  ))
                : data.slice(0, hideBtn == true ? wishlistVisible : visible ).map((item) => (
                    <div className="card product-cards mb-5" key={item.id}>
                      <button className="wishlist-btn p-2" type="button"
                       onClick={() => props.handleEvent(item)}
                      >
                        {" "}
                        {
                          hideBtn === false ?
                          <img
                          src={
                            props.addedIDs.indexOf(item.id) === -1
                              ? "/asset/images/heart-outline.svg"
                              : "/asset/images/heart-fill.svg"
                          }
                          className="wishlist-image"
                          style={{ width: "22px", height: "21px" }}
                          
    
                        />
                        :
                          <img
                         src="/asset/images/heart-fill.svg"
                          className="wishlist-image"
                          style={{ width: "22px", height: "21px" }}
                          
                        />
                        }
                      </button>
                      <div className="mt-2">
                        <img
                          alt="laptop"
                          src={item.image_url}
                          className="p-images d-flex justify-content-center ps-5"
                          style={{ width: "190px", height: "125px" }}
                        />
                      </div>
    
                      <div className="ps-5 ps-lg-2 d-flex mt-2">
                        <p className="ps-0 ps-lg-3 pe-2 card-txt2">₹{item.price}</p>
                        <p className="ps-5 pe-2 card-txt2">{item.created_on}</p>
                      </div>
                      <div className="d-block mt-0">
                        <p className="ps-lg-4 ps-5">{item.title}</p>
                      </div>
                      <div className="mt-0">
                        <p className="ps-lg-4  ps-5">{item.rating}</p>
                      </div>
                      <div className="mt-0 ps-lg-2 ps-md-0 ps-5">
                        <p className="d-flex justify-content-lg-center justify-content-md-center justify-content-sm-center  tag-txt">{item.tags}</p>
                      </div>
                    </div>
                  ))}
            </div>
          )}
    
    {/* ----hiding the loadmore btn from wishlist and showing more item also--- */}
    {hideBtn == false ? 
      <div className="loadmore-btn d-flex justify-content-center">
      {
      props.filterData.length === 0 && visible <= data.length  ? (
        <button className="loadm-btn  mb-5" onClick={() => showMoreItems()}>
          Load More
        </button>
      ) 
       :  props.filterData.length !== 0 && visible <= props.filterData.length  ? (
        <button className="loadm-btn  mb-5" onClick={() => showMoreItems()}>
          Load More
        </button>
      ) : null
    }
    </div>
    
      : 
    wishlistVisible <= props.x ? 
    <div className="loadmore-btn d-flex justify-content-center">
    <button className="loadm-btn  mb-5 " onClick={() => showMoreWishlistItem()}>
    Load More
    </button></div> : <div></div> 
     }
        
    
        </div>
  );
};
export default  forwardRef(Product);