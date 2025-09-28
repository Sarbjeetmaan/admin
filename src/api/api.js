// Central place for backend links
const API_BASE = "https://backend-91e3.onrender.com"; // ✅ your backend

// Endpoints
export const API_ENDPOINTS = {
  UPLOAD: `${API_BASE}/upload`,
  ADD_PRODUCT: `${API_BASE}/addproduct`,
  LIST_PRODUCTS: `${API_BASE}/allproducts`,
  REMOVE_PRODUCT: `${API_BASE}/removeproduct`,
  LOGIN: `${API_BASE}/login`,
  SIGNUP: `${API_BASE}/signup`,
};

export default API_BASE;
