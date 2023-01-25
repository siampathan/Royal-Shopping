import Card from "../card/card";
import "./featureProducts-style.scss";

const FeatureProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img1: "/img/yellow-tshirt.jpg",
      img2: "/img/sky-tshirt.jpg",
      title: "Long T-Shirt",
      oldPrice: 12,
      price: 10,
      isNew: true,
    },
    {
      id: 2,
      img1: "/img/red-hat.jpg",
      img2: "/img/sky-hat.jpg",
      title: "Hat",
      oldPrice: 18,
      price: 13,
      isNew: true,
    },
    {
      id: 3,
      img1: "/img/sky-bluesaree.jpg",
      img2: "/img/sky-bluesaree2.jpg",
      title: "Bangalie Saree",
      oldPrice: 25,
      price: 20,
    },
    {
      id: 4,
      img1: "/img/silver-panjabi.jpg",
      img2: "/img/dark-bluepanjabi.jpg",
      title: "Panjabi",
      oldPrice: 23,
      price: 19,
    },
  ];

  return (
    <div className="featureProducts">
      <div className="top">
        <h1> {type} Products </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente in
          dolores voluptatem, adipisci repudiandae vero ducimus earum mollitia
          blanditiis. Id doloremque molestias labore veniam eius!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
