
import { useEffect } from "react";
import { Manager } from "../types"
import { useNavigate } from "react-router-dom";

export default function ManagerAccount() {

    const navigate = useNavigate()
    async function fetchData() {
        await findManager();
    }

    useEffect(()=>{
        if(!localStorage.getItem("token")){
        navigate("/")
        } else {
            fetchData();
            }
        }
    )

    let result:Manager[] = []
    async function findManager() {
        console.log('in findManager');
        const res = await fetch("http://127.0.0.1:5000/manager/account", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
        console.log("through request");
        if (res.ok) {
            const data: Manager = await res.json()
            console.log(data);
            result.push(data)
        } else {
            window.alert("No permissions")
        }
    
    }
    var content;
    if (result.length > 0){const resultFindManager: Manager[] = result
    if(resultFindManager){
        const yourInfo: Manager = resultFindManager[0]
        content = <h3>{`Name: ${yourInfo.first_name} ${yourInfo.last_name}\nUsername: ${yourInfo.username}\nID: ${yourInfo.id}`}</h3>
    }}
  return (
    <div>
        {content}
    </div>
  )
}
