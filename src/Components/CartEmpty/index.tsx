import React, { FC } from "react";
import emptyCart from "../../assets/img/empty-cart.png";
import { Link } from "react-router-dom";
const CartEmpty: FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Cart is empty <>😕</>
        </h2>
        <p>
          Most likely, you haven't ordered pizza yet.
          <br />
          To order a pizza, go to the main page.
        </p>
        <img src={emptyCart} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Go back</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
