import { useContext } from "react";
import { FillInfoContext } from "./Components/Context";
 export const searchItems=[
    {
        "name":"bhanu",
        "email":"bhanu@gmail.com",
        "age":21,
        "gender":"female"
    },
    {
        "name":"meenakshi",
        "email":"meenakshi@gmail.com",
        "age":21,
        "gender":"female"
    },
    {
        "name":"hello",
        "email":"hello@gmail.com",
        "age":21,
        "gender":"male"
    },
    {
        "name":"hi",
        "email":"hi@gmail.com",
        "age":21,
        "gender":"male"
    },
    {
        "name":"meena",
        "email":"meena@gmail.com",
        "age":21,
        "gender":"female"
    },
    {
        "name":"meenakshi",
        "email":"hellohi@gmail.com",
        "age":20,
        "gender":"female"
    }
]

export default function Search(){
    const {state,dispatch}=useContext(FillInfoContext);
function myfunc(e){
    var k;
    k=e.target.value;
    state.search=k;
    }
   return (
    <div>
       <div className="search">Search Table : <input className="spacebar" type="search" placeholder="search by name" onChange={(e)=>myfunc(e)} />
       <button className="search-button" onClick={()=>dispatch({type:"SEARCH-ITEM"})}>Search</button></div>
        <table>
        <th>name</th>
            <th>email</th>
            <th>age</th>
            <th>gender</th>
        {state.Items.map((item)=>(
            <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
            </tr>
       
   
    ))
}
</table>
    </div>
   ) 
}
