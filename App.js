/*
Header
-Logo
-new items
-sign/login
Body
-Search box

-restaurant conatainer
   -img
   -Name of restro,star rating,cuisine,delivery time,etc
Footer
-copyright
-address
-contact
-links

*/


import React from "react"

import ReactDOM from "react-dom/client"


const Header =()=>{
  return(
    <div className="header">
      <div className="logo-conatiner">
        <img  className="logo" src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"/>
        </div>
       <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>

       </div>


    </div>
  )
}

const RestaurantCard=(props)=>{
  const {resData}= props;
  const {
 cloudinaryImageId,
 name,
  cuisines,
  avgRating,
 costForTwo,
 sla,
 } = resData?.info;

  return(
    <div className="res-card" style={{backgroundColor: 'orange'}}>
      <img className="res-logo" alt="res-card" src={
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
      cloudinaryImageId
      
      }/>
     
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}


const resList=[
  {
    "info": {
      "id": "18973",
      "name": "Nandhana Palace",
      "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian"
      ],
      "avgRating": 4.2,
      "parentId": "2120",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-15 02:00:00",
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
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "425",
      "name": "Hotel Empire",
      "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "475",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-15 03:00:00",
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
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-empire-koramangala-bangalore-425",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "42060",
      "name": "Sharief Bhai",
      "cloudinaryImageId": "ee29e694210d1bea8c91f538aa42e650",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Arabian",
        "South Indian",
        "Rolls & Wraps",
        "Street Food",
        "Fast Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "5734",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-15 03:00:00",
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
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sharief-bhai-koramangala-bangalore-42060",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "108097",
      "name": "Ambur Star Briyani Since 1890",
      "cloudinaryImageId": "yktanq9i7yfjrixaghuj",
      "locality": "2nd Stage",
      "areaName": "BTM Layout",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Chettinad",
        "Andhra",
        "Beverages",
        "Seafood"
      ],
      "avgRating": 4.4,
      "parentId": "21400",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-14 23:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-2nd-stage-btm-layout-bangalore-108097",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "381853",
      "name": "ITC Master Chef Creations",
      "cloudinaryImageId": "b15a2367ff3d6f0bf92d1def3c1e5c59",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹650 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Kebabs",
        "Mediterranean",
        "Mughlai"
      ],
      "avgRating": 4.4,
      "parentId": "11992",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-15 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/itc-master-chef-creations-koramangala-bangalore-381853",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "107443",
      "name": "Lo! - Low Carb and Keto Foods",
      "cloudinaryImageId": "o8t0w5gdlujpigauaflw",
      "locality": "HSR Layout",
      "areaName": "HSR SECTOR 6",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Healthy Food",
        "Keto",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "8282",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-15 00:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lo-low-carb-and-keto-foods-hsr-layout-hsr-sector-6-bangalore-107443",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "305",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "gxydb9wvkadarapno4hk",
      "locality": "Bannerghatta Road",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.3,
      "parentId": "22",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-14 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-bannerghatta-road-koramangala-bangalore-305",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "78511",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
      "locality": "8th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "6249",
      "avgRatingString": "4.7",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-14 23:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹169"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-8th-block-koramangala-bangalore-78511",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "10576",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.1,
      "parentId": "721",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-16 04:00:00",
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
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-a98865c2-b710-467d-83ac-a82206e09299"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "737964",
      "name": "Wow! Momo",
      "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
      "locality": "KORAMANGALA LAYOUT EXTENSION",
      "areaName": "KORAMANGALA",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "1776",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 0.1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-16 01:00:00",
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
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-a98865c2-b710-467d-83ac-a82206e09299"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/wow-momo-layout-extension-koramangala-bangalore-737964",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "581809",
      "name": "UBQ by Barbeque Nation",
      "cloudinaryImageId": "muaktnk5xb3zop4bvj6l",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 3.9,
      "parentId": "10804",
      "avgRatingString": "3.9",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-15 23:30:00",
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
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-a98865c2-b710-467d-83ac-a82206e09299"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-7th-block-koramangala-bangalore-581809",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "692058",
      "name": "BOOM Sandwich - Sub of India",
      "cloudinaryImageId": "96aaf72372ad1b0297b7cc304ced7e33",
      "locality": "6TH BLOCK",
      "areaName": "Koramangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Snacks",
        "Indian",
        "Desserts"
      ],
      "avgRating": 4.1,
      "parentId": "401169",
      "avgRatingString": "4.1",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "14-24 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-16 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-a98865c2-b710-467d-83ac-a82206e09299"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/boom-sandwich-sub-of-india-6th-block-koramangala-bangalore-692058",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "712380",
      "name": "Chicago Pizza",
      "cloudinaryImageId": "80f040545552605e33eba09f8fa30be9",
      "locality": "khb colony",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Pizzas",
        "Fast Food",
        "Italian"
      ],
      "avgRating": 4.1,
      "parentId": "60277",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-16 01:00:00",
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
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-a98865c2-b710-467d-83ac-a82206e09299"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chicago-pizza-khb-colony-koramangala-bangalore-712380",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "375041",
      "name": "Andhra Gunpowder",
      "cloudinaryImageId": "byilgyrcfz690ryoasww",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Andhra",
        "Biryani",
        "South Indian"
      ],
      "avgRating": 4.5,
      "parentId": "10496",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-16 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-a98865c2-b710-467d-83ac-a82206e09299"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-6th-block-koramangala-bangalore-375041",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "392828",
      "name": "Big Bowl",
      "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
      "locality": "Chikka Lakshmaiah Layout",
      "areaName": "Adugodi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.1,
      "parentId": "434792",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-16 02:00:00",
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
        "subHeader": "AT ₹179"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-a98865c2-b710-467d-83ac-a82206e09299"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/big-bowl-chikka-lakshmaiah-layout-adugodi-bangalore-392828",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "671928",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "7th Block",
      "areaName": "Koramangla",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-16 02:00:00",
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
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-a98865c2-b710-467d-83ac-a82206e09299"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-7th-block-koramangla-bangalore-671928",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  
]


const Body=()=>{
  return(
    <div className='body'>
      <div className="search">Search</div>
      
      <div className="res-container">
      {
        resList.map((restaurant) =>(
          <RestaurantCard key={restaurant.info.id} resData ={restaurant}/>
        ))
      }
       
       

      </div>
    </div>
  )
}

const AppLayout=()=>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)