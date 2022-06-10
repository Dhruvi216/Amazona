import React from 'react';
// import React, { useEffect } from 'react';
// import { listProductCategories, listProducts } from '../actions/productActions';
import SlideScreen from './SlideScreen';
import Servicesection from './Servicesection';
import Categorysection from '../components/Categorysection';
import CategoryFilterScreen from './CategoryFilterScreen';
// import Category from '../components/Category';

// import Product from '../components/Product';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// import { useDispatch, useSelector } from 'react-redux';
// import { listProducts } from '../actions/productActions';
export default function HomeScreen() {
  //   const dispatch = useDispatch();
  //   const productList = useSelector((state) => state.productList);
  //   // const { loading, error } = productList;
  //   const { loading, error, products } = productList;
  //   // const productCategoryList = useSelector((state) => state.categoryList);
  //   // const { categories } = productCategoryList;
  //   useEffect(() => {
  //     dispatch(listProducts({}));
  //     // dispatch(listProducts({}), listProductCategories({}));
  //   }, [dispatch]);
  return (
    <div>
      <SlideScreen />
      <Servicesection />
      <Categorysection />
      <CategoryFilterScreen />
      {/* {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="container">
            <div className="row mt-5 mx-2">
              <div className="col-lg-12 d-flex justify-content-center">
                
              </div>
              <div className="col-lg-12">
                <div className="row">
                  {products.map((product) => (
                    <Product
                      key={product._id}
                      product={product}
                      categories={product.categories}
                    ></Product>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
