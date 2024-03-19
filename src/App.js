import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import ContactId from "./pages/contactID";
import Search from "./components/layout/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/contact/:id",
    element: <ContactId />,
  },
]);

function App() {
  return (
    <div className="flex gap-25">
      <Header />
      <div className="dashboard_layout">
        <Search />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
