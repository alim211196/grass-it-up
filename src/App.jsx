// Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SuspenseLoader from "./containers/SuspenseLoader";

// Lazy Load Components
const HomePage = lazy(() => import("./containers/HomePage"));
const ProductDetails = lazy(() => import("./containers/ProductDetails"));
const ShopByCollection = lazy(() => import("./containers/ShopByCollection"));
const ShopByMaterial = lazy(() => import("./containers/ShopByMaterial"));
const ShopByProduct = lazy(() => import("./containers/ShopByProduct"));
const ProductListing = lazy(() => import("./containers/ProductListing"));
const ShopByBrand = lazy(() => import("./containers/ShopByBrand"));

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-by-product" element={<ShopByProduct />} />
        <Route path="/shop-by-brand" element={<ShopByBrand />} />
        <Route path="/shop-by-material" element={<ShopByMaterial />} />
        <Route path="/shop-by-collection" element={<ShopByCollection />} />
        <Route path="/collections/:category" element={<ProductListing />} />
        <Route
          path="/collections/:category/products/:product"
          element={<ProductDetails />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
