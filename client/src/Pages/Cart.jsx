import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  console.log(cartProducts);
  return (
    <>
      <h1 className="title">My Cart</h1>
      <div className="wrapper">
        {cartProducts.products.map((product) => {
          return (
            <div className="cart_card" key={product._id}>
              <div className="cart_left_img">
                <img src={product.image} alt="" />
              </div>
              <div className="extra_cart_data">
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <h2>${product.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="showtotal">Total : {cartProducts.total} <Link to={'/order'}>Place Order</Link> </h1>
        
      </div>
    </>
  );
};

export default Cart;
