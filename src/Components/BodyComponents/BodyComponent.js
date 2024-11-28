import React, { useState, useEffect } from 'react';
import BodyComponentCSS from '../../CSSFolder/BodyCSS/BodyComponentCSS.css';
import RestaurantCardComponent from './RestaurantCardComponent';
import ShimmerComponent from './ShimmerComponent';

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=1&pageSize=20`
        );
        const data = await response.json();
        setRestaurantList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  // Initial filtered list is the full list
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Live search handler: filter restaurants based on user input
  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    setSearchText(input);

    const filteredList = restaurantList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(input.toLowerCase())
    );
    setFilteredRestaurantList(filteredList);
  };

  return (
    <div className="Body-container">
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={handleSearchInputChange}  // Trigger search as user types
        />
      </div>
      <div className="Restaurant-container">
        <div className="Res-list">
          {isLoaded ? (
            filteredRestaurantList.length > 0 ? (
              filteredRestaurantList.map((restaurant, index) => (
                <RestaurantCardComponent key={index} restaurant={restaurant} />
              ))
            ) : (
              <p>No restaurants found</p>
            )
          ) : (
            <ShimmerComponent />
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
