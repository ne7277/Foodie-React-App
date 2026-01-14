import { useNavigate } from "react-router-dom";

const RestroCard = ({ resdata }) => {
  const navigate = useNavigate();

  const {
    id,
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    locality,
  } = resdata;

  return (
    <div
      className="restro-card"
      onClick={() => navigate(`/restaurants/${id}`)}
    >
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestroCard;
