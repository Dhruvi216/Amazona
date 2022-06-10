import React from 'react';
// import { Link } from 'react-router-dom';
// import slide1 from '../images/slider/slide-05.jpg';
// import slide2 from '../images/slider/slide-06.jpg';
// import slide3 from '../images/slider/slide-07.jpg';

export default function SlideScreen() {
  return (
    <>
      <div
        id="carouselExampleLight"
        className="carousel carousel-light slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleLight"
            data-bs-slide-to="0"
            className="active bgimg1"
            aria-current="true"
            aria-label="Slide 1"
          >
            {/* <span className="position-absolute">Women’s Wear</span> */}
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleLight"
            className="bgimg2"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            {/* <span className="position-absolute">Women’s Wear</span> */}
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleLight"
            className="bgimg3"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            {/* <span className="position-absolute">Women’s Wear</span> */}
          </button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active bgimg bgimg1"
            data-bs-interval="10000"
          >
            {/* <img src="..." className="d-block " alt="" /> */}
            <div className="carousel-caption pt-0">
              <h3 className="p-3">Women Collection 2018</h3>
              <h1 className="text-uppercase">New arrivals</h1>
              <button className="button"> Shop now</button>
            </div>
          </div>
          <div className="carousel-item bgimg bgimg2" data-bs-interval="2000">
            {/* <img src="..." className="d-block w-100" alt="...sdfsf" /> */}
            <div className="carousel-caption pt-0">
              <h3 className="p-3">Men New-Season</h3>
              <h1 className="text-uppercase">Jackets & Coats</h1>
              <button className="button"> Shop now</button>
            </div>
          </div>
          <div className="carousel-item bgimg bgimg3">
            {/* <img src="..." className="d-block w-100" alt="..sfsfsdf." /> */}
            <div className="carousel-caption pt-0">
              <h3 className="p-3">Men Collection 2018</h3>
              <h1 className="text-uppercase">New season</h1>
              <button className="button"> Shop now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleLight"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleLight"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div
        id="carouselExampleDark"
        className="carousel carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div
            className="carousel-item active bgimg bgimg1"
            data-bs-interval="10000"
          >
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item bgimg bgimg2" data-bs-interval="2000">
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item bgimg bgimg3">
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      {/* <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner text-center text-light">
          <div className="carousel-item active bgimg bgimg1 d-flex justify-content-center align-items-center">
            <div className="carousel-text p-3">
              <h2 className="p-3">Women Collection 2020</h2>
              <h1 className="text-uppercase pb-3">New Arrivals</h1>
              <button className="text-uppercase rounded-pill border-0 px-4 py-2 shop">
                <h6 className="pt-1">Shop now</h6>
              </button>
            </div>
          </div>
          <div className="carousel-item bgimg bgimg2 d-flex justify-content-center align-items-center">
            <div className="carousel-text p-3">
              <h2 className="p-3">Women Collection 2020</h2>
              <h1 className="text-uppercase pb-3">New Arrivals</h1>
              <button className="text-uppercase rounded-pill border-0 px-4 py-2 shop">
                <h6 className="pt-1">Shop now</h6>
              </button>
            </div>
          </div>
          <div className="carousel-item bgimg bgimg3 d-flex justify-content-center align-items-center">
            <div className="carousel-text p-3">
              <h2 className="p-3">Women Collection 2020</h2>
              <h1 className="text-uppercase pb-3">New Arrivals</h1>
              <button className="text-uppercase rounded-pill border-0 px-4 py-2 shop">
                <h6 className="pt-1">Shop now</h6>
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <div className="navbar-bg">
        {/* <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active rounded-circle"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            className="rounded-circle"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            className="rounded-circle"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={slide1}
              className="img-fluid rounded w-100"
              alt={'slide1'}
            />
            <div className="carousel-caption slide-text text-start py-0 my-0">
              <h3>Women Collection 2022</h3>
              <p className="text-uppercase">NEW SEASON</p>
              <button>Shop now</button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide2} className="img-fluid w-100" alt={'slide2'} />
            <div className="carousel-caption slide-text text-start py-0 my-0">
              <h3>Men New-Season</h3>
              <p className="text-uppercase">JACKETS & COATS</p>
              <button>Shop now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="img-fluid w-100" alt={'slide3'} />
            <div className="carousel-caption slide-text text-start py-0 my-0">
              <h3>Men Collection 2022</h3>
              <p className="text-uppercase">NEW ARRIVALS</p>
              <button>Shop now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

        {/* <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active slidebutton rounded-circle"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="slidebutton rounded-circle"
          ></button>
          <button
            type="button"
            className="slidebutton rounded-circle"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src={slide1}
                    className="img-fluid rounded"
                    alt={'slide1'}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="slide-text rounded-circle py-5 text-center">
                    <h1 className="fw-bold fs-1">MEN'S JEANS COLLECTION</h1>
                    <p className="text-secondary">
                      New stylish shirts,pants & Accessories
                    </p>
                    <button>Shop collection</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="img-fluid w-100" alt={'slide2'} />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="img-fluid w-100" alt={'slide3'} />
          </div> 
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon text-gray-400"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon text-gray-400"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      </div>
    </>
  );
}
