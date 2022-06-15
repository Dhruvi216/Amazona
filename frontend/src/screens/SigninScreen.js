// import React from 'react';
// import { Link } from 'react-router-dom';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useFormik } from 'formik';

const initialValues = {
  email: '',
  password: '',
};
const onSubmit = (values) => {
  // console.log('Form data', values);
};
const validate = (values) => {
  //values.email values.password
  //errors.email errors.password
  //errors.email = 'This field is required'
  let errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i.test(
      values.password
    )
  ) {
    errors.password =
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character';
  }

  return errors;
};

export default function SigninScreen() {
  const navigate = useNavigate();
  // const [email] = useState('');
  // const [password] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  // const dispatch = useDispatch();
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   // TODO: sign in action
  //   // dispatch(signin(email, password));
  //   dispatch(signin(formik.values.email, formik.values.password));
  // };
  useEffect(() => {
    if (userInfo) {
      //   props.history.push(redirect);
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  // console.log('Visited fields', formik.touched);
  return (
    <div className="container m-auto ">
      {/* <form className="form" onSubmit={submitHandler}> */}
      <form className="form" onSubmit={formik.handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>
                <div>
                  <h1>Sign In</h1>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <tr className="form-control">
              <td>
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </td>
            </tr>
            <tr className="form-control">
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="primary" type="submit">
                  Sign In
                </button>
              </td>
            </tr>
            <tr>
              <div>
                New customer? <Link to="/register">Create your account</Link>
              </div>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { signin } from '../actions/userActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// // import Axios from 'axios';

// export default function SigninScreen(props) {
//   // console.log(props);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [error, setError] = useState('');

//   const { search } = useLocation();
//   const redirectInUrl = new URLSearchParams(search).get('redirect');
//   const redirect = redirectInUrl ? redirectInUrl : '/';

//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo, loading, error } = userSignin;

//   const dispatch = useDispatch();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     // TODO: sign in action
//     dispatch(signin(email, password));
//   };
//   useEffect(() => {
//     if (userInfo) {
//       //   props.history.push(redirect);
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);
//   // const userSignin = useSelector((state) => state.userSignin);
//   // const { userInfo, loading, error } = userSignin;

//   // const dispatch = useDispatch();

//   // const submitHandler = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const { data } = await Axios.post('/api/users/signin', {
//   //       email,
//   //       password,
//   //     });
//   //     localStorage.setItem('userInfo', JSON.stringify(data));
//   //     navigate('/');
//   //   } catch (error) {
//   //     setError(error);
//   //   }
//   // };

//   return (
//     <div>
//       <form className="form" onSubmit={submitHandler}>
//         <div>
//           <h1>Sign In</h1>
//         </div>
//         {loading && <LoadingBox></LoadingBox>}
//         {error && <MessageBox variant="danger">{error}</MessageBox>}
//         {/* {loading && <LoadingBox></LoadingBox>}
//         {error && <MessageBox variant="danger">{error}</MessageBox>} */}
//         <div>
//           <label htmlFor="email">Email address</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter email"
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter password"
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label />
//           <button className="primary" type="submit">
//             Sign In
//           </button>
//         </div>
//         <div>
//           <label />
//           <div>
//             New customer? <Link to="/register">Create your account</Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
