
import MainTemplate from "./components/templates/mainTemplate/MainTemplate";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
const router = createBrowserRouter([
  { path: "/", element: <MainTemplate /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
