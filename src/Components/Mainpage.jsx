import React, { useState } from "react";
import Mealcards from "./Mealcard.jsx";

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg , setMsg] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const Myfunc = async () => {
    if (search === "") {
      setMsg("Please Enter Something");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      // console.log(jsonData.meals);
      setData(jsonData.meals);
      setMsg("");
    }
  };

  return (
    <>
      <h1 className="head">Food Recipe Hub</h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Dishes"
            onChange={handleInput}
          />
          <button className="btn" onClick={Myfunc}>Search</button>
        </div>
         <h4 className="head">{msg}</h4>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
