import { createBrowserRouter } from "react-router-dom";
import ContactList from "../components/contactList/ContactList";
import Navbar from "../common/ui/Navbar";
import AddContact from "../components/addcontact/AddContact";

export const router=createBrowserRouter([
    {
    path:'/',
    element:<Navbar/>,
    children:[
        {
            index:true,
            element:<ContactList/>
        }
        ,{
            path:'/add',
            element:<AddContact/>
        }
    ]
    }
])