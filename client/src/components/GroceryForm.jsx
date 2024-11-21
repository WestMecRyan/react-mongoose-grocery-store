import { useState } from "react";
function GroceryForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    item: "",
    food_group: "",
    price_in_usd: "",
    calories_per_100g: "",
    organic: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        placeholder="Item"
        value={formData.item}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="food_group"
        placeholder="Food Group"
        value={formData.food_group}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price_in_usd"
        placeholder="Price in USD"
        value={formData.price_in_usd}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="calories_per_100g"
        placeholder="Calories per 100g"
        value={formData.calories_per_100g}
        onChange={handleChange}
        required
      />
      <label>
        Organic:
        <input
          type="checkbox"
          name="organic"
          checked={formData.organic}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GroceryForm;
