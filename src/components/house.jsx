import PropTypes from "prop-types";

export default function House({ image, price, name, details }) {
  return (
    <div className="shadow-md rounded p-2 md:p-0 m-1">
      <div className="h-32 xsm:h-44 xl:h-48 2xl:h-56 relative">
        <img
          className="absolute rounded-md object-cover h-full w-full"
          src={image}
        />
      </div>
      <div className="m-2">
        <p className="text-darkpurple font-medium">
          <span className="font-bold text-xl text-orange-600/60">$</span>
          {price}
        </p>
        <p className="font-bold md:text-lg text-darkpurple">{name}</p>
        <p className="text-sm  text-black/40">{details}</p>
      </div>
    </div>
  );
}
House.propTypes ={
    image: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.string,
}