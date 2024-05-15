import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";

function Bank_Detail() {
  let params=useParams();
  const navigate=useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3003/getbyid/" + params.id, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <>
      <div class="card col-md-3">
        <img src={data.Image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h4 class="card-text">Name: {data.Name}</h4>
          <h4 class="card-text">TransactionID: {data.TransactionID}</h4>
          <h4 class="card-text">AccountID: {data.AccountID}</h4>
          <h4 class="card-text">TransactionType: {data.TransactionType}</h4>
          <h4 class="card-text">Amount: {data.Amount}</h4>
          <h4 class="card-text">Date: {data.Date}</h4>

          <button class="btn btn-outline-success" 
          onClick={() => {
            navigate("/update/"+params.id);
          }}
          >
            Edit
          </button>

          <span style={{ marginRight: "10px" }}></span>

          <button
            class="btn btn-outline-danger"
            onClick={() => {
              fetch("http://localhost:3003/delete/"+params.id,
              {
                  method: "DELETE",
              })
              .then(() => {
                navigate("/getall");
              });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default Bank_Detail;
