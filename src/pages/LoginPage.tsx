import Body from "../components/Body"
import Login from "../components/forms/Login"
import UserProvider from "../contexts/UserProvider"

export default function LoginPage() {
  return (
    <Body sidebar={false}>
      <UserProvider>
        <Login />
      </UserProvider>
    </Body>
  )
}