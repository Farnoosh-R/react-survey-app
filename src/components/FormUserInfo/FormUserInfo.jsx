import React, { useEffect, useState } from "react";
import "./style.scss";
import Button from "../Button/Button";

const FormUserInfo = () => {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [userInfo, setUserInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeName = (e) => {
    setName(e);
    return name;
  };
  const handleChangeLast = (e) => {
    setLast(e);
    return last;
  };
  const handleChangeEmail = (e) => {
    setEmail(e);
    return email;
  };
  const handleChangePhone = (e) => {
    setPhone(e);
    return phone;
  };

  useEffect(() => {
    handleChangeName();
    handleChangeLast();
    handleChangeEmail();
    handleChangePhone();
  }, [])





  const setData = () => {
    setUserInfo([
      {
        name: name,
        last: last,
        email: email,
        phone: phone,
      },
    ]);
    console.log(userInfo);
    console.log(name);
  };

  return (
    <div className="FormUserInfo">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <input onChange={(e) => handleChangeName(e.target.value)} className="form-control" type="text" placeholder="Name" />
              <input onChange={(e) => handleChangeLast(e.target.value)} className="form-control" type="text" placeholder="Last name" />
              <input onChange={(e) => handleChangeEmail(e.target.value)} className="form-control" type="text" placeholder="Email" />
              <input onChange={(e) => handleChangePhone(e.target.value)} className="form-control mb-5" type="text" placeholder="Phone" />
              <Button handleClick={setData} title={"Next Step"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormUserInfo;
