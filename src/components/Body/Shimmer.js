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
        {Array.from({ length: 12 }).map((_, index) => (
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

const MenuShimmer = () => {
  return (
    <div className="menu-page">
      <div className="menu-header shimmer-box">
        <div className="shimmer-line title"></div>
        <div className="shimmer-line small"></div>
        <div className="shimmer-line small"></div>
      </div>

      <div className="menu-container">
        {Array.from({ length: 3 }).map((_, catIndex) => (
          <div className="menu-category shimmer-box" key={catIndex}>
            <div className="shimmer-line category-title"></div>

            {Array.from({ length: 4 }).map((_, itemIndex) => (
              <div
                className="menu-item-card shimmer-box"
                key={itemIndex}
              >
                <div className="left">
                  <div className="shimmer-line item-title"></div>
                  <div className="shimmer-line item-sub"></div>
                </div>
                <div className="shimmer-button"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Shimmer, MenuShimmer };
