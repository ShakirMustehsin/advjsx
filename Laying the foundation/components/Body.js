import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [RestListSpecial, setRestSpecial] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Apidata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await Apidata.json();

    setRestSpecial(json);
  };

  return (
    <div className="body">
      <div className="filterbtn">
        {" "}
        <button
          onClick={() => {
            const filteredList = RestListSpecial.filter(
              (rest) => rest.info.avgRating >= 4.5
            );

            setRestSpecial(filteredList);
          }}
        >
          filter
        </button>
      </div>

      <div className="restContainer">
        {RestListSpecial.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
