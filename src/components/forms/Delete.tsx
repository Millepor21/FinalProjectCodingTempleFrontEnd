import { useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Delete() {
  const navigate = useNavigate();

  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  async function handleDeleteData(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    const res = await fetch("https://manager-dash-uof4.onrender.com/manager", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")!}`,
      },
      body: JSON.stringify({
        username: usernameField.current!.value,
        password: passwordField.current!.value,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      navigate("/logout");
    } else window.alert("Delete Failed");
  }

  return (
    <form onSubmit={handleDeleteData}>
      <label htmlFor="username">Username</label>
      <br />
      <input type="text" name="username" ref={usernameField} required />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" ref={passwordField} required />
      <br />
      <input type="submit" value="Delete" />
    </form>
  );
}
