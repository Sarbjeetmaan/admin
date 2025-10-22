import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import "./AddProduct.css";
import { API_ENDPOINTS } from "../../api/api";

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    images: [],
    category: "airpods",
    new_price: "",
    old_price: "",
  });
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // ===============================
  // Handle multiple image selection
  // ===============================
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
    setProductDetails((prev) => ({ ...prev, images: files }));
  };

  // ===============================
  // Add Product Function
  // ===============================
  const addProduct = async () => {
    if (
      !productDetails.name ||
      !productDetails.images.length ||
      !productDetails.new_price ||
      !productDetails.old_price
    ) {
      alert("❌ Please fill all fields and select at least one image");
      return;
    }

    setLoading(true);
    try {
      // ---- STEP 1: Upload Images ----
      const formData = new FormData();
      productDetails.images.forEach((img) => formData.append("product", img));

      const uploadRes = await fetch(API_ENDPOINTS.UPLOAD, {
        method: "POST",
        body: formData,
      });

      const data = await uploadRes.json();
      if (!data.success) throw new Error("Image upload failed");

      // ---- STEP 2: Get token ----
      const token = localStorage.getItem("token");
      console.log("Token being sent:", token);

      if (!token) {
        alert("⚠️ No token found. Please log in again as admin.");
        setLoading(false);
        return;
      }

      // ---- STEP 3: Add Product ----
      const productRes = await fetch(API_ENDPOINTS.ADD_PRODUCT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ send token
        },
        body: JSON.stringify({
          name: productDetails.name,
          images: data.image_urls,
          category: productDetails.category,
          new_price: Number(productDetails.new_price),
          old_price: Number(productDetails.old_price),
        }),
      });

      const productData = await productRes.json();

      if (productData.success) {
        alert("✅ Product added successfully!");
        setProductDetails({
          name: "",
          images: [],
          category: "airpods",
          new_price: "",
          old_price: "",
        });
        setPreviewImages([]);
      } else {
        alert("❌ Failed to add product: " + productData.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add product: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // Component JSX
  // ===============================
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          type="text"
          value={productDetails.name}
          onChange={(e) =>
            setProductDetails((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="Type here"
        />

        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input
              type="number"
              value={productDetails.old_price}
              onChange={(e) =>
                setProductDetails((prev) => ({
                  ...prev,
                  old_price: e.target.value,
                }))
              }
              placeholder="Type here"
            />
          </div>

          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input
              type="number"
              value={productDetails.new_price}
              onChange={(e) =>
                setProductDetails((prev) => ({
                  ...prev,
                  new_price: e.target.value,
                }))
              }
              placeholder="Type here"
            />
          </div>
        </div>

        <div className="addproduct-itemfield">
          <p>Category</p>
          <select
            value={productDetails.category}
            onChange={(e) =>
              setProductDetails((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
            className="add-product-selector"
          >
            <option value="airpods">AIRPODS</option>
            <option value="camera">CAMERA</option>
            <option value="earphones">EARPHONES</option>
            <option value="mobile">MOBILE</option>
            <option value="mouse">MOUSE</option>
            <option value="printers">PRINTERS</option>
            <option value="speakers">SPEAKERS</option>
            <option value="refrigerator">REFRIGERATOR</option>
            <option value="tv">TV</option>
            <option value="watches">WATCHES</option>
            <option value="trimmers">TRIMMERS</option>
            <option value="processors">PROCESSORS</option>
          </select>
        </div>

        <div className="addproduct-itemfield">
          <label htmlFor="file-input" className="upload-label">
            <FaUpload className="upload-icon" />
            <span>Upload Images</span>
          </label>
          <input
            type="file"
            id="file-input"
            hidden
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {previewImages.length > 0 && (
          <div className="image-preview-multiple">
            {previewImages.map((src, idx) => (
              <div className="preview-wrapper" key={idx}>
                <img src={src} alt={`preview ${idx}`} />
              </div>
            ))}
          </div>
        )}

        <button
          className="addproduct-btn"
          onClick={addProduct}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
