import { React, useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const RestaurantList = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setsearchName] = useState("");
  const [searchZip, setsearchZip] = useState("");
  const [searchCuisine, setsearchCuisine] = useState("");
  const [cuisines, setCuisines] = useState(["All Cuisines"]);

  useEffect(() => {
    retrieveRestaurants();
    retrieveCuisines();
  }, []);

  const retrieveRestaurants = () => {
    RestaurantDataService.get()
      .then((res) => {
        console.log(res.data);
        setRestaurants(res.data.restaurants);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveCuisines = () => {
    RestaurantDataService.getCuisines()
      .then((res) => {
        console.log(res.data);
        setCuisines(["All Cuisines "].concat(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return <div className="App">Hello World</div>;
};

export default RestaurantList;
