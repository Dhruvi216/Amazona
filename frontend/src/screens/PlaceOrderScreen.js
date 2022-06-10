import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function PlaceOrderScreen(props) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    navigate('/payment');
  }

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); //5.123="5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, navigate, success]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top g-0">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <ul>
            <li>
              <div className="card card-body m-2 py-1">
                <h2 className="p-0 m-0">Shipping</h2>
                <p>
                  <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body m-2 py-1">
                <h2 className="p-0 m-0">Payment</h2>
                <p>
                  <strong>Method:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body m-2 py-1">
                <h2 className="p-0 m-0">Order Items</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-6 py-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                          <Link
                            to={`/product/${item.product}`}
                            className="text-decoration-none"
                          >
                            {item.name}
                          </Link>
                        </div>

                        <div className="col-lg-4 col-md-5 col-sm-12">
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card card-body m-2 py-1">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row my-2 g-0">
                  <div className="col-lg-8 col-md-8 col-sm-8">Items</div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    ${cart.itemsPrice.toFixed(2)}
                  </div>
                </div>
              </li>
              <li>
                <div className="row my-2 g-0">
                  <div className="col-lg-8 col-md-8 col-sm-8">Shipping</div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    ${cart.shippingPrice.toFixed(2)}
                  </div>
                </div>
              </li>
              <li>
                <div className="row my-2 g-0">
                  <div className="col-lg-8 col-md-8 col-sm-8">Tax</div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    ${cart.taxPrice.toFixed(2)}
                  </div>
                </div>
              </li>
              <li>
                <div className="row my-2 pb-3 g-0">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <strong> Order Total</strong>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <strong>${cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger"></MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
