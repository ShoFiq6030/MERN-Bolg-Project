import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Create_UpdateForm = () => {
  let [FormValue, SetFormValue] = useState({
    BlogTitle: "",

    Img: "",

    Discription: "",
  });

  let { id } = useParams();

  const inputOnChange = (property, value) => {
    SetFormValue({ ...FormValue, [property]: value });
  };

  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          "https://mern-blog-app-x3qs.onrender.com/api/v1/readproductbyid/" + id
        );
        SetFormValue(res.data["data"][0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [id]);

  const onSubmit = async () => {
    let URL = "https://mern-blog-app-x3qs.onrender.com/api/v1/createproduct/";

    if (id) {
      URL = "https://mern-blog-app-x3qs.onrender.com/api/v1/updateproduct/" + id;
    }
    let res = await axios.post(URL, FormValue);
    if (res.status === 200) {
      alert("Save Changes");
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-2">
          <label>BlogTitle</label>
          <input
            className="form-control form-control-sm"
            value={FormValue.BlogTitle}
            onChange={(e) => {
              inputOnChange("BlogTitle", e.target.value);
            }}
            type="text"
          />
        </div>

        <div className="col-md-6">
          <label>Img</label>
          <input
            className="form-control form-control-sm"
            value={FormValue.Img}
            onChange={(e) => {
              inputOnChange("Img", e.target.value);
            }}
            type="text"
          />
        </div>
        <div className="col-md-6">
          <label>Discription</label>
          <input
            className="form-control form-control-sm"
            value={FormValue.Discription}
            onChange={(e) => {
              inputOnChange("Discription", e.target.value);
            }}
            type="text"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <button onClick={() => onSubmit()} className="btn w-25 btn-warning ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Create_UpdateForm;
