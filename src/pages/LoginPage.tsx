import Body from "../components/Body"
import Login from "../components/forms/Login"

function LoginPage() {
  return (
    <Body sidebar={false}>
        <Login />
    </Body>
  )
}

export default LoginPage