import React, { useState } from "react";
import { useNavigate } from "react-router";
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@#$!%^&*]{3,}$/;

  const validatemail = emailRegex.test(email);
  const validatepassword = passwordRegex.test(password);
  console.log(validatemail, validatepassword);
  const Navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (validatemail && validatepassword) {
      try {
        const resp = await fetch("http://localhost:3030/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Date.now(),
            email: email.toLocaleLowerCase(),
            password: password.toLocaleLowerCase(),
          }),
        });
        console.log("data post Success fully");
        console.log(resp);
        if (resp.status == 200 || resp.status == 201) {
          Navigate("/");
        }
        setEmail("");
        setPassword("");
      } catch (e) {
        console.error("Error while submiting the form ", e);
      }
    }
  };
  return (
    <Container>
      <FormContainer onSubmit={handelSubmit}>
        <Title>Sign Up</Title>
        <Label htmlFor="username">Email</Label>
        <Input
          type="text"
          placeholder="adam@example.com"
          id="username"
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
        <Button>Sign Up</Button>
      </FormContainer>
    </Container>
  );
};
export default SignUp;
