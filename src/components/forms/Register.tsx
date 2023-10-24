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
    const registrationData: Manager = {
      username: usernameField.current!.value,
      password: passwordField.current!.value,
      first_name: fNameField.current!.value,
      last_name: lNameField.current!.value,
    };
    clearForm();
    registerUser(registrationData);
    navigate("/login");
  }

  async function registerUser(registrationData: Manager) {
    const res = await fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrationData),
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      navigate("/login");
    } else window.alert("Registration Failed");
  }

  function clearForm() {
    usernameField.current!.value = "";
    passwordField.current!.value = "";
    fNameField.current!.value = "";
    lNameField.current!.value = "";
  }

  return (
    <form onSubmit={handleRegistrationData}>
      <label htmlFor="username">Username</label><br/>
      <input type="text" name="username" ref={usernameField} required/><br/>
      <label htmlFor="password">Password</label><br/>
      <input type="text" name="password" ref={passwordField} required/><br/>
      <label htmlFor="first_name">First Name</label><br/>
      <input type="text" name="first_name" ref={fNameField} required/><br/>
      <label htmlFor="last_name">Last Name</label><br/>
      <input type="text" name="last_name" ref={lNameField} required/><br/>
      <input type="submit" value="Register" />
    </form>
  );
}
