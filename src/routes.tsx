import { createBrowserRouter } from "react-router-dom";
import Greeting from "./pages/greeting";
import MapView from "./pages/mapView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
  },
  {
    path: "/greeting",
    element: <Greeting />,
  },
  {
    path: "/mapview",
    element: <MapView />,
  },
]);
