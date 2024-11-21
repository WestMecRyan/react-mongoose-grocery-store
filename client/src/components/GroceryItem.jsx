function GroceryItem({ item }) {
  return (
    <li>
      {item.item} - ${item.price_in_usd}
    </li>
  );
}

export default GroceryItem;
