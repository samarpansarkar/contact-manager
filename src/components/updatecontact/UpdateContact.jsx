import React, { useState } from "react";
import Input from "../../common/ui/Input";
import { Link } from "react-router-dom";

const UpdateContact = () => {
    const [userData, setUserData] = useState({
        name: "Abhijit Kumar",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    email: "abhijit@example.com",
    phone: "9876543210",
    contact: "Bangalore, Karnataka, 5600056",
    company: "Tek Pyramid",
    description: "Front-end Developer with 2 years of experience.",
    group: "Work Friends",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <>
      <section className="container p-3">
        <p className="h4 text-success">Update Contact</p>
        <p className="fst-italic">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          tempora velit exercitationem similique beatae qui culpa incidunt sunt
          ipsa dolor cupiditate quidem suscipit voluptate quo aperiam
          voluptatibus quasi, quam mollitia?
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-2">
              <Input
                type="text"
                label="Name"
                placeholder="John Cena"
                name="name"
                id="name"
                value={userData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <Input
                type="text"
                label="Photo URL"
                placeholder="https://photoURL.com"
                name="photo"
                id="photo"
                value={userData.photo}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <Input
                type="email"
                label="Email"
                placeholder="example@john.com"
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <Input
                type="tel"
                label="Phone"
                placeholder="0123456789"
                name="phone"
                id="phone"
                value={userData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <Input
                type="text"
                label="Contact"
                placeholder="Bangalore, Karnataka, 5600056"
                name="contact"
                id="contact"
                value={userData.contact}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <Input
                type="text"
                label="Company"
                placeholder="Tek Pyramid"
                name="company"
                id="company"
                value={userData.company}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <Input
                type="text"
                label="Description"
                placeholder="About this person"
                name="description"
                id="description"
                value={userData.description}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <Input
                type="text"
                label="Group"
                placeholder="Group"
                name="group"
                id="group"
                value={userData.group}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <Link className="btn btn-dark" to="/">
                Cancel
              </Link>
              <Link className="btn btn-success ms-2" to="/">
                Create
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateContact;
