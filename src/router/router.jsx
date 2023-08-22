import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import ProductScreen from "../pages/Product/ProductScreen";
import GenrePage from "../pages/GenrePage/GenrePage";
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
      path: "/genre/:key",
      element: <GenrePage />
    }
]);

