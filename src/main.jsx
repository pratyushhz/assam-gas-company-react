import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './components/Error.jsx';
import Home from "./pages/Home/Home.jsx"
import WhoWeAre from './pages/Home/AboutUs/WhoWeAre.jsx';
import Subpage from './pages/common/Subpage.jsx';
// import DynamicPage from './pages/DynamicPage.jsx';
import Tender from './pages/Tender.jsx';


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
        // path:"who-we-are",
        path:":urlTitle",
        element:<WhoWeAre/>
      },
      {
        path:"vendors/currenttenders",
        element:<Tender/>
      },
      {
        path:":section/:slug",
        element:<Subpage/>
      },
      // {
      //   path: ":section/:slug",
      //   element: <DynamicPage />
      // },
    ],
    errorElement: <Error/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
