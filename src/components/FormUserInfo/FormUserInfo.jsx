import React from "react";

const FormUserInfo = () => {
    return(
        <div className="FormUserInfo">
        <div className="row justify-content-center">
        <div className="col-md-4">
        <form >
        <input className="form-control" type="text" placeholder="Name"/>
        <input className="form-control" type="text" placeholder="Last name"/>
        <input className="form-control" type="text" placeholder="Email"/>
        <input className="form-control" type="text" placeholder="Phone"/>
        </form>
        </div>
        </div>
        </div>
    )
}
export default FormUserInfo;