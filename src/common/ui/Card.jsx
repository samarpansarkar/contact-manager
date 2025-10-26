import { Link } from "react-router-dom";
import diffProfile from '../../assets/defultProfilePic.png'

const Card = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-between hover:shadow-lg transition-shadow duration-300 text-center">
      {/* Profile Image */}
      <img
        src={user.photo ? user.photo : diffProfile}
        alt={user.name || "No Image"}
        className="w-24 h-24 object-cover rounded-full border mb-3"
      />

      {/* User Info */}
      <div className="w-full">
        <p className="font-semibold text-lg text-gray-800 mb-1">
          Name: {user?.name}
        </p>
        <p className="text-gray-600 text-sm truncate">
          Email: {user?.email}
        </p>
        <p className="text-gray-600 text-sm">
          Contact: {user?.phone || "N/A"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
        <Link
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-2 rounded-lg transition"
          to="/view/:"
        >
          <i className="fa fa-eye"></i>
        </Link>
        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition"
          to="/edit"
        >
          <i className="fa fa-pen"></i>
        </Link>
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition">
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
