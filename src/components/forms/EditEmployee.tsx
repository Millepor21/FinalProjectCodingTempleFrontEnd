import { useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { UpdateUser } from "../../types";

export default function EditEmployee() {
  const navigate = useNavigate();

  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const newUsernameField = useRef<HTMLInputElement>(null);
  const newPasswordField = useRef<HTMLInputElement>(null);
  const fNameField = useRef<HTMLInputElement>(null);
  const lNameField = useRef<HTMLInputElement>(null);

  function handleEditData(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    console.log('in handle data');
    const editData: Partial<UpdateUser> = {
      username: usernameField.current!.value,
      password: passwordField.current!.value,
      new_username: newUsernameField.current?.value,
      new_password: newPasswordField.current?.value,
      first_name: fNameField.current?.value,
      last_name: lNameField.current?.value,
    };
    clearForm();
    editUser(editData);
    navigate('/')
  }

  async function editUser(editData: Partial<UpdateUser>) {
    console.log('in registration fetch');
    console.log("Request Data:", JSON.stringify(editData));
    const res = await fetch("http://127.0.0.1:5000/employee", {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
     },
      body: JSON.stringify(editData),
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
    <form onSubmit={handleEditData} className="manager_edit_form">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" ref={usernameField} required/><br/>
      <label htmlFor="password">Password</label>
      <input type="text" id="password" ref={passwordField} required/><br/>
      <label htmlFor="new_username">New Username</label>
      <input type="text" id="new_username" ref={newUsernameField} /><br/>
      <label htmlFor="new_password">New Password</label>
      <input type="text" id="new_password" ref={newPasswordField} /><br/>
      <label htmlFor="first_name">First Name</label>
      <input type="text" id="first_name" ref={fNameField} /><br/>
      <label htmlFor="last_name">Last Name</label>
      <input type="text" id="last_name" ref={lNameField} /><br/><br/>
      <input type="submit" value="Edit" />
    </form>
  );
}