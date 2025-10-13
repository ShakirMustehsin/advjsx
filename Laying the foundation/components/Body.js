import RestaurantCard from "./RestaurantCard";
import { RestList } from "../SrcData/RestCardData";


const Body = () => {
  return (
    <div className="body">
      <div className="searchBar"> <h3> search Bar</h3>

      </div>

      <div className="restContainer">  

        {
          RestList.map((restaurant) =>(
             <RestaurantCard key={restaurant.info.id} restData={restaurant}/>
          )) 
        }

      </div>
    </div>
  )
}

export default Body;