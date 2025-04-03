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
const AboutUs = lazy(() => import("./containers/AboutUs"));
const Faqs = lazy(() => import("./containers/Faqs"));
const PrivacyPolicy = lazy(() => import("./containers/PrivacyPolicy"));
const ReturnsExchanges = lazy(() => import("./containers/ReturnsExchanges"));
const TermsConditions = lazy(() => import("./containers/TermsConditions"));
const Cart = lazy(() => import("./containers/Cart"));
const Checkout = lazy(() => import("./containers/Checkout"));
const CustomerProfile = lazy(() => import("./containers/CustomerProfile"));
const CustomerLogin = lazy(() => import("./containers/CustomerLogin"));
const CustomerReg = lazy(() => import("./containers/CustomerReg"));
const DesignerLogin = lazy(() => import("./containers/DesignerLogin"));
const DesignerReg = lazy(() => import("./containers/DesignerReg"));
const DesignerProfile = lazy(() => import("./containers/DesignerProfile"));
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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/profile" element={<CustomerProfile />} />
        <Route path="/account/login" element={<CustomerLogin />} />
        <Route path="/account/register" element={<CustomerReg />} />
        <Route
          path="/interior-designer/account/profile"
          element={<DesignerProfile />}
        />
        <Route
          path="/interior-designer/account/login"
          element={<DesignerLogin />}
        />
        <Route
          path="/interior-designer/account/register"
          element={<DesignerReg />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
