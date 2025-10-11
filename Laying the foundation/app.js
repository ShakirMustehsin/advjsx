import React from "react";
import ReactDOM from "react-dom/client";


const NavBar = ()=>{
  return (
    <div className="navbar">
           <div className="logo">
                <img alt="Logo loaded" src="https://images.unsplash.com/photo-1612810806563-4cb8265db55f?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
           </div>
           <div className="nav-bar-links">
              <h4>Home</h4>
              <h4>Offers</h4>
              <h4>About</h4>
           </div>
    </div>
  )
}

const RestList =   { 

   "info": {
                      "id": "831067",
                      "name": "Big Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_831067.JPG",
                      "locality": "Chandni Chowk",
                      "areaName": "Omaxe mall",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "434792",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "166",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-11 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                  
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6641efc1-7ef5-4aa7-8a59-dfe464858b99"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/big-bowl-chandni-chowk-omaxe-mall-rest831067",
                      "type": "WEBLINK"
                    }
                  } 
                
              
                  

const RestaurantCard = (props)=> {
  const {restData} = props
  return (
    <div>
       <div className="restCard">
              
              <div className="restImg">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+RestList.info.cloudinaryImageId}/>
              </div>

              <h3>{RestList.info.name}</h3>
              <h5>{RestList.info.avgRating}Stars</h5>
              <h5>{RestList.info.sla.deliveryTime} mins</h5>
        </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar"> <h3> search Bar</h3>

      </div>

      <div className="restContainer">  

         <RestaurantCard key= "022" restData={RestList}/>

      </div>
    </div>
  )
}
const App = ()=> {
  return (
    <div>
<NavBar/>
<Body/>

    </div>
  )
}
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App/>);
