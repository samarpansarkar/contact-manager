import { Link } from "react-router-dom"
import Card from "../../common/ui/Card"
import { useEffect, useState } from "react"
import { AllContactFromJSONServer, ContactService } from "../../services/ContactService";
import Loader from "../../common/ui/Loader";
import debounce from "../../services/Debounce";


const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [contact2, setContact2] = useState([]);
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState("");
  const [filterContacts, setFilterContacts] = useState(contacts);

  const allContacts = async () => {
    try {
      setLoader(true);
      const res = await AllContactFromJSONServer.AllContact();
      console.log(res);
      setContact2(res)
      setLoader(false);
    } catch (error) {
      console.error("Fail to Fetch data from JSON 3rd party server", error.message);
      setLoader(false);
    }
  }

  const getAllContact = async () => {
    try {
      setLoader(true);
      const res = await ContactService.getAllContact();
      console.log(res);
      setContacts(res);
      setFilterContacts(res);
      setLoader(false);
    } catch (error) {
      console.error("failed to fetch", error.message);
      setLoader(false);
    }
  }

  useEffect(() => {
    (async () => {
      await getAllContact();
      await allContacts();
    })();
  }, []);


  const processData = contacts.map(contact => {
    const searchText = Object.values(contact).map(item => {
      return String(item)
    }).join(" ").toLowerCase();
    return { ...contact, searchText: searchText };
  })

  const serchHandler = (e) => {
    const value = e.target.value;
    setQuery(value);
    const searchContact = processData.filter(contact => {
      return contact.searchText.toLowerCase().includes(value.trim())
    })
    if (query === "") return setContacts(contacts);
    else {
      setFilterContacts(searchContact)
    }
  }

  const debounceSearch = debounce(serchHandler, 2000)


  return (
    <>
      <section className="container p-3">
        <p className="h4">Contact List
          <span className="ms-3"><Link className="btn btn-primary" to='/add'><i className="fa fa-plus-circle"></i>Add</Link></span>
        </p>
        <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nihil, sint libero cum soluta odit cupiditate repudiandae harum ipsum esse deserunt ea reiciendis facere tempore non doloremque voluptate laboriosam fugiat.</p>
        <div className="row mb-10">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Search contact" onChange={(e) => { debounceSearch(e) }} />
          </div>
        </div>
        {loader ? <Loader /> :
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-blue-300 p-4">
            {/* For identifying purpose - blue section */}
            {filterContacts.map((user) => (
              <Card user={user} key={user.id} />
            ))}
            {/* {contact2.map((user) => (
                <Card user={user} key={user.id} disable={true} />
              ))} */}
          </div>}
      </section>


    </>
  )
}

export default ContactList
