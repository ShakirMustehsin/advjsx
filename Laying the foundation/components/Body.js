import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listData, setlistData] = useState([]);
  const [InputVal, setInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    const restaurantsArray = json.data.cards
      .filter(
        // Step 1: Filter the cards that are restaurants
        (card) =>
          card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map(
        // Step 2: Extract the actual restaurant object (which contains 'info')
        (card) => card.card.card
      );

    setlistData(restaurantsArray);
  };

  // Optional: Add a Loading State
  if (listData.length === 0) {
    return (
      <div>
        <div className="shimmerContainer">
          <div className="shimmer"></div>
          <div className="shimmer"></div>
          <div className="shimmer"></div>
          <div className="shimmer"></div>
          <div className="shimmer"></div>
          <div className="shimmer"></div>
          <div className="shimmer"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="searchbtn">
        <input
          value={InputVal}
          onChange={(input) => {
            setInput(input.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            console.log(InputVal);
            const searchFilteredRest = listData.filter(
            (rest) => { 
               return rest.info.name.toLowerCase().includes(InputVal.toLowerCase())
              }
            )

            setlistData(searchFilteredRest)
          }}
        >
          Search
        </button>
      </div>
      <div className="filterbtn">
        <button
          onClick={() => {
            // This logic is now CORRECT because listData elements are the unwrapped restaurant objects!
            const filteredList = listData.filter(
              (rest) => rest.info.avgRating >= 4.5
            );
            setlistData(filteredList);
          }}
        >
          filter
        </button>
      </div>

      <div className="restContainer">
        {listData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
