import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function AddProduct() {
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    user: '',
  });

  const handleAddProduct = () => {
    setAddPopupOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New product:', newProduct);
    setAddPopupOpen(false);
  };

  return (
    <div>
      <div className=" flex justify-end py-2 px-6">
        <button onClick={handleAddProduct} className="bg-HardOrange bg-opacity-80 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center">
          <FaPlus className="mr-2" />
          Add Product
        </button>
      </div>
      
      {isAddPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white bg-opacity-70 p-8 rounded-lg w-1/2 self-center">
            <h2 className="text-2xl font-bold mb-4 text-HardOrange ">Add New Product</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="block text-HardGreen font-semibold mb-1">Name:</label>
              <input type="text" id="name" name="name" value={newProduct.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Name" />
            </div>
            <div className="mb-2">
              <label htmlFor="price" className="block text-HardGreen font-semibold mb-1">Price:</label>
              <input type="text" id="price" name="price" value={newProduct.price} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Price" />
            </div>
            <div className="mb-2">
              <label htmlFor="quantity" className="block text-HardGreen font-semibold mb-1">Quantity:</label>
              <input type="number" id="quantity" name="quantity" value={newProduct.quantity} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Quantity" />
            </div>
            <div className="mb-2">
              <label htmlFor="category" className="block text-HardGreen font-semibold mb-1">Category:</label>
              <input type="text" id="category" name="category" value={newProduct.category} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Category" />
            </div>
            <div className="mb-2">
              <label htmlFor="user" className="block text-HardGreen font-semibold mb-1">User:</label>
              <input type="text" id="user" name="user" value={newProduct.user} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="User" />
            </div>
              <button type="submit" className="bg-HardOrange bg-opacity-80 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded mr-2">
                Add
              </button>
              <button type="button" onClick={() => setAddPopupOpen(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;
