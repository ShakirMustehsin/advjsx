import { REST_IMG_URL } from "../SrcData/RestCardData";



const RestaurantCard = (props)=> {
  const {restData} = props
  const { name, cloudinaryImageId, deliveryTime, avgRating, cuisines} = restData?.info
  return (
    <div>
       <div className="restCard">
              
              <div className="restImg">
                <img src={REST_IMG_URL+cloudinaryImageId}/>
              </div>

              <h3>{name}</h3>
              <h5>{avgRating}Stars</h5>
              <h5>{deliveryTime} mins</h5>
        </div>
    </div>
  )
}

export default RestaurantCard;