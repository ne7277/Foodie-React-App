import { useNavigate } from "react-router-dom";

const AdBanner = () => {
  const navigate = useNavigate();
  const posterImg = new URL("../../assets/poster.png", import.meta.url);

  return (
    <div
      onClick={() => navigate("/bake-ad")}
      className="group relative w-full max-w-4xl h-48 mx-auto mb-8
                 rounded-2xl overflow-hidden shadow-2xl
                 cursor-pointer transition-all duration-300
                 hover:scale-[1.01]"
    >
      <img
        src={posterImg}
        alt="Kuih Raya Cadbury"
        className="absolute inset-0 w-full h-full object-cover
                   transition-all duration-500
                   group-hover:scale-105 group-hover:blur-sm"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r
                   from-black/70 via-black/40 to-black/70
                   opacity-0 group-hover:opacity-100
                   transition-all duration-500"
      />

      <div
        className="absolute inset-0 flex flex-col
                   justify-center items-start
                   pl-10 text-white
                   transform -translate-x-10 opacity-0
                   group-hover:translate-x-0 group-hover:opacity-100
                   transition-all duration-500"
      >
        <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
          🍪 Kuih Raya Cadbury
        </h2>

        <button
          className="mt-4 w-fit px-6 py-2
                     bg-yellow-400 text-purple-900
                     font-semibold rounded-full
                     shadow-lg shadow-yellow-400/30
                     hover:bg-yellow-500
                     transition-all duration-300 cursor-pointer"
        >
          🍪 Start Baking
        </button>
      </div>
    </div>
  );
};

export default AdBanner;
