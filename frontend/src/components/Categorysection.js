import React from 'react';
import { Link } from 'react-router-dom';
import bgcategoryimg from '../images/banner-04.jpg';
import bgcategoryimg1 from '../images/banner-05.jpg';
import bgcategoryimg2 from '../images/banner-07.jpg';
import bgcategoryimg3 from '../images/banner-08.jpg';
import bgcategoryimg4 from '../images/banner-09.jpg';
// import bgcategoryimg5 from '../images/offer-1.png';
// import bgcategoryimg6 from '../images/offer-2.png';
// import img2 from '../images/product-detail-03.jpg';
// // import img3 from '../images/product-15.jpg';

function Categorysection() {
  return (
    <>
      <div className="container m-auto mt-3">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card m-2">
              <img
                src={bgcategoryimg}
                alt="women"
                className="image border border-2 position-relative"
              />
              <div className="position-absolute p-3 cardtext">
                <span className="fs-3">Women</span>
                <br />
                <span className="ps-1">New trend</span>
              </div>
              <div className="overlay">
                <div className="text">
                  <button>
                    <Link to="" className="text-decoration-none text-light">
                      Shop Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card m-2">
              <img
                src={bgcategoryimg1}
                alt="men"
                className="image border border-2 position-relative"
              />
              <div className="position-absolute p-3 cardtext">
                <span className="fs-3">Men</span>
                <br />
                <span className="ps-1">New trend</span>
              </div>
              <div className="overlay">
                <div className="text">
                  <button>
                    <Link to="" className="text-decoration-none text-light">
                      Shop Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card m-2">
              <img
                src={bgcategoryimg2}
                alt="watches"
                className="image border border-2 position-relative"
              />
              <div className="position-absolute p-3 cardtext">
                <span className="fs-3">Watches</span>
                <br />
                <span className="ps-1">Spring 2020</span>
              </div>
              <div className="overlay">
                <div className="text">
                  <button>
                    <Link to="" className="text-decoration-none text-light">
                      Shop Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card m-2">
              <img
                src={bgcategoryimg3}
                alt="bags"
                className="image border border-2 position-relative"
              />
              <div className="position-absolute p-3 cardtext">
                <span className="fs-3">Bags</span>
                <br />
                <span className="ps-1">Spring 2020</span>
              </div>
              <div className="overlay">
                <div className="text">
                  <button>
                    <Link to="" className="text-decoration-none text-light">
                      Shop Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card m-2">
              <img
                src={bgcategoryimg4}
                alt="Accessories"
                className="image border border-2 position-relative"
              />
              <div className="position-absolute p-3 cardtext">
                <span className="fs-3">Accessories</span>
                <br />
                <span className="ps-1">Spring 2020</span>
              </div>
              <div className="overlay">
                <div className="text">
                  <button>
                    <Link to="" className="text-decoration-none text-light">
                      Shop Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------collection----------------------- */}
      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-2 m-auto">
            <div className="collectionpart pt-2 ps-2 border border-5 rounded-3">
              <div className="text-end bgcategoryimg bgcategoryimg5 p-5">
                <div className="fs-4 text-uppercase categorytext">
                  20% off the all order
                </div>
                <div className="fs-1">Spring Collection</div>
                <button className="button mt-3"> Shop now</button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-2 m-auto">
            <div className="collectionpart pt-2 ps-2 border border-5 rounded-3">
              <div className="text-start bgcategoryimg bgcategoryimg6 p-5">
                <div className="fs-4 text-uppercase categorytext">
                  20% off the all order
                </div>
                <div className="fs-1">Winter Collection</div>
                <button className="button mt-3"> Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="container-fluid m-auto">
    //   <div className="card-area  d-flex justify-content-between h-100 p-3 ">
    //     <div className="card-section  h-100  w-100">
    //       <div className="row">
    //         <div className="col-lg-4 col-md-3 col-sm-6 col-6">
    //           <div className="card position-relative">
    //             <div className="flip-card position-absolute end-0 invisible">
    //               <div className="flip-card_container h-100 position-absolute end-0 w-100">
    //                 <div className="card-front h-100 start-0 top-0 w-100 position-absolute bg-light">
    //                   <div className="card-front_tp card-front_tp--city text-light d-flex align-items-center flex-column justify-content-center">
    //                     <h4 className="mt-1">Women</h4>
    //                     <p className="fs-3">Spring 2018</p>
    //                   </div>
    //                   <div className="card-front_bt d-flex align-items-center justify-content-center">
    //                     <p className="card-front_text-view card-front_text-view--city fs-5 mt-1 text-gray3">
    //                       Shop now
    //                     </p>
    //                   </div>
    //                 </div>
    //                 <div className="card-back  h-100 start-0 top-0 w-100 position-absolute bg-light">
    //                   <img
    //                     src={img1}
    //                     alt="img1"
    //                     className="img-fluid w-100 h-100 "
    //                   />

    //                 </div>
    //               </div>
    //             </div>
    //             <div className="inside-page bg-light p-3 h-100 position-absolute end-0">
    //               <div className="inside-page_container w-100 h-100 d-flex align-items-center  flex-column text-center">
    //                 <h3 className="inside-page_heading inside-page_heading--city pb-3 w-100 fs-5 mt-1 text-gray3">
    //                   For urban lovers
    //                 </h3>
    //                 <p className="inside-page_text text-dark1">
    //                   As cities never sleep, there are always something going
    //                   on, no matter what time!
    //                 </p>
    //                 <Link
    //                   to=""
    //                   className="inside-page_btn inside-page_btn--city bg-transparent border-3 fs-5 mt-4 overflow-hidden p-1 position-relative text-decoration-none w-100"
    //                 >
    //                   View deals
    //                 </Link>
    //               </div>
    //             </div>

    //           </div>

    //         </div>

    //         <div className="col-lg-4 col-md-3 col-sm-6 col-6">
    //           <div className="card position-relative">
    //             <div className="flip-card position-absolute end-0 invisible">
    //               <div className="flip-card_container h-100 position-absolute end-0 w-100">
    //                 <div className="card-front h-100 start-0 top-0 w-100 position-absolute bg-light">
    //                   <div className="card-front_tp card-front_tp--ski text-light d-flex align-items-center flex-column justify-content-center">
    //                     <h4 className="mt-1">Men</h4>
    //                     <p className="fs-3">Spring 2018</p>
    //                   </div>
    //                   <div className="card-front_bt d-flex align-items-center justify-content-center">
    //                     <p className="card-front_text-view card-front_text-view--ski fs-5 mt-1 text-gray3">
    //                       Shop now
    //                     </p>
    //                   </div>
    //                 </div>
    //                 <div className="card-back  h-100 start-0 top-0 w-100 position-absolute bg-light">
    //                   <img
    //                     src={img2}
    //                     alt="img1"
    //                     className="img-fluid w-100 h-100 "
    //                   />

    //                 </div>
    //               </div>
    //             </div>
    //             <div className="inside-page bg-light p-3 h-100 position-absolute end-0">
    //               <div className="inside-page_container w-100 h-100 d-flex align-items-center  flex-column text-center">
    //                 <h3 className="inside-page_heading inside-page_heading--ski pb-3 w-100 fs-5 mt-1 text-gray3">
    //                   For urban lovers
    //                 </h3>
    //                 <p className="inside-page_text text-dark1">
    //                   As cities never sleep, there are always something going
    //                   on, no matter what time!
    //                 </p>
    //                 <Link
    //                   to=""
    //                   className="inside-page_btn inside-page_btn--ski bg-transparent border-3 fs-5 mt-4 overflow-hidden p-1 position-relative text-decoration-none w-100"
    //                 >
    //                   View deals
    //                 </Link>
    //               </div>
    //             </div>

    //           </div>

    //         </div>

    //       </div>
    //     </div>

    //   </div>

    // </div>
  );
}

export default Categorysection;
