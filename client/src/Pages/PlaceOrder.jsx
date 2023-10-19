import React, { useState } from "react";
import { Api } from "../Api/Api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {
    const cartProducts = useSelector(state=>state.cart);
    const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");

  const handlePlaceOrder = async function (e) {
    e.preventDefault();

    try {
      const endPoint = "/order/add";

      if (!fname || fname == "") {
        return alert("plese enter firstname");
      }
      if (!lname || lname == "") {
        return alert("plese enter lastname");
      }

      if (!address || address == "") {
        return alert("plese enter address");
      }

      const response = await Api.post(endPoint, {
        firstname: fname,
        lastname: lname,
        address:address,
        products: cartProducts.products.map(product=>product._id),
        total: cartProducts.total,
      });

      alert(response.data.message);
      navigate('/')
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="placeorderwrapper">
      <h1>Place Order</h1>
      <form onSubmit={handlePlaceOrder}>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
          placeholder="firstname"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={(e) => setLname(e.target.value)}
          value={lname}
          placeholder="lastname"
        />
        <input
          type="text"
          name="address"
          id="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="address"
        />
        <button type="submit">Place</button>
      </form>
    </div>
  );
};

export default PlaceOrder;
