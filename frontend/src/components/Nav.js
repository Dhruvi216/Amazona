import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../actions/userActions';
export default function Nav() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  //change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div>
      <nav
        className={
          color
            ? 'navbar navbar-expand-lg navbar-light fixed-top navbar-bg'
            : 'navbar navbar-expand-lg navbar-light fixed-top'
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="#">
            Estore
          </Link>
          <button
            className="navbar-toggler text-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  Contact
                </Link>
              </li>

              <li className="nav-item ps-2">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to="/cart"
                >
                  Cart
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )}
                </Link>
              </li>

              {userInfo ? (
                // <li className="nav-item dropdown ps-1">
                <li className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle "
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userInfo.name}
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        User Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/orderhistory" className="dropdown-item">
                        Order History
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="#signout"
                        onClick={signoutHandler}
                        className="dropdown-item"
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item ps-1">
                  <Link to="/signin" className="nav-link">
                    Sign In
                  </Link>
                </li>
              )}
              {userInfo && userInfo.isAdmin && (
                <li className="nav-item ps-1">
                  <Link to="/admin" className="nav-link">
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* <header className="row text-dark g-0 fixed-top">
        <nav className="navbar navbar-expand-lg py-2">
          <div className="container-fluid">
            
            <Link className="navbar-brand text-dark fs-2" to="/">
              Amazona
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex justify-content-end me-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                <li className="nav-item ps-2">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ps-2">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item ps-2">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item ps-2">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item ps-2">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav-item ps-2">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/cart"
                  >
                    Cart
                    {cartItems.length > 0 && (
                      <span className="badge">{cartItems.length}</span>
                    )}
                  </Link>
                </li>

                {userInfo ? (
                  <li className="nav-item dropdown ps-1">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle text-dark"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userInfo.name}
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/profile" className="dropdown-item">
                          User Profile
                        </Link>
                      </li>
                      <li>
                          <Link to="/orderhistory" className="dropdown-item">
                            Order History
                          </Link>
                        </li>

                      <li>
                        <Link
                          to="#signout"
                          onClick={signoutHandler}
                          className="dropdown-item"
                        >
                          Sign Out
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item ps-1">
                    <Link to="/signin" className="nav-link">
                      Sign In
                    </Link>
                  </li>
                )}
                {userInfo && userInfo.isAdmin && (
                  <li className="nav-item ps-1">
                    <Link to="/admin" className="nav-link">
                      Admin
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header> */}
    </div>
  );
}
