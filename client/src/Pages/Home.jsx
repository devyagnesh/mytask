import React, { useEffect, useState } from "react";
import { Api } from "../Api/Api";
import {useDispatch} from 'react-redux'
import  {addToCart} from '../Store/Slice/ProductSlice'
const Home = () => {
    const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [quantity,setQuantity] = useState(0);
  useEffect(() => {
    (async function () {
      try {
        const endPoint = "/product/";
        const response = await Api.get(endPoint);

        setProducts(response.data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);



  /**
   * handle add to cart 
   */
  const handleAddToCart = function(product,e){
    dispatch(addToCart({...product,quantity:quantity}))
  }

  return (
    <div className="wrapper grid">
      {products.map((product) => (
        <div className="card" key={product._id}>
          <div className="card-image">
            <img src={product.image} alt="product.name" />
          </div>
          <div className="extra-details">
            <div className="name_description">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
            <h2 className="price">${product.price}</h2>
          </div>
         <div className="quantity_wrapper">
         <input type="number" placeholder="quantity" name="quantity" id="quantity" onChange={e=>setQuantity(e.target.value)} className="quantity"/>
         </div>
          <button type="button" className="btn btn-addto-cart" onClick={handleAddToCart.bind(this,product)}>add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
