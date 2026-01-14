const Shimmer = () => {
  return (
    <div className="body">
      {/* 🔍 Search + Button Shimmer */}
      <div className="search shimmer-search">
        <div className="search-bar">
          <div className="shimmer shimmer-input"></div>
          <div className="shimmer shimmer-btn"></div>
        </div>

        <div className="toprated">
          <div className="shimmer shimmer-top-btn"></div>
        </div>
      </div>

      {/* 🍽️ Restaurant Cards Shimmer */}
      <div className="res-container">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div className="shimmer-card" key={index}>
              <div className="shimmer shimmer-img"></div>
              <div className="shimmer shimmer-text"></div>
              <div className="shimmer shimmer-text short"></div>
              <div className="shimmer shimmer-text short"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
