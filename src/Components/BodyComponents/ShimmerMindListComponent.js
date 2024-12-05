import React from "react";
import ShimmerMindListComponentCSS from '../../CSSFolder/BodyCSS/ShimmerMindListComponentCSS.css';


const ShimmerMindListComponent = () => {
  return (
    <div className="shimmer-mindlist-container">
      <div className="shimmer-mindlist-item">
        <div className="shimmer-mindlist-image"></div>
        <div className="shimmer-mindlist-text"></div>
      </div>
      <div className="shimmer-mindlist-item">
        <div className="shimmer-mindlist-image"></div>
        <div className="shimmer-mindlist-text"></div>
      </div>
      <div className="shimmer-mindlist-item">
        <div className="shimmer-mindlist-image"></div>
        <div className="shimmer-mindlist-text"></div>
      </div>
      {/* You can add more items if needed */}
    </div>
  );
};

export default ShimmerMindListComponent;
