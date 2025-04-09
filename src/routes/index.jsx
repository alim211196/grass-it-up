import { lazy, memo, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import SuspenseLoader from "../utils/SuspenseLoader";
const Layout = lazy(() => import("../layouts/Layout"));
// Lazy-loaded pages
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

// Helper to wrap components with layout
const withLayout = (Component) => (
  <Layout>
    <Component />
  </Layout>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(HomePage)}</Suspense>
    ),
  },
  {
    path: "/trends-and-news",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(TrendsNews)}
      </Suspense>
    ),
  },
  {
    path: "/shop-by-product",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(ShopByProduct)}
      </Suspense>
    ),
  },
  {
    path: "/shop-by-brand",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(ShopByBrand)}
      </Suspense>
    ),
  },
  {
    path: "/shop-by-material",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(ShopByMaterial)}
      </Suspense>
    ),
  },
  {
    path: "/shop-by-collection",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(ShopByCollection)}
      </Suspense>
    ),
  },
  {
    path: "/collections/:category",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(ProductListing)}
      </Suspense>
    ),
  },
  {
    path: "/collections/:category/products/:product",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(ProductDetails)}
      </Suspense>
    ),
  },
  {
    path: "/about-us",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(AboutUs)}</Suspense>
    ),
  },
  {
    path: "/faqs",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(Faqs)}</Suspense>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(PrivacyPolicy)}
      </Suspense>
    ),
  },
  {
    path: "/returns-exchanges",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(ReturnsExchanges)}
      </Suspense>
    ),
  },
  {
    path: "/terms-conditions",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(TermsConditions)}
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(Cart)}</Suspense>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(WishList)}</Suspense>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(Checkout)}</Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(Profile)}</Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(Login)}</Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(CustomerReg)}
      </Suspense>
    ),
  },
  {
    path: "/interior-designer/register",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(DesignerReg)}
      </Suspense>
    ),
  },
  {
    path: "/thank-you",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(ThankYou)}</Suspense>
    ),
  },
  {
    path: "/coupons",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(Coupons)}</Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(ForgotPassword)}
      </Suspense>
    ),
  },
  {
    path: "/invoice",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(Invoice)}</Suspense>
    ),
  },
  {
    path: "/order-tracking",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(OrderTracking)}
      </Suspense>
    ),
  },
  {
    path: "/order-return",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(OrderReturn)}
      </Suspense>
    ),
  },
  {
    path: "/order-cancel",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(OrderCancel)}
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        {withLayout(ResetPassword)}
      </Suspense>
    ),
  },
  {
    path: "/verify",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(VerifyOTP)}</Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<SuspenseLoader />}>{withLayout(NotFound)}</Suspense>
    ),
  },
]);

const RouteIndex = () => <RouterProvider router={router} />;
export default memo(RouteIndex);
