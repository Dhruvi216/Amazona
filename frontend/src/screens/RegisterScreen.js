import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { register } from '../actions/userActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const onSubmit = (values) => {
//   console.log('Form data', values);
// };

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Password is required'),
  confirmpassword: Yup.string()
    .required('confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
export default function RegisterScreen(props) {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });
  // console.log('Visited fields', formik.touched);

  const navigate = useNavigate();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  // const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  // const submitHandler = (e) => {
  const onSubmit = () => {
    // e.preventDefault();

    dispatch(
      register(Field.name, Field.email, Field.password, Field.confirmpassword)
    );
  };
  useEffect(() => {
    if (userInfo) {
      // props.history.push(redirect);
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  // }, [props.history, redirect, userInfo]);
  return (
    <div className="container m-auto d-flex justify-content-center">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmpassword: '',
        }}
        validationSchema={validationSchema} //u can change name in {} like {validationSchema} to {signupschema}
        onSubmit={onSubmit}
      >
        <Form className="form">
          {/* <form className="form" onSubmit={submitHandler}> */}
          {/* <form className="form" onSubmit={formik.handleSubmit}> */}
          <table>
            <thead>
              <tr>
                <th>
                  <h1>Create Account</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>} */}
              <tr className="form-control">
                <td>
                  <label htmlFor="name">Name</label>
                </td>
                <td>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                  ></Field>
                  <ErrorMessage name="name" />
                </td>
              </tr>

              <tr className="form-control">
                <td>
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                </td>
                <td>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                  ></Field>
                  <ErrorMessage name="email" />
                </td>
              </tr>

              <tr className="form-control">
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                  ></Field>
                  <ErrorMessage name="password" />
                </td>
              </tr>

              <tr className="form-control">
                <td>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </td>
                <td>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmpassword"
                    placeholder="Enter confirm password"
                  ></Field>
                  <ErrorMessage name="confirmpassword" />
                </td>
              </tr>

              <tr className="form-control">
                <td>
                  <label />
                </td>
                <td>
                  <button className="primary" type="submit">
                    Register
                  </button>
                </td>
              </tr>

              <tr className="form-control">
                <td>
                  <label />
                </td>
                <td>
                  <div>
                    Already have an account?
                    <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </Formik>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { register } from '../actions/userActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';

// export default function RegisterScreen(props) {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const { search } = useLocation();
//   const redirectInUrl = new URLSearchParams(search).get('redirect');
//   const redirect = redirectInUrl ? redirectInUrl : '/';

//   const userRegister = useSelector((state) => state.userRegister);
//   const { userInfo, loading, error } = userRegister;

//   const dispatch = useDispatch();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Password and confirm password are not match');
//     } else {
//       dispatch(register(name, email, password));
//     }
//   };
//   useEffect(() => {
//     if (userInfo) {
//       // props.history.push(redirect);
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);
//   // }, [props.history, redirect, userInfo]);
//   return (
//     <div>
//       <form className="form" onSubmit={submitHandler}>
//         <div>
//           <h1>Create Account</h1>
//         </div>
//         {loading && <LoadingBox></LoadingBox>}
//         {error && <MessageBox variant="danger">{error}</MessageBox>}
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Enter name"
//             required
//             onChange={(e) => setName(e.target.value)}
//           ></input>
//         </div>
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
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             placeholder="Enter confirm password"
//             required
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label />
//           <button className="primary" type="submit">
//             Register
//           </button>
//         </div>
//         <div>
//           <label />
//           <div>
//             Already have an account?{' '}
//             <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
