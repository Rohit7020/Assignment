import {React,useState,useEffect} from 'react'
import Axios from "axios";

const Home = () => {
    const [data,setdata]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:8080/getData").then((res)=>{
            setdata(res.data);
        })
    },[])
  return (
    <div>
    <table>
    <thead>
    <tr>
    <th>Users</th><th>UName</th><th>Email</th>
    </tr>
    </thead>
    <tbody>
    {
        data.map((user)=>{
            return(<tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                </tr>)
        })
    }
    </tbody>
     </table>
    </div>
  )
}

export default Home