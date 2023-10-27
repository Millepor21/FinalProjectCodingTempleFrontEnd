import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { UserContext } from '../contexts/UserProvider'


export default function Logout() {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(()=>{
    localStorage.clear()
    setUser({username: '', token: ''})
    navigate('/')
  },[])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Spinner />
    </UserContext.Provider>
  )
}