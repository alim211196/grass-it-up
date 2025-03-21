// Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ProductDetails from "./containers/ProductDetails";
import ShopByCollection from "./containers/ShopByCollection";
import ShopByMaterial from "./containers/ShopByMaterial";
import ShopByProduct from "./containers/ShopByProduct";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/shop-by-product" element={<ShopByProduct />} />
      <Route path="/shop-by-material" element={<ShopByMaterial />} />
      <Route path="/shop-by-collection" element={<ShopByCollection />} />
      <Route path="/collections/:category" element={<ProductListing />} />
      <Route
        path="/collections/:category/products/:product"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default App;
