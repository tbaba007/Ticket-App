
import {
createBrowserRouter
} from 'react-router-dom';
import Login from './components/login';
import Overview from './components/overview';
import Tickets from './components/tickets';
import CreateTicket from './components/tickets/createTicket';



const routes=createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },  {
        path:'/',
        element:<Login/>
    },
    {
        path:'/overview',
        element: <Overview/>
    },
    {
        path:'/tickets',
        element: <Tickets/>
       
    },
    {
        path:'/createticket',
        element: <CreateTicket/>
    },
])
export default routes;