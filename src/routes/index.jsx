import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import SuspenseLoader from "../utils/SuspenseLoader";
import TalkingAgentScreen from "../containers/TalkingAgentScreen";

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
const Profile = lazy(() => import("../containers/Profile"));
const Login = lazy(() => import("../containers/Login"));
const CustomerReg = lazy(() => import("../containers/CustomerReg"));
const DesignerReg = lazy(() => import("../containers/DesignerReg"));
const TrendsNews = lazy(() => import("../containers/TrendsNews"));
const ThankYou = lazy(() => import("../containers/ThankYou"));
const Coupons = lazy(() => import("../containers/Coupons"));
const ForgotPassword = lazy(() => import("../containers/ForgotPassword"));
const Invoice = lazy(() => import("../containers/Invoice"));
const OrderTracking = lazy(() => import("../containers/OrderTracking"));
const OrderReturn = lazy(() => import("../containers/OrderReturn"));
const OrderCancel = lazy(() => import("../containers/OrderCancel"));
const ResetPassword = lazy(() => import("../containers/ResetPassword"));
const VerifyOTP = lazy(() => import("../containers/VerifyOTP"));
const NotFound = lazy(() => import("../containers/NotFound"));

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
      // { path: "/checkout", element: <Checkout /> },
      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <CustomerReg /> },
      {
        path: "/interior-designer/register",
        element: <DesignerReg />,
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
      },
      {
        path: "/coupons",
        element: <Coupons />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/ai-agent",
        element: <TalkingAgentScreen />,
      },
      {
        path: "/order-tracking",
        element: <OrderTracking />,
      },

      {
        path: "/order-cancel",
        element: <OrderCancel />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/verify",
        element: <VerifyOTP />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const RouteIndex = () => <RouterProvider router={router} />;
export default RouteIndex;
