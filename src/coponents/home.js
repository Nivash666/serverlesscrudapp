import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';


export default function Home(){
    const [data, setData] = useState(null);
    const navigate=useNavigate()
    useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch('https://6uf2wa1033.execute-api.us-east-1.amazonaws.com/development/users');
              const jsonData = await response.json();
              setData(jsonData);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []);


  


      const handleclick=async(itemid) =>{
        const response = await fetch(`https://xg95kh2z56.execute-api.us-east-1.amazonaws.com/development/username?userid=${itemid}`);             
        const jsonData=await response.json()
           
           if(jsonData.username){
              navigate('/detail',{state:jsonData}) 
     
           }
      }
      const handlechange=(item,event) =>{
         event.stopPropagation();

         navigate('/Edit',{state:item})
      }
        return (<>
        
        <div>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Username</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            
            <tbody>
      
            {data && data.map((item) =>{
                return(
                <tr onClick={() =>handleclick(item.username.S)}>
                  <td>{item.username.S}</td>
                  <td>{item.age.N}</td>
                  <td>{item.email.S}</td>
                  <td><button onClick={(event) => handlechange(item,event)} className='btn btn-primary fw-bold'>Update</button></td>
                  <td><button className='btn btn-danger fw-bold'>Delete</button></td>
                 </tr>)
               
              })}
             
            </tbody>
          </table>
        </div>
       </>
    )
}