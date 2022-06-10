import React from 'react';
import DashBoardScreen from '../screens/DashboardScreen';
// import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import OrderListScreen from '../screens/OrderListScreen';
import ProductCreateScreen from '../screens/ProductCreateScreen';
import ProductListScreen from '../screens/ProductListScreen';
export default function DashboardMenu() {
  return (
    <>
      <div className="row g-0">
        <div className="d-flex align-items-start">
          <div className="col-lg-2 col-md-2 col-sm-2 col-2 sidebar">
            <div
              className="nav flex-column nav-pills border-end"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {/*------------------------------------------------- dashboard */}
              <button
                className="nav-link active text-start text-light"
                id="v-pills-dashboard-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-dashboard"
                type="button"
                role="tab"
                aria-controls="v-pills-dashboard"
                aria-selected="true"
              >
                <i className="fa-solid fa-house me-3"></i>
                Dashboard
              </button>

              {/* --------------------------------------------------------------product */}
              <button
                className="nav-link text-start text-light"
                id="v-pills-products-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-products"
                type="button"
                role="tab"
                aria-controls="v-pills-products"
                aria-selected="false"
              >
                <i className="icon fa-solid fa-bag-shopping me-3"></i>
                Products
              </button>
              {/* --------------------------------------------------------------add-product */}
              <button
                className="nav-link text-start text-light"
                id="v-pills-addproducts-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-addproducts"
                type="button"
                role="tab"
                aria-controls="v-pills-addproducts"
                aria-selected="false"
              >
                <i className="fa-solid fa-cart-plus me-3"></i>
                Add Product
              </button>

              {/* ---------------------------------------------------------categories */}
              <button
                className="nav-link text-start text-light"
                id="v-pills-categories-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-categories"
                type="button"
                role="tab"
                aria-controls="v-pills-categories"
                aria-selected="false"
              >
                <i className="fa-solid fa-list me-3"></i>
                Categories
              </button>

              {/* ---------------------------------------------------------orders */}

              <button
                className="nav-link text-start text-light"
                id="v-pills-Orders-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-Orders"
                type="button"
                role="tab"
                aria-controls="v-pills-Orders"
                aria-selected="false"
              >
                <i className="fa-solid fa-basket-shopping me-3"></i>
                Orders
              </button>

              {/* ---------------------------------------------------------users */}
              <button
                className="nav-link text-start text-light"
                id="v-pills-users-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-users"
                type="button"
                role="tab"
                aria-controls="v-pills-users"
                aria-selected="false"
              >
                <i className="fa-solid fa-user me-3"></i>
                Users
              </button>
            </div>
          </div>

          <div className="col-lg-10">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-dashboard"
                role="tabpanel"
                aria-labelledby="v-pills-dashboard-tab"
              >
                <DashBoardScreen />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-products"
                role="tabpanel"
                aria-labelledby="v-pills-products-tab"
              >
                <ProductListScreen />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-addproducts"
                role="tabpanel"
                aria-labelledby="v-pills-addproducts-tab"
              >
                <ProductCreateScreen />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-categories"
                role="tabpanel"
                aria-labelledby="v-pills-categories-tab"
              >
                categories
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-Orders"
                role="tabpanel"
                aria-labelledby="v-pills-Orders-tab"
              >
                <OrderListScreen />
                {/* <OrderHistoryScreen /> */}
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-users"
                role="tabpanel"
                aria-labelledby="v-pills-users-tab"
              >
                user
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
