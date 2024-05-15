import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";

function Edit() {
  const navigate=useNavigate();
  const params=useParams();
  const [data,setData]=useState({});

  useEffect(()=>{
    fetch("http://localhost:3003/getbyid/" + params.id,
    {
        method:"GET"
    })
    .then((res)=>{return res.json();})
    .then((res)=>{
        setData(res);
    });
  },[]);
  return (
    <>
    <table class="table table-striped">
    <tbody>
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
        fetch("http://localhost:3003/update/"+params.id,
        {
            method:"PUT",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(()=>{navigate("/getbyid/"+params.id)});
      }}>
        Edit
      </button>
    </div>
    </>
  );
}
export default Edit;