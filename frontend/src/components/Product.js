import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mt-4 product-item">
      <div className="card" key={product._id}>
        <div className="card-details">
          <img
            className="medium card-img-top img-fluid"
            src={product.image}
            alt={product.name}
          />
          <div className="text-title">
            <Link
              to={`/product/${product._id}`}
              className="text-decoration-none"
            >
              <h4>{product.name}</h4>
            </Link>
          </div>
          <div className="text-body d-flex justify-content-between">
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
          </div>
          <div className="text-body">
            <div className="price">${product.price} </div>
          </div>
        </div>
        <button className="card-button">
          <Link to={`/product/${product._id}`}>More info</Link>
        </button>
      </div>

      {/* <div className="card" key={product._id}>
        <Link to={`/product/${product._id}`}>
          <img
            className="medium card-img-top img-fluid"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <div className="price">${product.price} </div>
        </div>
      </div> */}
    </div>
  );
}
