
import { Manager } from "../types"

export default function ManagerAccount() {

    let result:Manager[] = []
    async function findManager() {
        console.log('in findManager');
        const res = await fetch("https://manager-dash-uof4.onrender.com/manager/account", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                "Authentication":`Bearer ${localStorage.getItem("token")}`
            }
        })
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
    }} else findManager()
  return (
    <>
        {content}
    </>
  )
}