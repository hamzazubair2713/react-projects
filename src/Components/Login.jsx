import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #121020;
`;

const FormContainer = styled.form`
  width: 400px;
  background-color: rgba(170, 167, 167, 0.13);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    color: #dde2e6;
  }
  a {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    text-decoration: none;
    color: #b0dfb0;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 30px;
`;

const Input = styled.input`
  height: 50px;
  width: 100%;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: #ffffff;
  border-radius: 20px;
`;

const Button = styled.button`
  width: 200px;
  margin: 30px auto;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@#$!%^&*]{3,}$/;

  async function handelLogin(e) {
    e.preventDefault();
    const validatemail = emailRegex.test(email);
    const validatepassword = passwordRegex.test(password);
    console.log(validatemail, validatepassword);

    if (validatemail && validatepassword) {
      const resp = await fetch(`http://localhost:3030/user?email=${email}`);
      const data = await resp.json();
      console.log(data);
    }
    // console.log(emailRef.current.value); getting value useing Ref
  }
  return (
    <Container>
      <FormContainer onSubmit={handelLogin}>
        <Title>Login Here</Title>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          placeholder="Email or Phone"
          id="username"
          // ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Log In</Button>
        <p>
          Dont have Account <Link to="/sign-up">Sign Up</Link>
        </p>
      </FormContainer>
    </Container>
  );
};
export default Login;
