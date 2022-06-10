import React from 'react';

export default function Servicesection() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mt-4">
          <div className="col">
            <div className="p-4 m-3 border section text-light">
              <div>
                <i className="fa-solid fa-check float-start fs-2 pe-3"></i>
              </div>
              <div className="fw-bold fs-5">Quality Product</div>
            </div>
          </div>
          <div className="col">
            <div className="p-4 m-3 border section text-light">
              <div>
                <i className="fa-solid fa-truck-fast float-start fs-2 pe-3"></i>
              </div>
              <div className="fw-bold fs-5">Free Shipping</div>
            </div>
          </div>
          <div className="col">
            <div className="p-4 m-3 border section text-light">
              <div>
                <i className="fa-solid fa-right-left float-start fs-2 pe-3"></i>
              </div>
              <div className="fw-bold fs-5">14-Day Return</div>
            </div>
          </div>
          <div className="col">
            <div className="p-4 m-3 border section text-light">
              <div>
                <i className="fa-solid fa-phone-volume float-start fs-2 pe-3"></i>
              </div>
              <div className="fw-bold fs-5">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row p-0  mt-5 row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          <div className="col-lg-3 col-md-3 col-sm-6 col-6  section">
            <div className="text-light">
              <div>
                <i className="fa-solid fa-check float-start pe-3 fs-2"></i>
              </div>
              <div className="fw-bold fs-5">Quality Product</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6  section1">
            <span></span>
            <div>Free Shipping</div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6  section">
            <span></span>
            <div>Quality Product</div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6  section1">
            <span></span>
            <div>Quality Product</div>
          </div>
        </div>
      </div> */}
    </>
  );
}
