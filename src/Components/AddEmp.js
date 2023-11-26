import { useState } from "react";
import React from 'react';
import Employees from "./Employee";
import './emp.css';
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
function AddEmp(props) {
    
    const[emp, setEmp] = useState({
        name: "",
        age:""
    })
    let navigate = useNavigate();
    const handleClick = (e)=>{
        e.preventDefault();
        //console.log(emp.name)
        const id = uuid();
        let uniqueId = id.slice(0,8);
        console.log('ID: '+uniqueId)
        Employees.push({id:uniqueId, name:emp.name, age:emp.age})
        navigate('/')
    }
    return (
        <div>
            <form>
                <input 
                    type='text' 
                    placeholder='Enter Name'
                    onChange={(e) => setEmp(prev=>({...prev, name:e.target.value}))}/><br/><br/>
                <input 
                    type='number' 
                    placeholder='Enter Age'
                    onChange={(e) => setEmp(prev=>({...prev, age:e.target.value}))}/><br></br> 
                <button onClick={handleClick} >Add Employee</button>      
            </form>
        </div>
    );
}

export default AddEmp;

