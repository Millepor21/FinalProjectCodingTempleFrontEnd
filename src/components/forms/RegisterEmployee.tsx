import { useRef, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Employee, Manager } from "../../types";
import { Stack } from "react-bootstrap";

export default function Register() {
  const navigate = useNavigate();

  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const fNameField = useRef<HTMLInputElement>(null);
  const lNameField = useRef<HTMLInputElement>(null);
  const managerIdField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  async function handleRegistrationData(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    console.log("in handle data");
    const registrationData: Partial<Employee> = {
      username: usernameField.current!.value,
      password: passwordField.current!.value,
      first_name: fNameField.current!.value,
      last_name: lNameField.current!.value,
      manager_id: managerIdField.current!.value,
    };
    clearForm();
    await registerEmployee(registrationData);
  }

  async function registerEmployee(registrationData: Partial<Employee>) {
    console.log("in registration fetch");
    console.log("Request Data:", JSON.stringify(registrationData));
    const res = await fetch("http://127.0.0.1:5000/register_employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationData),
      }
    );
    if (res.ok) {
      console.log("in res.ok");
      const data = await res.json();
      console.log(data);
      navigate("/login_employee");
    } else {
      console.log("res not good");
      window.alert("Registration Failed");
    }
  }

  function clearForm() {
    usernameField.current!.value = "";
    passwordField.current!.value = "";
    fNameField.current!.value = "";
    lNameField.current!.value = "";
    managerIdField.current!.value = "";
  }

  async function getManagers(): Promise<Manager[]> {
    const res = await fetch("http://127.0.0.1:5000/manager", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      const managers: Manager[] = await res.json();
      return managers;
    } else window.alert("managers failed to load");
    return [
      {
        username: "",
        password: "",
      },
    ];
  }

  async function listManagers() {
    const managers = await getManagers();
    const listManagers: JSX.Element = (<ul>
        {
        managers!.map(
          (manager: Manager) => (
      <li
        key={manager.id}
      >{`Name: ${manager.first_name} ${manager.last_name}\nId: ${manager.id}`}</li>
    )
    )
    }
    </ul>)
    return listManagers;
  }
  const [managersList, setManagersList] = useState<JSX.Element | null>(null);
  useEffect(() => {
    listManagers().then((managers) => {
      setManagersList(managers)
    });
  }, []);
  return (
    <Stack direction="horizontal">
      <div className="manager_list">
        {managersList}
      </div>
      <form onSubmit={handleRegistrationData} className="employee_reg_form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={usernameField} required />
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" ref={passwordField} required />
        <br />
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name" ref={fNameField} required />
        <br />
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" ref={lNameField} required />
        <br />
        <label htmlFor="manager_id">Manager Id</label>
        <input type="text" id="manager_id" ref={managerIdField} required />
        <br />
        <input type="submit" value="Register" />
      </form>
    </Stack>
  )
}
