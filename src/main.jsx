import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from "./pages/Home/Home.jsx"
import WhoWeAre from './pages/Home/AboutUs/WhoWeAre.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"about-us/who-we-are",
        element:<WhoWeAre/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
