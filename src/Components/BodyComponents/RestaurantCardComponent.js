import React from 'react';
import RestaurantCardComponentCSS from "../../CSSFolder/BodyCSS/RestaurantCardComponentCSS.css";

const RestaurantCardComponent = ({ restaurant }) => {
  return (
    <div className='RestaurantCard-container'>
      <div className='RestaurantCardImage'>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`} alt={restaurant.info.name} />
      </div>
      <div className='RestaurantCard-Details'>
        <h2>{restaurant.info.name}</h2>
        <p>Rating: {restaurant.info.avgRatingString} ({restaurant.info.totalRatingsString})</p>
        <p>Location: {restaurant.info.locality}, {restaurant.info.areaName}</p>
        <p>Cuisines: {restaurant.info.cuisines.join(', ')}</p>
        <p>Cost for two: {restaurant.info.costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCardComponent;