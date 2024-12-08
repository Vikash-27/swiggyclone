import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { link } from "../../Assets/Constants";
import RestaurantMenuCSS from '../../CSSFolder/BodyCSS/RestaurantMenuCSS.css';

const RestaurantMenu = () => {
    const { resID } = useParams(); // Extract restaurant ID from the route
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(
                    `${link}api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6868159&lng=83.2184815&restaurantId=${resID}`
                );
                if (!response.ok) throw new Error("Failed to fetch menu");
                const json = await response.json();

                const resMenu = json?.data?.cards?.find((card) =>
                    card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((menu) =>
                        menu?.card?.card["@type"]?.includes("food.v2.ItemCategory")
                    )
                );

                const data = resMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const updatedData = data?.filter((card) =>
                    card?.card?.card["@type"]?.includes("food.v2.ItemCategory")
                );

                setRestaurantMenu(updatedData || []);
            } catch (err) {
                setError(err.message);
                console.error("Error fetching menu:", err);
            }
        };

        fetchMenu();
    }, [resID]); // Trigger fetch when resID changes

    return (
        <div className="restaurant-menu">
            <h1 className="menu-title">Restaurant Menu</h1>
            {error ? (
                <p className="error-message">Error: {error}</p>
            ) : (
                <div>
                    {restaurantMenu.map((category, index) => (
                        <div key={index} className="menu-category">
                            <h2 className="category-title">{category?.card?.card?.title || "Category"}</h2>
                            <div className="menu-items">
                                {category?.card?.card?.itemCards?.map((item, idx) => (
                                    <div key={idx} className="menu-item">
                                        <div className="item-details">
                                            <h3 className="item-name">{item?.card?.info?.name}</h3>
                                            <p className="item-description">{item?.card?.info?.description}</p>
                                            <p className="item-price">₹{(item?.card?.info?.price || 0) / 100}</p>
                                        </div>
                                        {item?.card?.info?.imageId && (
                                            <img
                                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
                                                alt={item?.card?.info?.name}
                                                className="item-image"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RestaurantMenu;
