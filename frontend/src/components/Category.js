import React from 'react';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import product1 from '../images/product-01.jpg';
// import data from '../data.js';
export default function Category() {
  // const [items, setItems] = useState(data);

  return (
    <>
      <div className="product-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button className="btn btn-warning">All</button>
          <button className="btn btn-warning">Shirts</button>
          <button className="btn btn-warning">Pants</button>
          <button className="btn btn-warning">Abc</button>
        </div>
      </div>

      <div className="product-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {/* {items.map((elem) => {
                const { id, name, image, price, rating, numReviews } = elem;

                return (
                  <>
                    <div className="item1 col-2 col-md-6 col-lg-6 col-xl-4 my-5">
                      <div className="card">
                        <div className="card-details">
                          <img src={image} alt="" className="img-fluid" />
                          <div className="text-title">{name}</div>
                          <div className="text-body">{rating}</div>
                          <div className="d-flex justify-content-between">
                            <div className="text-body">{numReviews}</div>
                            <div className="text-body">{price}</div>
                          </div>
                        </div>
                        <button className="card-button">
                          <Link to="">More info</Link>
                        </button>
                      </div>
                    </div>
                  </>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react';

// export default function Category(props) {
//   const { category } = props;
//   return (
//     <div>
//       <button className="btn btn-warning w-100 mb-4" value="Pants">
//         {category}
//       </button>
//     </div>
//   );
// }
