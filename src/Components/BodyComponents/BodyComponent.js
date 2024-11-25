import React, { useState, useEffect } from 'react';
import BodyComponentCSS from '../../CSSFolder/BodyCSS/BodyComponentCSS.css';
import RestaurantCardComponent from './RestaurantCardComponent';

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=1&pageSize=20`
        );
        const data = await response.json();
        console.log(data);
        setRestaurantList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Body-container">
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="Search for restaurants"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="Restaurant-container">
        <div className="Res-list">
          {restaurantList.map((restaurant, index) => (
            <RestaurantCardComponent key={index} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;