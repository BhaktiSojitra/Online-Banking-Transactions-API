import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function API() {
  const [data, setData] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    fetch("http://localhost:3003/getall")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const FormatedData = data.map((temp) => {
    return (
      <div class="card col-md-3 mb-4">
        <img src={temp.Image} class="card-img-top" 
          alt="..."/>
        <div class="card-body">
          <h4 class="cars-text">Name: {temp.Name}</h4>
          <h4 class="card-text">TransactionID: {temp.TransactionID}</h4>
          <h4 class="card-text">AccountID: {temp.AccountID}</h4>

          <button class="btn btn-outline-primary m-2" onClick={()=>{
            navigate("../getbyid/" + temp.TransactionID);
          }}>View more</button> 

          <button class="btn btn-outline-danger m-2" onClick={()=>{
            fetch("http://localhost:3003/delete/" + temp.TransactionID,
            {
              method:"DELETE"
            })
            .then(()=>{
              window.location.reload()
            })
          }}>Delete</button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <button
        class="btn btn-outline-secondary m-3"
        onClick={() => {
          navigate("/insert");
        }}
      >
        Add
      </button>
      <div className="row m-2 p-2">{FormatedData}</div>
    </div>
  );
}

export default API;