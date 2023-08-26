import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import ProductScreen from "../pages/Product/ProductScreen";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />
    },
    {
      path: "/product/:id",
      element: <ProductScreen />
    },
    {
      path: "/genre/:id",
      element: <HomeScreen />
    }
]);

