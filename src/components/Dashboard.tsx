import { useContext } from "react"
import { UserContext } from "../contexts/UserProvider"

export default function Dashboard() {
  const { user } = useContext(UserContext)
  console.log(user, "from dash");
  return (
    <div className="dash">Welcome to the newest dashboard option for your business!</div>
  )
}
