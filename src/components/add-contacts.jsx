import {useState,useEffect} from "react";

import "./add-contacts.css";
import {ContactList} from "./contact-list"

const AddContact=()=>{
  const [contacts,setContacts]=useState([]);
  
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
   // for set editable data 
const [editFormData,setEditFormData]=useState({
  name:"",
  phone:"",
  email:""
})
    // fetching data from url
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>res.json())
      .then((data)=>{
        setContacts(data);
      }).catch((err)=>console.log(err));
  },[])

// set input data to contacts while submiting the form 
  const handleAddContactSubmit=(e)=>{
    e.preventDefault();
    if(!phone){
      alert("Phone number is empty !");
      return;
    }
    const formID=  Date.now();
    const formData={id:formID,name,phone,email};
    const newArr=[...contacts,formData]
    setContacts(newArr); 
    setName('');
    setPhone('');
    setEmail('');
  }

  // for set editable contact id
const [editContactId,setEditContactId]=useState(null);
const handleEditRow=(event,contact)=>{
  event.preventDefault();
  setEditContactId(contact.id);

  const formValue={
    name:contact.name,
    phone:contact.phone,
    email:contact.email
  }
setEditFormData(formValue);
}

 
  // for 
const handleEditContact=(event)=>{
  event.preventDefault();
     const fieldName=event.target.getAttribute("name");
     const fieldValue=event.target.value;
     const newFormData={...editFormData};
     newFormData[fieldName]=fieldValue;
  setEditFormData(newFormData)
}
  
  // function to delte contact from contact list
 const removeContact=(id)=>{
  const deleteContact= contacts.filter((contact)=> 
     id!==contact.id);
       setContacts(deleteContact);
     }

  // for submitting the updated contacts
  const handleUpdateContact=(event)=>{
     event.preventDefault();

    const updateContact={
      id:editContactId,
      name:editFormData.name,
      phone:editFormData.phone,
      email:editFormData.email
    }
    const newUpdatedData=[...contacts];
    const index=contacts.findIndex((contact)=> contact.id===editContactId)
    newUpdatedData[index]=updateContact;
    setContacts(newUpdatedData);
    setEditContactId(null);
    
  }
  
  return(
    <>
     <div className="add-contact">
       <form onSubmit={handleAddContactSubmit}>
      <lable htmlFor="name" > Name </lable><br/>
      <input type="text" placeholder="Enter Name" value={name} 
        name='name'
        onChange={(e)=>setName(e.target.value)}
        /><br/>
      <lable htmlFor="phone"> Contact Number </lable><br/>
      <input type="number" placeholder="Enter Phone Number" 
          value={phone} 
        name='number'
         onChange={(e)=>setPhone(e.target.value)}
        /><br/>
      <lable htmlFor='email'> Email </lable><br/>
      <input type="email" placeholder="Enter Email Id" value={email} 
        name="email"
        onChange={(e)=>setEmail(e.target.value)}
        /><br/><br/>
      <button type="submit">+ Add</button> 
       </form>
      <hr/>
     </div>
       {/* contact list container */}
      <h1>List Of Contacts</h1>
      <hr/>
            {contacts.length>0?
       <ContactList contacts={contacts} 
         deleteHandler={removeContact}  
         handleEditRow={handleEditRow}
         editContactId={editContactId}
       editFormData={editFormData}
         handleEditContact={handleEditContact}
         handleUpdateContact={handleUpdateContact}
         />
       :<div>Loading ...</div>
            }
    
    </>
  )
}
export  {AddContact}