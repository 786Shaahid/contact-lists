import "./contactList.css"
import {ContactReadOnly} from "./ContactReadOnly";
import {EditableContactList} from "./editableContactList"
// import { MyContext } from './add-contacts';

const ContactList=(props)=>{
  
return(
    <>
  <div className="contactList">
    <form  onSubmit={props.handleUpdateContact}>
   <table border='1'>
      <thead>
         <tr>
           <th>Sl. No.</th>
           <th>Name</th>
           <th >Contact Number</th>
           <th>Email</th>
           <th colSpan="2">Action</th>
         </tr>
      </thead>
     <tbody>
       {
        props.contacts.map((contact,index)=>(
          <>
           { props.editContactId===contact.id ?
     ( <EditableContactList handleEditContact={props.handleEditContact}
         index={index}
         editFormData={props.editFormData}
         />): (<ContactReadOnly contact={contact} index={index} deleteHandler={props.deleteHandler} handleEditRow={props.handleEditRow}/>)
           }
          </>
            ))
       }
     </tbody>
   </table>
      </form>
  </div>
    </>
  )
}
export  {ContactList}