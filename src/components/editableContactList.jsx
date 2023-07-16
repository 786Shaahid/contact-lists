import './contactList.css';

const EditableContactList=({handleEditContact,editFormData,index})=>{
  
 return(
<>
     <tr>
       <td>{index+1}</td>
     <td>
       <input type="text"
           value={editFormData.name}
           name="name"
           onChange={handleEditContact}
           />
     </td>
     <td>
       <input type="text" 
         value={editFormData.phone} 
          onChange={handleEditContact}
           name="phone"/> 
     </td>
     <td>
       <input type="email"
         value={editFormData.email}
        onChange={handleEditContact}
           name="email" /> 
     </td>
       <td colSpan="2">
         <button type="submit" className="btn" >Save</button>
       </td>
     </tr>
     
    </>
   )
}
export {EditableContactList};