import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"
// import resList from "../utils/mockData"
import { useState,useEffect ,useContext} from "react"
// import resList from "../utils/mockData"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"


const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]= useState([])
    const[filteredRestaurant, setFilteredRestaurant] = useState([]);
    const[searchText, setSearchText] = useState("") 

     
   const RestaurantCardPromoted= withPromotedLabel(RestaurantCard)


    //console.log("body rendered",listOfRestaurants);
    useEffect(()=>{
        fetchData()
        
    },[])

    const fetchData= async ()=>{
     const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        
     )
       const  json =await  data.json();
       console.log(json)
   setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
    const onlineStatus= useOnlineStatus()

    if(onlineStatus===false)
    return(
       <h3>
       Looks like you are  offline!!.
         Please check your internet connection and try again!
      </h3>
      )


    // if(listOfRestaurants.length===0){
    //     return <Shimmer/>

    // }
   const{loggedInUser,setUserName}=useContext(UserContext)

    return listOfRestaurants.length===0 ? (<Shimmer/>):(
      <div className='body'>
        <div className="filter flex">
          <div className="search m-4 p-4">
              <input type="text" className=" border border-solid border-black" value={searchText}
              onChange={(event)=>{
                setSearchText(event.target.value)
              }}/>
              <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
              onClick={()=>{
                console.log(searchText)
                const filteredRestaurant= listOfRestaurants.filter(
                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
  
                )
                setFilteredRestaurant(filteredRestaurant)

              }}
              >Search</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
           <button className="px-4 py-1 bg-gray-100 m-4 rounded-lg"
            onClick={()=>{
                const filteredList= listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4
                    )

                setListOfRestaurants(filteredList);
            }}

            >Top Rated Restaurant</button>
          </div>
            
          <div className="search m-4 p-4 flex items-center">
            <label>UserName:</label>
            <input className=" border border-black p-1"
            value={loggedInUser}
            onChange={(e)=>setUserName(e.target.value)} 
            />
          </div>
        </div>
        
        <div className="flex flex-wrap">
        {
          filteredRestaurant.map((restaurant) =>(
           <Link key={restaurant?.info.id} 
            to={"/restaurants/"+restaurant?.info.id}>

              {restaurant?.info.promoted ?(
                <RestaurantCardPromoted resData={restaurant}/>
              ):(


                <RestaurantCard resData ={restaurant}/>
              )

              }
              </Link> 
          ))
        }
        </div>
      </div>
    )
  }

  export default Body