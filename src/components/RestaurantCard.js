import { useContext } from "react";
import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard=(props)=>{
    const {resData}= props;
 console.log(resData)
    const{loggedInUser}=useContext(UserContext);

    const {
        cloudinaryImageId,
         name,
         cuisines,
         avgRating,
         costForTwo,
         sla,
          } = resData?.info;
  
    return(
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400 " 
      >
        <img className="rounded-lg " 
        alt="res-card" src={ CDN_URL +cloudinaryImageId
        
        }/>
       
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>User:{loggedInUser}</h4>
      </div>
    )
  }


  export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted</label>
          <RestaurantCard {...props} />
        </div>
      )
    }
  }
  export default RestaurantCard