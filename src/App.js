import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '*',
    element: <Error />
  }
])

export { router };
