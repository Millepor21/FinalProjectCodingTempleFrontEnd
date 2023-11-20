import { useRef, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Manager } from "../../types";

export default function Register() {
  const navigate = useNavigate();

  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const fNameField = useRef<HTMLInputElement>(null);
  const lNameField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  function handleRegistrationData(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    console.log('in handle data');
    const registrationData: Partial<Manager> = {
      username: usernameField.current!.value,
      password: passwordField.current!.value,
      first_name: fNameField.current!.value,
      last_name: lNameField.current!.value,
    };
    clearForm();
    registerUser(registrationData);
    navigate('/')
  }

  async function registerUser(registrationData: Partial<Manager>) {
    console.log('in registration fetch');
    console.log("Request Data:", JSON.stringify(registrationData));
    const res = await fetch("https://manager-dash-uof4.onrender.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrationData),
    });
    if (res.ok) {
      console.log('in res.ok');
      const data = await res.json();
      console.log(data);
      navigate("/login");
    } else {
      console.log('res not good');
      window.alert("Registration Failed");
    }
  }

  function clearForm() {
    usernameField.current!.value = "";
    passwordField.current!.value = "";
    fNameField.current!.value = "";
    lNameField.current!.value = "";
  }

  return (
    <form onSubmit={handleRegistrationData} className="manager_reg_form">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" ref={usernameField} required/><br/>
      <label htmlFor="password">Password</label>
      <input type="text" id="password" ref={passwordField} required/><br/>
      <label htmlFor="first_name">First Name</label>
      <input type="text" id="first_name" ref={fNameField} required/><br/>
      <label htmlFor="last_name">Last Name</label>
      <input type="text" id="last_name" ref={lNameField} required/><br/><br/>
      <input type="submit" value="Register" />
    </form>
  );
}
