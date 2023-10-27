import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css'

import Header from "./components/Header";
import UserProvider from "./contexts/UserProvider";
import Body from "./components/Body";
import Transactions from "./components/Transactions";

export default function App() {
  
  const [ state, setState ] = useState("null")

  const token = localStorage.getItem("token")
  let content
  useEffect(()=>{
    if(token){
      console.log("in logged")
      setState("logged")
    } else {
      console.log("in unlogged")
      setState("unlogged")
  }
  },[token])

  if (state === "logged"){
    content = (
    <Container>
        <Header loggedin={true}/>
        <Body sidebar={true}>
          <Transactions />
        </Body>
    </Container>
    )
  } else if (state === "unlogged"){
    content = (
    <Container>
        <Header loggedin={false}/>
    </Container>
    )
  } else {
    content = <div></div>
  }

  return (
    <UserProvider>
      {content}
    </UserProvider>
  )
}
