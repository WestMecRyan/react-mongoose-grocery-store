import GroceryItem from './GroceryItem';

function GroceryList({ groceries }) {
  return (
    <ul>
      {groceries.map((item) => (
        <GroceryItem key={item._id} item={item} />
      ))}
    </ul>
  );
}

export default GroceryList;
