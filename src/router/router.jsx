import { createBrowserRouter } from "react-router-dom";
import ContactList from "../components/contactList/ContactList";
import Navbar from "../common/ui/Navbar";
import AddContact from "../components/addcontact/AddContact";
import UpdateContact from "../components/updatecontact/UpdateContact";
import ViewContact from "../components/ViewContact/ViewContact";
import ErrorPage from "../common/ui/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <ContactList />
            },
            {
                path: '/add',
                element: <AddContact />
            },
            {
                path: '/view/:contactID',
                element: <ViewContact />
            }
            , {
                path: '/add/:contactID',
                element: <AddContact />
            },
            {
                path: "/edit/:contactID",
                element: <UpdateContact />
            }
        ]
    }
])