import React from "react";
import{Link} from "react-router-dom"; //add manually because not default
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  // const contacts=[{
  //   id:"1",
  //   name:"Hritik",
  //   email:"hritik@gmail.com",
  // }]
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return(
    <div className="main">
  
  <h2>Contact List
   <Link to="/add">
<button className="ui right floated primary button">Add Contact</button>
   </Link>
  </h2>
  <div className="ui celled list">{renderContactList}</div>
    
    </div> 
  );
};

export default ContactList;
