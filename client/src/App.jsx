import { useState, useEffect } from "react";
import { getGroceries, insertGrocery } from "./api/api";
import GroceryList from "./components/GroceryList";
import GroceryForm from "./components/GroceryForm";
import Modal from "./components/Modal";

const database = "BigBoxStore";
const collection = "GroceryInventory";

function App() {
  const [groceries, setGroceries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchGroceries();
  }, []);

  const fetchGroceries = async () => {
    try {
      const response = await getGroceries(database, collection);
      setGroceries(response.data);
    } catch (error) {
      console.error("Error fetching groceries:", error);
    }
  };

  const [formErrors, setFormErrors] = useState([]);

  const handleAddGrocery = async (data) => {
    try {
      await insertGrocery(database, collection, data);
      fetchGroceries();
      setIsModalOpen(false);
      setFormErrors([]); // Clear any previous errors
    } catch (error) {
      if (error.response && error.response.data) {
        const { errors } = error.response.data;
        if (errors) {
          setFormErrors(errors);
        } else {
          setFormErrors([error.response.data.error]);
        }
      } else {
        console.error("Error adding grocery:", error);
        setFormErrors(["An unexpected error occurred. Please try again."]);
      }
    }
  };

  return (
    <div>
      <h1>Grocery Inventory</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Item</button>
      <GroceryList groceries={groceries} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <GroceryForm onSubmit={handleAddGrocery} errors={formErrors} />
        </Modal>
      )}
    </div>
  );
}

export default App;
