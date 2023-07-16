// show all list
const ContactReadOnly=({contact,index,deleteHandler,handleEditRow})=>{
    return(
   <>
     <tr key={contact.id}>
                <td>{index+1}</td>
                <td>{contact.name}</td>
                <td >{contact.phone}</td>
                <td>{contact.email}</td>
                <td><button type="submit" onClick={(e)=>handleEditRow(e,contact)}>Update</button> </td>
                <td><button type="submit" onClick={()=>deleteHandler(contact.id)} >Delete</button></td>
                </tr> 
   </>
    )
   }
   export {ContactReadOnly};