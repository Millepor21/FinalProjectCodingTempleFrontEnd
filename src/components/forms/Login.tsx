import { useRef, FormEvent, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Manager } from "../../types";
import { UserContext } from "../../contexts/UserProvider";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  function handleLoginData(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    console.log('in handle data');
    const loginInfo: Partial<Manager> = {
      username: usernameField.current!.value,
      password: passwordField.current!.value,
    };
    clearForm();
    loginUser(loginInfo);
    console.log('through login user');
    navigate("/");
  }

  async function loginUser(loginInfo: Partial<Manager>) {
    console.log('in login user');
    const res = await fetch("https://manager-dash-uof4.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    });
    if (res.ok) {
      console.log('in res.ok');
      const data = await res.json();
      const accessToken = data.access_token;
      console.log('before setUser');
      setUser({
        username: loginInfo.username ? loginInfo.username : "",
        token: accessToken,
      });
      console.log('after set user');
      localStorage.setItem("token", accessToken);
    } else window.alert("Failed Login");
  }

  function clearForm() {
    usernameField.current!.value = "";
    passwordField.current!.value = "";
  }

  return (
    <form onSubmit={handleLoginData}>
      <label htmlFor="username">Username</label>
      <br />
      <input type="text" name="username" ref={usernameField} required />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="text" name="password" ref={passwordField} required />
      <br /><br/>
      <input type="submit" value="Login" />
    </form>
  );
}
