import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import { API_ENDPOINTS } from '../../api/api'; // ✅ import centralized API links

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.LIST_PRODUCTS);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  // Remove product handler
  const handleRemove = async (id) => {
    try {
      await fetch(API_ENDPOINTS.REMOVE_PRODUCT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {
      console.error('Error removing product:', err);
    }
  };

  return (
    <div className="list-product">
      <div className="listproduct-format-main">
        <p>Images</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      {products.map((product) => (
        <div className="listproduct-item" key={product.id}>
          <div className="listproduct-images">
            {product.images.map((imgUrl, idx) => (
              <img src={imgUrl} alt={product.name} key={idx} />
            ))}
          </div>
          <p>{product.name}</p>
          <p>₹{product.old_price}</p>
          <p>₹{product.new_price}</p>
          <p>{product.category}</p>
          <button className="remove-btn" onClick={() => handleRemove(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
