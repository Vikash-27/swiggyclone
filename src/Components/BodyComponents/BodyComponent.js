import React, { useState, useEffect } from 'react';
import BodyComponentCSS from '../../CSSFolder/BodyCSS/BodyComponentCSS.css';
import RestaurantCardComponent from './RestaurantCardComponent';
import ShimmerComponent from './ShimmerComponent';

const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          '/api/proxy/swiggy/dapi', // Use proxy URL to avoid CORS issues
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              lat: 17.67740,
              lng: 83.20360,
              'is-seo-homepage-enabled': true,
              'page_type': 'DESKTOP_WEB_LISTING',
              page: 1,
              pageSize: 20,
            }),
          }
        );
        const data = await response.json();
        setRestaurants(
          data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredRestaurants(
          data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchRestaurants();
  }, []);

  const handleSearchInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchText(input);

    const filteredList = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(input)
    );
    setFilteredRestaurants(filteredList);
  };

  return (
    <div className="Body-container">
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="Restaurant-container">
        <div className="Res-list">
          {isLoaded ? (
            filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant, index) => (
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