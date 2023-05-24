import React, { useEffect, useState } from "react"
import { Navigate, useLocation,useNavigate } from "react-router-dom"

export default function Edit(){
    const [formdata,setformdata]=useState({'email':'','age':'','username':''})
    const location=useLocation()
    const navigate=useNavigate()
    useEffect(() =>{
        const runsample=() =>{
            const {state}=location
            setformdata({...formdata,username:state.username.S,email:state.email.S,age:state.age.N})    
            
        }
        runsample()
    },[])
       const handlesumbit=async(e) =>{
          e.preventDefault()
        const Response=await fetch(`https://zpfdkh6q5i.execute-api.us-east-1.amazonaws.com/development/updateuser?userid=${formdata.username}`,{
            method:"PUT",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(formdata),
        })
        if(Response.ok){
            const json_data=await Response.json()
            navigate('/')
            
        }
       }
    
         
    
    return(
    <>
    <h3 className="text-center">update page </h3>
     <form onSubmit={(e) => handlesumbit(e)} className="border border-2 p-3 " style={{'margin-left':'25rem','margin-right':'23rem'}}>
        <div>
        <label className="form-label">Username</label>
        <input type="text" 
        value={formdata.username}
        onChange={(e) => setformdata({...formdata,username:e.target.value})}
        className="form-control"/>
        </div>
        <div>
            <label className="form-label">Email</label>
            <input className="form-control"
            value={formdata.email}
             onChange={(e) => setformdata({...formdata,email:e.target.value})}
            
            type="email"/> 
        </div>
        <div>
            <label className="form-label">Age</label>
            <input
             value={formdata.age}
            onChange={(e) => setformdata({...formdata,age:e.target.value})}
            type="number" className="form-control"/>
        </div>
    <div className="py-2 ">
    <button  className="btn btn-success w-100 fw-bold" type="sumbit">Submit</button>
 
    </div>
   </form> 

    </>)
}