import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider-style.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://www.media.hw-static.com/media/2020/05/henrycavill_justiceleaguepremiere.jpg",
    "https://c4.wallpaperflare.com/wallpaper/244/670/404/3d-hd-2560x1440-nice-wallpaper-preview.jpg",
    "https://wallup.net/wp-content/uploads/2018/09/27/7391-abstract-lights-bokeh-digital-art.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
