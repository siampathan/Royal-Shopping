import { Link } from "react-router-dom";
import "./categories-style.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://www.teahub.io/photos/full/82-823854_girl-fashion.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://iasbh.tmgrup.com.tr/f4a422/800/420/0/0/752/394?u=https://isbh.tmgrup.com.tr/sbh/2021/04/02/ramo-final-iddiasi-sonrasi-simdi-de-esra-bilgice-sok-ramo-ne-zaman-final-yapacak-sibel-esra-bilgic-diziden-ayrilacak-mi-1617369488201.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="http://images6.fanpop.com/image/photos/43300000/Henry-Cavill-for-Men-s-Health-2019-henry-cavill-43325447-540-810.png"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              new season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://media.gq-magazine.co.uk/photos/635ba2c80ddd768a6c910222/4:3/w_3104,h_2328,c_limit/GettyImages-1244281421.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="https://wallpaperaccess.com/full/1076764.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">
              shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
