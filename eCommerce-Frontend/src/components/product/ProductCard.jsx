import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <Link to={`/landingPage/id`} className="flex flex-col gap-2 group">
      <div className="img-container">
        <img
          className="group-hover:scale-105 transition-all duration-200"
          src="https://framerusercontent.com/images/toBiIsvM0QezAL0DYsJDsWAZ1I.png?scale-down-to=1024&width=1378&height=1365"
          alt=""
          loading="lazy"
        />
      </div>

      <div className="flex flex-col">
        <h4 className="font-semibold">Mixer TX-6</h4>
        <p className="text-xs">DH 2000.00 MAd</p>
      </div>
    </Link>
  );
};

export default ProductCard;
