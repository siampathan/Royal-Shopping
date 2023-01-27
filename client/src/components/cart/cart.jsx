import { DeleteOutline } from "@mui/icons-material";
import "./cart-style.scss";

const Cart = () => {
  const data = [
    {
      id: 2,
      img1: "/img/red-hat.jpg",
      img2: "/img/sky-hat.jpg",
      title: "Hat",
      oldPrice: 18,
      price: 13,
      isNew: true,
      desc: "It is the red hat for a girls sesion.",
    },
    {
      id: 3,
      img1: "/img/sky-bluesaree.jpg",
      img2: "/img/sky-bluesaree2.jpg",
      title: "Bangalie Saree",
      oldPrice: 25,
      price: 20,
      desc: "It is the blue saree for a girls sesion.",
    },
  ];
  return (
    <div className="cart">
      <h2>Products in your cart</h2>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img1} alt="" />
          <div className="details">
            <h2> {item.title} </h2>
            <p> {item.desc?.substring(0, 100)} </p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutline className="delete" />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>$429</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Rest Cart</span>
    </div>
  );
};

export default Cart;
