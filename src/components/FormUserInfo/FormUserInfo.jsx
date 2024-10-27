import React, { useEffect, useState } from "react";
import "./style.scss";
import {Button, ButtonSubmit} from "../Button/Button";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useUserInfoContext } from "../Contexts/UserInfoContext";




const FormUserInfo = () => {

    

    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [validate, setValidate] = useState(false);

    const [userInfo, setUserInfo] = useState([]);
    const {test, setTest} = useUserInfoContext();
    console.log('test', test)
  useEffect(()=>{
    console.log(' info:', userInfo);
  },[userInfo])



  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
  }

  const handleChangeName = (e) => {
    setName(e);
  };

  const handleChangeLast = (e) => {
    setLast(e);
  };

  const handleChangeEmail = (e) => {
    setEmail(e);

  };
  const handleChangePhone = (e) => {
    setPhone(e);
  };

const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo([
        ...userInfo,
        { 
            id: uuidv4(),
            name,
            last,
            email,
            phone
         },
      ]);

      setTest([
        ...userInfo,
        { 
            id: uuidv4(),
            name,
            last,
            email,
            phone
         },
      ]);

      if (!validateEmail(email)){
        setValidate(true)
        return true
    }else{
        setValidate(false)
    }
      setEmail('')
      setName('')
      setLast('')
      setPhone('')
      
  };


  return (
    <div className="FormUserInfo">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
          <form onSubmit={handleSubmit}>
              <input onChange={(e) => handleChangeName(e.target.value)} className="form-control" type="text" placeholder="Name" value={name}/>
              <input onChange={(e) => handleChangeLast(e.target.value)} className="form-control" type="text" placeholder="Last name" value={last}/>
              <input onChange={(e) => handleChangeEmail(e.target.value)} className="form-control" type="text" placeholder="Email" value={email}/>
              {validate ? <span className="text-danger">please enter valid email</span> : ''}
              <input onChange={(e) => handleChangePhone(e.target.value)} className="form-control mb-5" type="text" placeholder="Phone" value={phone}/>
              <div className="mb-3"><Button handleClick={handleSubmit} title={'set userInfo in array'} /></div>
              <Link to={'/q'}><ButtonSubmit type="submit" title={"Next Step"} /></Link>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormUserInfo;
