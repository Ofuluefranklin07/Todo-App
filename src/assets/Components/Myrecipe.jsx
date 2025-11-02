import { useState } from "react";

const Recipes = [
  {
    name: "Egusi",
    ingredients:
      " Lemon seed, palm oil, seasoning cubes, pepper, salt, spinach leaves",
  },
  { name: "Chicken Curry", ingredients: "Chicken, curry powder, coconut milk" },
  {
    name: "Vegetable Stir Fry",
    ingredients: "Mixed veggies, soy sauce, garlic",
  },
  { name: "Pancakes", ingredients: "Flour, eggs, milk, sugar" },
];

export default function Myrecipe() {
  const [query, setQuery] = useState("");
  const filters = Recipes.filter(
    r =>
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.ingredients.toLowerCase().includes(query.toLowerCase())
  );
  console.log(filters)
  return (
    <>
      <div>
        <form>
          {" "}
          <input
            type="text"
            placeholder="search Recipies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        {filters.length === 0 ? (
          <p>No Recipes Found</p>
        ) : (
          filters.map((r, i) => (
            <ul key={i}>
              <strong>{r.name}</strong>
              <small>{r.ingredients}</small>
            </ul>
          ))
        )}
      </div>
    </>
  );
}
