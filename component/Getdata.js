import {React,useState} from 'react'
import Axios from "axios";
import {  useNavigate } from 'react-router-dom';



function Getdata() {
    const[data,setData]=useState({});
    const navigate=useNavigate();

    const upd=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }


    const Add=()=>{
        Axios.post("http://localhost:8080/addData",data).then(()=>{
            navigate("/");
            
        }).catch((er)=>{
            console.log(er);
        })

    }

  return (
    <div>
    <form>
    <label>UserID :  <input type='text' name="_id"  onChange={upd} placeholder='enter userId'/><br/><br/></label>
    
    <label>Name : <input type='name' name="name" onChange={upd} placeholder='enter userName'/><br/></label>
    <label>Email : <input type='email' name="email" onChange={upd} placeholder='enter userEmail'/><br/></label>
   <input type='password' name="password" onChange={upd} placeholder='enter pwd'/><br/><br/>
    <input type='text' name="Phone" onChange={upd} placeholder='enter mobile number' /><br/>
    <button onClick={Add}>save</button>

    </form>

    </div>
  )
}

export default Getdata;
