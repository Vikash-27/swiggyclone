import React, { useState, useEffect } from 'react';
import RestaurantCardComponent from './RestaurantCardComponent';
import { link } from '../../Assets/Constants';  // Ensure this link is correct
import ShimmerComponent from './ShimmerComponent';

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);  // Loading state to manage API call

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
                console.log('API Response:', data);  // Log the full response to check the data structure
                const restaurantList = data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                console.log('Restaurants:', restaurantList);  // Log the list of restaurants
                setRestaurants(restaurantList);  // Set the fetched restaurants
                setLoading(false);  // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);  // Set loading to false in case of error
            }
        };

        fetchRestaurants();
    }, []);  // Empty dependency array ensures this runs only once when the component mounts

    return (
        <div className="Body-container">
            <div className="search-container">
                <input
                    className="search-box"
                    type="text"
                    placeholder="Search for restaurants"
                />
            </div>
            <div className="Restaurant-container">
                <div className="Res-list">
                    {loading ? (
                        <ShimmerComponent />  // Show shimmer if still loading
                    ) : (
                        restaurants.length > 0 ? (
                            restaurants.map((restaurant, index) => (
                                <RestaurantCardComponent key={index} restaurant={restaurant} />
                            ))
                        ) : (
                            <p>No restaurants found</p>  // Show message if no restaurants are found
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;
