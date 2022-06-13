import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompanies, fetchCompanies } from "../Redux/action";

export const Company = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const companies = useSelector((state) => state.companyReducer.data);
  console.log(companies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [title,fetchCompanies]);

  const handleTitle = (title) => {
    dispatch(addCompanies({ title }))
    .then(dispatch(fetchCompanies()));
  };
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "1rem" }}>
      <div style={{ width: "60%", margin: "auto", border: "1px solid black" }}>
        <h2>Companies Dropdown</h2>
        {companies.map((elem) => (
          <h3 key={elem.id}>{elem.title}</h3>
        ))}
      </div>
      <br />
      <div>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => handleTitle(title)}>ADD</button>
      </div>
    </div>
  );
};
