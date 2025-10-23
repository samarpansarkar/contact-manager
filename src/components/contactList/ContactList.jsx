import { Link} from "react-router-dom"
import Card from "../../common/ui/Card"


const ContactList = () => {
  return (
    <>
    <section className="container p-3">
         <p className="h4">Contact List 
            <span className="ms-3"><Link className="btn btn-primary" to='/add'><i className="fa fa-plus-circle"></i>Add</Link></span>
         </p>
         <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nihil, sint libero cum soluta odit cupiditate repudiandae harum ipsum esse deserunt ea reiciendis facere tempore non doloremque voluptate laboriosam fugiat.</p>
         <div className="row">
            <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Search contact" />
            </div>
         </div>
         <div className="row d-flex">
             <Card/>
             {/* <Card/> */}
         </div>
    </section>
    
        
    </>
  )
}

export default ContactList
