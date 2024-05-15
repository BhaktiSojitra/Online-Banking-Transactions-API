import { useState } from "react";
import { useNavigate} from "react-router-dom";

function Add() {
  const navigate=useNavigate();
  const [data,setData]=useState({});

  return (
    <>
    <table class="table table-striped">
    <tbody>
    <tr>
        <td>Enter Name:</td>
        <td>
            <input 
                value={data.Name}
                onChange={(e)=>{
                setData({...data,Name:e.target.value});
            }} type="text" />
        </td>
    </tr>

    <tr>
        <td>Enter Image:</td>
        <td>
            <input 
                value={data.Image}
                onChange={(e)=>{
                setData({...data,Image:e.target.value});
            }} type="text" />   
        </td>
    </tr>

    <tr>
        <td>Enter TransactionID:</td>
        <td>
            <input 
                value={data.TransactionID}
                onChange={(e)=>{
                setData({...data,TransactionID:e.target.value});
            }} type="text" />
        </td>
    </tr>
        
    <tr>
        <td>Enter AccountID:</td>
        <td>
            <input 
                value={data.AccountID}
                onChange={(e)=>{
                setData({...data,AccountID:e.target.value});
            }} type="text" />
        </td>
    </tr>

    <tr>
        <td>Enter TransactionType:</td>
        <td>
            <input 
                value={data.TransactionType}
                onChange={(e)=>{
                setData({...data,TransactionType:e.target.value});
            }} type="text" />
        </td>
    </tr>

    <tr>
        <td>Enter Amount:</td>
        <td>
            <input 
                value={data.Amount}
                onChange={(e)=>{
                setData({...data,Amount:e.target.value});
            }} type="text" />
        </td>
    </tr>

    <tr>
        <td>Enter Date:</td>
        <td>
            <input 
                value={data.Date}
                onChange={(e)=>{
                setData({...data,Date:e.target.value});
            }} type="text" />
        </td>
    </tr>
    </tbody>
    </table>

    <div style={{ textAlign: 'center' }}>
      <button className="btn btn-outline-secondary" onClick={()=>{
        //console.log(data);
        fetch("http://localhost:3003/insert",
        {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(()=>{navigate("/getall")});
      }}>
        Add
      </button>
    </div>
    </>
  );
}
export default Add;