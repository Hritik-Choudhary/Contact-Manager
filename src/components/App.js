import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact.name);
    // const newContactList = contacts.filter((cont) => {        // copy contact to new list 
    //   return contact.name !== cont.name;
    // });
      
    

    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {        // copy contact to new list 
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  const updateContactHandler=  (contact)=>{
    
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); // jo retrive hua usko convert kia string m 
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Router>

<div className="ui container">
   
       <Header/>
       <Switch>

          <Route path="/" exact 
             render={(props) => (<ContactList {...props} contacts={contacts} getContactId={removeContactHandler}/>)} />
          
          
          <Route path="/add" 
           render={(props) =>(
            <AddContact {...props} addContactHandler={addContactHandler}/>
           )}
           />
           <Route path="/edit" 
           render={(props) =>(
            <EditContact {...props} updateContactHandler={updateContactHandler}/>
           )}
           />

        </Switch>

    </div>
    </Router>
    
  );
}

export default App;
