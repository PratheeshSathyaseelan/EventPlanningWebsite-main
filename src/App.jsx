// import Sidebar from "./components/sidebar"
// import Nvbar from "./components/nvbar"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// // import About from "./pages/About"
// // import Contact from "./pages/Contact"
// import { Suspense, lazy } from "react"
// const LazyAbout=lazy(()=>import(".pages/About"))
// const LazyContact=lazy(()=>import(".pages/Contact"))

import Login from "./components/login"
import Register from "./components/register"
import Nvbar from "./components/nvbar"
import AdminNavbar from "./components/admindashboard"
import AddEvents from "./components/addevents"
import AdminLogin from "./components/adminlogin"
import EventList from "./components/adminevents"
import './assets/css/addevents.css';
import Home from "./components/homep"
import Adminprofile from "./components/adminprofile"
import BookEvents from "./components/bookevents"
import HomePage from "./components/home2"
import DashboardAdmin from "./components/dashboard-admin-2"
import DashboardUser from "./components/userdashboard"
import AllEvents from "./components/allevents"
import Allvenues from "./components/allvenues"
import AddVenue from "./components/addvenue"
import AllBookings from "./components/allbookings"
import MyBookings from "./components/mybookings"
import MakePayment from "./components/makepayment"
import MyPayments from "./components/mypayment"
import AllEventsUser from "./components/alleventsuser"
function App() {
//   const router=createBrowserRouter([{
//   path:'/register',
//   element :<Register/>

// }])
const router=createBrowserRouter([{
  path:'/register',
  element :<Register/>
},
{
path:'/',
element:<HomePage/>
},
{
  path:'/admindashboard',
  element:<DashboardAdmin/>
  },
{
path:'/addevent',
element:<AddEvents/>
},
{
path:'/all-bookings',
element:<AllBookings/>
},
{
path:'/all-event',
element:<AllEvents/>
},
{
  path:'/logout',
  element:<Login/>
  },
  {
    path:'/adminlogin',
    element:<AdminLogin/>
    },
    {
      path:'/adminprofile',
      element:<Adminprofile/>
      },
      {
        path:'/bookevents',
        element:<BookEvents/>
        },
        {
          path:'/login',
          element:<Login/>
          },
          {
            path:'/userdashboard',
            element:<DashboardUser/>
            },
            {
              path:'/allvenues',
              element:<Allvenues/>
              },
              {
                path:'/addvenue',
                element:<AddVenue/>
                },
                {
                  path:'/mybookings',
                  element:<MyBookings/>
                  },
                  {
                    path:'/makepayment',
                    element:<MakePayment/>
                    },
                    {
                      path:'/makepayment',
                      element:<MakePayment/>
                      },
                      {
                        path:'/mypayment',
                        element:<MyPayments/>
                        },
                        {
                          path:'/all-event-user',
                          element:<AllEventsUser/>
                          }
        

])
// },{
//   path:'/about',
//   element :<Suspense><LazyAbout/></Suspense>
// },{
//   path:'/contact',
//   element :<Suspense><LazyContact/></Suspense>
// },
// {
//   path:'/',
//   element:<Nvbar/>
// }
// ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    
  
    </div>
    
    
  )
}

export default App
