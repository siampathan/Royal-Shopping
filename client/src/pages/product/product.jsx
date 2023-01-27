import { useState } from "react";
import {
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
  BalanceOutlined,
} from "@mui/icons-material";
import "./product-style.scss";

const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const images = [
    "https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg",
    "https://images.pexels.com/photos/3775585/pexels-photo-3775585.jpeg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quam
          veniam maxime deleniti quos architecto autem itaque iste illo!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className="add">
          <AddShoppingCartOutlined /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderOutlined /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceOutlined /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: Shirt</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
