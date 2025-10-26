
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <>
      <section className="container my-3 bg-">
        <div className="row">
          <div className="col-md-6 border p-3 rounded">
            <div className="row d-flex justify-content-around align-items-center">
              <div className="col-md-3">
                <img className="col-md-12 rounded"
                  src={user.photo}
                  alt="No Image!!!"
                />
              </div>
              <div className="col-md-7">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-active">
                    Name: {user?.name}
                  </li>
                  <li className="list-group-item list-group-item-active">
                    Email:{user?.email}
                  </li>
                  <li className="list-group-item list-group-item-active">
                    Contact:8989898989
                  </li>
                </ul>
              </div>
              <div className="col-md-2 d-flex flex-column ">
                <Link className="btn btn-warning my-1" to="/view"><i className="fa fa-eye"></i></Link>
                <Link className="btn btn-primary my-1" to="/edit"><i className="fa fa-pen"></i></Link>
                <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Card;
