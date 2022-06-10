import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
// import Category from '../components/Category.js';
// import data from '../data.js';

export default function CategoryFilterScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  //   const { loading, error } = productList;
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts({}));
    // dispatch(listProducts({}), listProductCategories({}));
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="container">
            <div className="row mt-5 mx-2">
              <h1 className="text-uppercase categoryfiltertext">
                Product Overview
              </h1>
              {/* <Category /> */}
              <div className="col-lg-12"></div>
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
      )}
    </>
  );
}

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';
// import { listProducts } from '../actions/productActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';

// export default function CategoryFilterScreen() {
//   const { name = 'all', category = 'all' } = useParams();
//   const dispatch = useDispatch();
//   const productCategoryList = useSelector((state) => state.productCategoryList);
//   const {
//     loading: loadingCategories,
//     error: errorCategories,
//     categories,
//   } = productCategoryList;

//   useEffect(() => {
//     dispatch(
//       listProducts({
//         name: name !== 'all' ? name : '',
//         category: category !== 'all' ? category : '',
//       })
//     );
//   }, [category, dispatch, name]);
//   const getFilterUrl = (filter) => {
//     const filterCategory = filter.category || category;
//     const filterName = filter.name || name;
//     return `/category/${filterCategory}/name/${filterName}`;
//   };
//   return (
//     <div>
//       <ul className="categories">
//         <li>
//           <strong>Categories</strong>
//         </li>
//         {loadingCategories ? (
//           <LoadingBox></LoadingBox>
//         ) : errorCategories ? (
//           <MessageBox variant="danger">{errorCategories}</MessageBox>
//         ) : (
//           // categories.map((c) => (
//           //   <li key={c}>
//           //     <Link to={`/category/${c}`}>{c}</Link>
//           //   </li>
//           // ))
//           <ul>
//             <li>
//               <Link
//                 className={'all' === category ? 'active' : ''}
//                 to={getFilterUrl({ category: 'all' })}
//               >
//                 Any
//               </Link>
//             </li>
//             {categories.map((c) => (
//               <li key={c}>
//                 <Link
//                   className={c === category ? 'active' : ''}
//                   to={getFilterUrl({ category: c })}
//                 >
//                   {c}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </ul>
//     </div>
//   );
// }
