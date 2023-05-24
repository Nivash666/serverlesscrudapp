import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'
export default function Createuser(){
    const[formdata,SetFormData]=useState({'username':'','email':'','age':''});
    const navigate=useNavigate()
    const handlesumbit=async(e) =>{
      e.preventDefault()
      console.log(formdata)
      if(formdata.username && formdata.email && formdata.age){
         const Response=await fetch(' https://xszhvmhn21.execute-api.us-east-1.amazonaws.com/development/adduser',{
            method:"POST",
            body:JSON.stringify(formdata),
            headers:{'Content-Type':'application/json'}
         })
         const json=await Response.json()
         if(json.status ==="200"){
            SetFormData({'username':'','email':'','age':''})
            console.log("added successfully")
            navigate('/')  
         }                          
      }
      
    }
    return(<>
    <h3 className="text-center mt-2">Form</h3>
    
    
    <form onSubmit={(e) => handlesumbit(e)} className="border border-2 p-3 " style={{'margin-left':'25rem','margin-right':'23rem'}}>
        <div>
        <label className="form-label">Username</label>
        <input type="text" 
        value={formdata.username}
        className="form-control" onChange={(e) => SetFormData({...formdata,username:e.target.value})}/>
        </div>
        <div>
            <label className="form-label">Email</label>
            <input className="form-control"
            value={formdata.email} 
            onChange={(e) => SetFormData({...formdata,email:e.target.value})}
            type="email"/> 
        </div>
        <div>
            <label className="form-label">Age</label>
            <input 
            onChange={(e) => 
                SetFormData({...formdata,age:e.target.value})}
                value={formdata.age}
 
            type="number" className="form-control"/>
        </div>
    <div className="py-2 ">
    <button  className="btn btn-success w-100 fw-bold" type="sumbit">Submit</button>
 
    </div>
   </form> 
    </>)
}

