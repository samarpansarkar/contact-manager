
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../common/ui/Input'
import { useState } from 'react'
import { ContactService } from '../../services/ContactService';
import { Loader } from 'lucide-react';

const AddContact = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    photo: "",
    address: "",
    company: "",
    description: "",
    group: "",

  });
  const [loader, setLoader] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target
    setUser(prev => ({
      ...prev,
      [name]: value
    }))

    console.log(user);

  }

  const formHandler = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      setLoader(true);
      const res = await ContactService.createContact(user)
      alert("Contact Created!!!")
      navigate("/")
      console.log(res);
      setTimeout(setLoader(false), 4000);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container p-3">
        <p className="h4 text-primary">Add Contact</p>
        <p className="fst-italic">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          tempora velit exercitationem similique beatae qui culpa incidunt sunt
          ipsa dolor cupiditate quidem suscipit voluptate quo aperiam
          voluptatibus quasi, quam mollitia?
        </p>
        <div className="row">
          <form className="col-md-4" onSubmit={formHandler}>
            <div className="mb-2">
              <Input
                type="text"
                label="Name"
                placeholder="John Cena"
                name="name"
                id="name"
                value={user.name}
                onChange={inputHandler}
                required={true}
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                label="Photo URL"
                placeholder="https://photoURL.com"
                name="photo"
                id="photo"
                value={user.photo}
                onChange={inputHandler}
                required={true}
              />
            </div>
            <div className="mb-2">
              <Input
                type="email"
                label="Email"
                placeholder="exmple@john.com"
                name="email"
                id="email"
                value={user.email}
                onChange={inputHandler}
                required={true}
              />
            </div>
            <div className="mb-2">
              <Input
                type="tel"
                label="Phone"
                placeholder="0123456789"
                name="phone"
                id="phone"
                value={user.phone}
                onChange={inputHandler}
                required={true}
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                label="contact"
                placeholder="Bangalore, karnataka, 5600056"
                name="address"
                id="contact"
                value={user.address}
                onChange={inputHandler}
                required={true}
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                label="Company"
                placeholder="Tek Pyramid"
                name="company"
                id="Company"
                value={user.company}
                onChange={inputHandler}
                required={true}
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                label="Description"
                placeholder="About this person"
                name="description"
                id="Description"
                value={user.description}
                onChange={inputHandler}
                required={true}
              />
            </div>
            <div className="mb-2">
              <Input
                type="text"
                label="Group"
                placeholder="Group"
                name="group"
                id="Group"
                value={user.group}
                onChange={inputHandler}
                required={true}
              />
            </div>
            <div className="mb-2">
              <Link className="btn btn-dark" to="/" >
                Cancel
              </Link>
              {loader ? <Loader /> : <button type='submit' className="btn btn-primary ms-2" >
                Create
              </button>}

            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default AddContact
