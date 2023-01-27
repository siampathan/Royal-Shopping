import Card from "../card/card";
import "./list-style.scss";

const List = () => {
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
    <div className="list">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
