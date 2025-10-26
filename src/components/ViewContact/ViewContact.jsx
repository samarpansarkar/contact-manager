import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Users,
  Copy,
  CheckCircle,
} from "lucide-react";
import { ContactService } from '../../services/ContactService';
import Loader from '../../common/ui/Loader';


const ViewContact = () => {
  const { contactID } = useParams()
  // console.log(contactID);
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(false);
  const [copiedField, setCopiedField] = useState("");

  // console.log("name", user.PromiseResult.name);

  const getContact = async () => {
    try {
      setLoader(true);
      const res = await ContactService.getContact(contactID);
      setUser(res);
      console.log(res);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("View Contact: ", error.message);
    }
  }

  useEffect(() => {
    getContact();
  }, [])


  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedField(field);
        setTimeout(() => setCopiedField(""), 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };
  return (
    <section className="container mx-auto p-6">
      {loader ? <Loader /> :
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white text-center">
            <h1 className="text-3xl font-semibold">{user.name}</h1>
            <p className="text-blue-100">{user.company}</p>
          </div>
          <div className="flex flex-col md:flex-row p-6 gap-6">
            <div className="md:w-1/3 flex flex-col items-center">
              <img
                src={user?.photo}
                alt={user?.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
              <span className="mt-3 text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {user?.group}
              </span>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  About
                </h2>
                <p className="text-gray-600 italic">{user?.description}</p>
              </div>
              <div className="space-y-3 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="text-blue-500" size={20} />
                    <span className="text-gray-700">{user?.email}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(user.email, "email")}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    {copiedField === "email" ? (
                      <>
                        <CheckCircle size={16} /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={16} /> Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="text-green-500" size={20} />
                    <span className="text-gray-700">{user?.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(user?.phone, "phone")}
                    className="text-sm text-green-600 hover:text-green-800 flex items-center gap-1"
                  >
                    {copiedField === "phone" ? (
                      <>
                        <CheckCircle size={16} /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={16} /> Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-red-500" size={20} />
                  <span className="text-gray-700">{user?.contact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="text-purple-500" size={20} />
                  <span className="text-gray-700">{user?.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-yellow-500" size={20} />
                  <span className="text-gray-700">{user?.group}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 border-t border-gray-200 text-center p-4">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Back to Contact List
            </Link>
          </div>

        </div>
      }
    </section>

  )
}

export default ViewContact