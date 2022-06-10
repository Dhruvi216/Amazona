import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
// import data from '../data';

export default function ProductScreen(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  const { id: productId } = params;

  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  // const product = data.products.find((x) => x._id === productId);

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    navigate(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="productscreen">
          <Link to="/">Back to result</Link>
          <div className="row top g-0">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="large img-fluid"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Price : ${product.price}</li>
                <li>
                  Description: <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-6 p-3">
              <div className="card card-body">
                <ul className="p-0">
                  <li>
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-6 col-6">
                        Price
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 price fs-5">
                        <b>${product.price}</b>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row pt-1">
                      <div className="col-lg-8 col-md-8 col-sm-6 col-6">
                        Status
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row py-2">
                          <div className="col-lg-8 col-md-8 col-sm-6 col-6">
                            Qty
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block rounded mt-3 mb-0"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
