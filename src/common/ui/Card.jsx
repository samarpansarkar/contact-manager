import { Link } from "react-router-dom";
import diffProfile from '../../assets/defultProfilePic.png'

const Card = ({ user, disable }) => {

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-between hover:shadow-lg transition-shadow duration-300 text-center">

      <img
        src={user.photo ? user.photo : diffProfile}
        alt={user.name || "No Image"}
        className="w-24 h-24 object-cover rounded-full border mb-3"
      />


      <div className="w-full border-1">
        <p className="font-semibold text-lg text-gray-800 mb-0 border">
          Name: {user?.name}
        </p>
        <p className="text-gray-600 text-sm truncate border mb-0">
          Email: {user?.email}
        </p>
        <p className="text-gray-600 text-sm border mt-0 mb-0">
          Contact: {user?.phone || "N/A"}
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <Link
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-2 rounded-lg transition"
          to={`/view/${user.id}`}
        >
          <i className="fa fa-eye"></i>
        </Link>
        {disable ? <p className="text-[10px] text-red-500">*this contact info fetch from 3rd party web that's why edit and delete button are disable</p> : <>
          <Link  //!add this logic for the unchangeable data we are getting from that 3rd party JSON server
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition"
            to={`/edit/${user.id}`}>
            <i className="fa fa-pen"></i>
          </Link>
          <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition">
            <i className="fa fa-trash"></i>
          </button>
        </>
        }
      </div>
    </div>
  );
};

export default Card;
