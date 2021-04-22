import React, { useState } from "react";
import Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import {Link,Redirect,useHistory} from 'react-router-dom'

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState({});
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async (event)=> {
    event.preventDefault();
   
    const article = {
      "UserId": `${email}`,
      "Password": `${password}`
     
    };
    const response = await axios.post('https://monaalcreationbackend.herokuapp.com/home/signin', article);

    console.log(response.data);
    setUser(response.data);
    setCookieFunction(response.data);
    if(response!=null){
     props.history.push('/')
    }

  }
  const setCookieFunction = (value) => {
    
    localStorage.setItem('token',  JSON.stringify(value));
    console.log("DOME")
  }
  

  
  return (
    
    <div className="Login">
      <h1>Monaal Creation</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        
       
      </Form>
    </div>
  );
}