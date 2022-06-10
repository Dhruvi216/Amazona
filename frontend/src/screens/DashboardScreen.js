import React from 'react';

export default function DashboardScreen() {
  return (
    <>
      <div className="row">
        <h1 className="px-5 pt-5 fs-1">Dashboard</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 m-auto">
          <div className="card card-body mb-4 shadow-sm">
            <div className="icontext align-items-center d-inline-flex py-2">
              <span className="icon icon-sm rounded-circle alert-primary me-3">
                <i className="text-primary fa-solid fa-dollar-sign "></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Total Sales</h6>
                <span>$22,678</span>
              </div>
            </div>
          </div>
        </div>
        {/*---------------------col-1-------------------- */}
        <div className="col-lg-3 m-auto">
          <div className="card card-body mb-4 shadow-sm">
            <div className="icontext align-items-center d-inline-flex py-2">
              <span className="icon icon-sm rounded-circle alert-success me-3">
                <i className="text-success fa-solid fa-bag-shopping"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Total Orders</h6>
                <span>130</span>
              </div>
            </div>
          </div>
        </div>
        {/*---------------------col-2-------------------- */}
        <div className="col-lg-3 m-auto">
          <div className="card card-body mb-4 shadow-sm">
            <div className="icontext align-items-center d-inline-flex py-2">
              <span className="icon icon-sm rounded-circle alert-warning me-3">
                <i className="text-warning fa-solid fa-basket-shopping"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Total Products</h6>
                <span>70</span>
              </div>
            </div>
          </div>
        </div>
        {/*---------------------col-3-------------------- */}
      </div>

      <div className="row m-2 justify-content-center">
        <div className="col-xl-6 col-lg-12">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Sale Statistics</h5>
              <img
                src="../images/static.png"
                alt="static img"
                className="w-100 static-img"
              />
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-12">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Products statistics</h5>
              <img
                src="../images/product.png"
                alt="static img"
                className="w-100 static-img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* -----------------row-3----------------- */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Latest orders</h5>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <b>User</b>
                  </td>
                  <td>user@example.com</td>
                  <td>$345</td>
                  <td>
                    <span className="badge rounded-pill alert-success">
                      Paid At Today at 10:30
                    </span>
                  </td>
                  <td>Today at 10:13 AM</td>
                  <td className="d-flex justify-content-end align-item-center">
                    <a href="/order" className="text-success">
                      <i className="fa-solid fa-eye"></i>
                    </a>
                  </td>
                </tr>
                {/* ---row---1---- */}
                <tr>
                  <td>
                    <b>User</b>
                  </td>
                  <td>user@example.com</td>
                  <td>$345</td>
                  <td>
                    <span className="badge rounded-pill alert-danger">
                      Paid At Today at 10:30
                    </span>
                  </td>
                  <td>Today at 10:13 AM</td>
                  <td className="d-flex justify-content-end align-item-center">
                    <a href="/order" className="text-success">
                      <i className="fa-solid fa-eye"></i>
                    </a>
                  </td>
                </tr>
                {/* ----row---2---- */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* -----------------row-4----------------- */}
    </>
  );
}

// import React from 'react';
// import { useSelector } from 'react-redux';
// import LatestOrder from '../components/admin-dashboard/LatestOrder';
// import ProductsStatistics from '../components/admin-dashboard/ProductsStatistics';
// import SaleStatistics from '../components/admin-dashboard/SaleStatistics';
// import TopTotal from '../components/admin-dashboard/TopTotal';
// export default function DashBoardScreen() {
//   const orderList = useSelector((state) => state.orderList);
//   const { loading, error, orders } = orderList;
//   const productList = useSelector((state) => state.productList);
//   const { products } = productList;
//   return (
//     <>
//       <div className="container-fluid">
//         <h2 className="content-title"> Dashboard </h2>
//         <div>
//           {/* Top Total */}
//           <TopTotal orders={orders} products={products} />

//           <div className="row">
//             {/* STATICS */}
//             <SaleStatistics />
//             <ProductsStatistics />
//           </div>

//           {/* LATEST ORDER */}
//           <div className="card mb-4 shadow-sm">
//             <LatestOrder orders={orders} loading={loading} error={error} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
