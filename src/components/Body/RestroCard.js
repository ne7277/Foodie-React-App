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
      className="w-60 h-auto m-3 rounded-xl border border-orange-200 bg-orange-100 p-4 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-400/40 cursor-pointer"
      onClick={() => navigate(`/restaurants/${id}`)}
    >
      <img className="h-auto w-auto"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="flex justify-between"><h3 className="font-bold my-2">{name}</h3>
      <h4 className="my-2">⭐{avgRating}</h4></div>
      <h5 className="my-2">{cuisines?.join(", ")}</h5>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestroCard;
