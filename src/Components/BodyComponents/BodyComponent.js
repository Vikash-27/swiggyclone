import React, { useState, useEffect } from "react";
import BodyComponentCSS from "../../CSSFolder/BodyCSS/BodyComponentCSS.css";
import RestaurantCardComponent from "./RestaurantCardComponent";
import ShimmerComponent from "./ShimmerComponent";
import { link } from "../../Assets/Constants";
import { Link } from "react-router-dom";

const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [mindlist, setMindList] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          `${link}api/proxy/swiggy/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const restaurantList =
          data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        const sampleData =
          data?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.info;

        setMindList(sampleData); // Save "mindlist" data
        setRestaurants(restaurantList);
        setFilteredRestaurants(restaurantList);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
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
      {/* Search Bar */}
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={handleSearchInputChange}
        />
      </div>

      {/* Mindlist Section */}
      <h2 className="mindlist-header">What's On Your Mind</h2>

      {/* Mindlist Rendering */}
      <div className="mindlist-container">
        {isLoaded && mindlist?.length > 0 ? (
          mindlist.map((item, index) => (
            <div key={index} className="mindlist-item">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item?.imageId}`}
                alt={item?.name}
                className="mindlist-image"
              />
              <p className="mindlist-text">{item?.name}</p>
            </div>
          ))
        ) : (
          <p>Loading Mindlist...</p>
        )}
      </div>

      {/* Restaurant List */}
      <div className="Restaurant-container">
        <div className="Res-list">
          {isLoaded ? (
            filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <RestaurantCardComponent
                  key={restaurant.id}
                  restaurant={restaurant}
                />
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
