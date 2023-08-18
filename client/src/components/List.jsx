import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://mern-blog-app-x3qs.onrender.com/api/v1/readproduct");
      setData(res.data["data"]);
    })();
  }, [id]);

  const onDelete = async (id) => {
    let URL = "https://mern-blog-app-x3qs.onrender.com/api/v1/deleteproduct/" + id;
    await axios.get(URL);
    setId(id);
  };

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            
            {data.map((item, index) => {
                  return (
            <div className="container mt-5 d-flex justify-content-center">
              <div className="card w-50 d-flex text-center">
                <h3 className="">Blog {index+1}</h3>
                <img
                  src={item["Img"]}
                  className="card-img-top w-50 h-25 mx-auto"
                  alt="Card Image"
                />
                <div className="card-body">
                  <h4 className="card-title bg-warning-subtle ">{item["BlogTitle"]}</h4>
                  <p className="card-text">{item["Discription"]}</p>
                  <Link
                    to={"/update/" + item["_id"]}
                    className="btn btn-success btn-sm"
                  >
                    Edit
                  </Link>
                  
                  <button
                    onClick={async () => {
                      await onDelete(item["_id"]);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
             );
                 })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
