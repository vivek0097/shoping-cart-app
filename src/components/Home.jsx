import React, { useEffect, useState, useRef, useCallback } from "react";
import Product from "./Product";
import "./home.css";
import Disclamer from "./Disclamer";
import List from "./List";
import Header from "./Header";

const Home = (showMoreItems, showMoreWishlistItem) => {
  const productRef = useRef();

  const [data, setData] = useState(List);
  const [dummyData, setDummyData] = useState(List);

  const [filterName, setFilterName] = useState("");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("All");
  const [catFilterName, setCatFilterName] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [temp, setTempData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [addedIDs, setAddedIDs] = useState([]);
  const [sortedWishlist, setSortedWishlist] = useState([]);
  const [notfound, setNotFound] = useState(false);
  const [dataNotFound, setDataNotFound] = useState(false);

  //------------for dropdown ------------------------
  let dropDownValues = [
    {
      value: "All",
      id: 0,
    },
    {
      value: "1",
      id: 1,
    },
    {
      value: "2",
      id: 2,
    },
    {
      value: "3",
      id: 3,
    },
    {
      value: "4",
      id: 4,
    },
    {
      value: "5",
      id: 5,
    },
  ];

  //--------this is for show wishlist header fun------------
  const handleWishlistData = (bool) => {
    setShowWishlist(bool);
  };

  //-----counter filter fun for wishlist---------

  const handleEvent = (obj) => {
    //console.log(obj);
    let tempArr = wishlist;

    let i = tempArr.findIndex((i) => i.id === obj.id);
    console.table(obj.id, i);

    if (i === -1) {
      tempArr.push(obj);

      setWishlist([...new Set([...tempArr])]);
    } else {
      let newArray = tempArr.filter((item) => item.id !== obj.id);
      console.log(newArray);
      setWishlist([...new Set([...newArray])]);
    }

    const ids = [...addedIDs];

    if (ids.indexOf(obj.id) === -1) {
      ids.push(obj.id);
    } else {
      ids.splice(ids.indexOf(obj.id), 1);
    }

    setAddedIDs([...new Set([...ids])]);
  };

  //-----------------
  //------Back button function-----------
  const getBack = () => {
    setShowWishlist(false);
    // setSortedWishlist([])
  };
  //---------------------
  const searchValue = useCallback((value) => {
    setSearch(value);
  }, []);

  //------------------- Search & Sorting ----------------------//

  useEffect(() => {
    let filterData = [];
    dummyData.map((item) => {
      if (search !== "") {
        switch (category) {
          case "All":
            if (rating == "All") {
              if (item.title.toLowerCase().includes(search.toLowerCase())) {
                filterData.push(item);
              }
            } else {
              if (
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                item.ratingValue == rating
              ) {
                filterData.push(item);
              }
            }
            break;
          case "Phones":
            if (rating == "All") {
              if (
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                item.type == "phone"
              ) {
                filterData.push(item);
              }
            } else {
              if (
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                item.ratingValue == rating &&
                item.type == "phone"
              ) {
                filterData.push(item);
              }
            }
            break;

          case "Laptops":
            if (rating == "All") {
              if (
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                item.type == "laptop"
              ) {
                filterData.push(item);
              }
            } else {
              if (
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                item.ratingValue == rating &&
                item.type == "laptop"
              ) {
                filterData.push(item);
              }
            }
            break;
          case "Televisions":
            if (rating == "All") {
              if (
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                item.type == "television"
              ) {
                filterData.push(item);
              }
            } else {
              if (
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                item.ratingValue == rating &&
                item.type == "television"
              ) {
                filterData.push(item);
              }
            }
            break;
        }
      }

      if (search === "") {
        switch (category) {
          case "All":
            if (rating == "All") {
              filterData.push(item);
            } else {
              if (item.ratingValue == rating) {
                filterData.push(item);
              }
            }
            break;
          case "Phones":
            if (rating == "All") {
              if (item.type == "phone") {
                filterData.push(item);
              }
            } else {
              if (item.ratingValue == rating && item.type == "phone") {
                filterData.push(item);
              }
            }
            break;

          case "Laptops":
            if (rating == "All") {
              if (item.type == "laptop") {
                filterData.push(item);
              }
            } else {
              if (item.ratingValue == rating && item.type == "laptop") {
                filterData.push(item);
              }
            }
            break;
          case "Televisions":
            if (rating == "All") {
              if (item.type == "television") {
                filterData.push(item);
              }
            } else {
              if (item.ratingValue == rating && item.type == "television") {
                filterData.push(item);
              }
            }
            break;
        }
      }
    });

    // console.log(filterData);
    if (filterData.length !== 0) {
      setDataNotFound(false);
      setData(filterData);
    } else {
      setDataNotFound(true);
    }
  }, [search, rating, category]);

  //--------------------------------------------------------//

  let categoryValues = [
    { name: "All" },

    { name: "Phones" },

    { name: "Laptops" },

    { name: "Televisions" },
  ];

  return (
    <>
      <section className="home-section">
        <Header
          // handleSetData={handleSetData}
          temp={temp}
          filterData={filterData}
          x={wishlist.length}
          handleWishlistData={handleWishlistData}
          showWishlist={showWishlist}
          wishListData={wishlist}
          getBack={getBack}
          search={searchValue}
          setNotFound={setDataNotFound}
        ></Header>

        <div className="container-fluid mt-0 ">
          {showWishlist == true ? (
            <div></div>
          ) : (
            <div className="row artcl-bg">
              <div className="col-12 col-md-8 col-lg-8 d-flex justify-content-start  ps-lg-3 ps-0 ">
                <button className="cat-btn1 ms-2 pe-3">
                  <strong>Catagories</strong>
                </button>
                <div className="line-article"></div>

                {categoryValues.map((item) => {
                  return (
                    <button
                      className={
                        item.name === category
                          ? " cat-btn pe-3 ps-3 active"
                          : "cat-btn pe-3 ps-3"
                      }
                      onClick={(e) => {
                        setCategory(e.target.innerText);
                        productRef.current.resetValues();
                      }}
                    >
                      <strong>{item.name}</strong>
                    </button>
                  );
                })}
              </div>
              <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-end  pe-lg-4 pe-md-5 pe-4">
                <p className="mt-2 rate-heading">
                  <strong>Rating</strong>
                </p>
                <div className="dropdown ps-0">
                  <button
                    className="dpdwn-btn  dropdown-toggle ps-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* {filterName.length ? filterName : "All"} */}
                    {rating}
                  </button>
                  <ul
                    className="dropdown-menu dpwn-menu "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {dropDownValues.map((items) => (
                      <li
                        className="py-1 px-2 text-capitalize table-filter-item dropdown-item d-flex justify-content-start"
                        key={items.id}
                        onClick={(e) => setRating(e.target.innerText)}
                      >
                        {items.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container home-ct  pe-0">
          <p hidden={!notfound} className="mb-0 item__notMatch text-dark ">
            <b className="item__notMatchBg">
              No items matches this rating value
            </b>
          </p>
          <p hidden={!dataNotFound} className="mb-0 item__notMatch text-dark ">
            <b className="item__notMatchBg">Data Not Found </b>
          </p>

          <div className="card " hidden={notfound || dataNotFound}>
            {/* -----showing wishlist added item conditionally--------- */}

            {showWishlist === true ? (
              // -------wislist.length------for if no data added------
              wishlist.length === 0 ? (
                <span className="container d-flex justify-content-center mt-5 err-wishlist text-dark">
                  <b>Item's Not Added</b>
                </span>
              ) : (
                <Product
                  // data={wishlist}
                  // filterData={ wishlist }
                  showMoreItems={showMoreItems}
                  addedIDs={addedIDs}
                  getBack={getBack}
                  toggle={showWishlist}
                  showMoreWishlistItem={showMoreWishlistItem}
                  x={wishlist.length}
                  data={sortedWishlist.length === 0 ? wishlist : sortedWishlist}
                  filterData={
                    sortedWishlist.length === 0 ? wishlist : sortedWishlist
                  }
                  catFilterName={catFilterName}
                  handleEvent={handleEvent}
                  ref={productRef}
                />
              )
            ) : (
              <Product
                data={data}
                filterData={filterData}
                showMoreItems={showMoreItems}
                handleEvent={handleEvent}
                addedIDs={addedIDs}
                toggle={showWishlist}
                showMoreWishlistItem={showMoreWishlistItem}
                x={wishlist.length}
                catFilterName={catFilterName}
                category={category}
                ref={productRef}
              />
            )}
          </div>
        </div>
        {/* -----------hiding the disclamer component------ */}
        {showWishlist === false ? (
          <div className="container ">
            <Disclamer />
          </div>
        ) : (
          <div></div>
        )}
      </section>
    </>
  );
};

export default Home;
