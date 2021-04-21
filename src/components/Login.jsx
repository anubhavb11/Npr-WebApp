

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
// import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // const handelLogin = async() => {
  //   const response = await fetch('https://monaalcreationbackend.herokuapp.com/home/signin', { 
  //     method: 'post', 
  //     headers: new Headers({
        
  //         "UserId": "anubhav@intern",
  //         "Password": "123456"
      
  //     })

  //   });
  //   const data = await response.json();
  //   console.log(data);

  // }

  const handelLogin = async() => {
    const article = {"UserId": "anubhav@intern",
            "Password": "123456"
         };
    const response = await axios.post('https://monaalcreationbackend.herokuapp.com/home/signin', article);
    // const data = await response.json();
     console.log(response);
  }

  // const handelLogin = async() => {
  // const response = await axios.post(
  //   'https://monaalcreationbackend.herokuapp.com/home/signin',
   
  //   { params: { "UserId": "anubhav@intern",
  //            "Password": "123456"  }
  //    }
  // )
  // console.log(response.data)
  // }

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
        <Button block size="lg" onClick={handelLogin} type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}