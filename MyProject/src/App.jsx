import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from './Components/Admin/Admin';
import UserHome from './Components/User/UserHome';
import ServiceList from './Components/Services/ServicesList';
import MeetingsList from './Components/Meeting/MeetingsList';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserHome />,
    },
    {
      path: "/admin",
      element: <Admin />,
      errorElement: <div><h1>ERROR PAGE / 404</h1></div>,
      children: [
        {
          path: 'services',
          element: <ServiceList isAdmin={true} />,
          errorElement: <div><h1>ERROR PAGE / 404</h1></div>,
        },
        {
          path: 'meetings',
          element: <MeetingsList />,
          errorElement: <div><h1>ERROR PAGE / 404</h1></div>,
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
