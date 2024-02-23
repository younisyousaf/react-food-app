import React, { useState } from "react";
import Search from "../components/Search";

const Home = () => {
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <h2 className="text-center p-2">Search Food Recipe's Here!</h2>
      <Search foodData={foodData} setFoodData={setFoodData} />

      {foodData.map((foodItem, index) => (
        <div key={index}>
          <p>Food Label: {foodItem.recipe.label}</p>
          {/* <img src={foodItem.recipe.image} alt="" /> */}
          <div>
            <img src={foodItem.recipe.images.THUMBNAIL.url} alt="" />
          </div>
          <p>Calories: {foodItem.recipe.calories}</p>

          <div>
            {foodItem.recipe.ingredients.map((ingredient, i) => (
              <ul key={i}>
                <li>{ingredient.text}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
