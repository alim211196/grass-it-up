import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import SuspenseLoader from "../utils/SuspenseLoader";

const HomePage = lazy(() => import("../containers/HomePage"));
const ProductDetails = lazy(() => import("../containers/ProductDetails"));
const ShopByCollection = lazy(() => import("../containers/ShopByCollection"));
const ShopByMaterial = lazy(() => import("../containers/ShopByMaterial"));
const ShopByProduct = lazy(() => import("../containers/ShopByProduct"));
const ProductListing = lazy(() => import("../containers/ProductListing"));
const ShopByBrand = lazy(() => import("../containers/ShopByBrand"));
const AboutUs = lazy(() => import("../containers/AboutUs"));
const Faqs = lazy(() => import("../containers/Faqs"));
const PrivacyPolicy = lazy(() => import("../containers/PrivacyPolicy"));
const ReturnsExchanges = lazy(() => import("../containers/ReturnsExchanges"));
const TermsConditions = lazy(() => import("../containers/TermsConditions"));
const Cart = lazy(() => import("../containers/Cart"));
const WishList = lazy(() => import("../containers/WishList"));
const Checkout = lazy(() => import("../containers/Checkout"));
const CustomerProfile = lazy(() => import("../containers/CustomerProfile"));
const CustomerLogin = lazy(() => import("../containers/CustomerLogin"));
const CustomerReg = lazy(() => import("../containers/CustomerReg"));
const DesignerLogin = lazy(() => import("../containers/DesignerLogin"));
const DesignerReg = lazy(() => import("../containers/DesignerReg"));
const DesignerProfile = lazy(() => import("../containers/DesignerProfile"));
const TrendsNews = lazy(() => import("../containers/TrendsNews"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/trends-and-news", element: <TrendsNews /> },
      { path: "/shop-by-product", element: <ShopByProduct /> },
      { path: "/shop-by-brand", element: <ShopByBrand /> },
      { path: "/shop-by-material", element: <ShopByMaterial /> },
      { path: "/shop-by-collection", element: <ShopByCollection /> },
      { path: "/collections/:category", element: <ProductListing /> },
      {
        path: "/collections/:category/products/:product",
        element: <ProductDetails />,
      },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/faqs", element: <Faqs /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/returns-exchanges", element: <ReturnsExchanges /> },
      { path: "/terms-conditions", element: <TermsConditions /> },
      { path: "/cart", element: <Cart /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/account/profile", element: <CustomerProfile /> },
      { path: "/account/login", element: <CustomerLogin /> },
      { path: "/account/register", element: <CustomerReg /> },
      {
        path: "/interior-designer/account/profile",
        element: <DesignerProfile />,
      },
      {
        path: "/interior-designer/account/login",
        element: <DesignerLogin />,
      },
      {
        path: "/interior-designer/account/register",
        element: <DesignerReg />,
      },
    ],
  },
]);

const RouteIndex = () => <RouterProvider router={router} />;
export default RouteIndex;
