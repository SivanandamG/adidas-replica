import React from "react";
import { useState } from "react";
export default function SignUp() {
    const [email,setemail] = useState("");
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");

    const handleemail = (e)=>{setemail(e.target.value)}
    const handleusername = (e)=>{setusername(e.target.value)}
    const handlepassword = (e)=>{setpassword(e.target.value)}
        return (
            <form onSubmit={(e)=>{e.preventDefault();fetch(`http://localhost:2345/auth/signup/${username}/${email}/${password}`).then(res=>res.json()).then((res)=>{console.log(res);})}}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>user name</label>
                    <input type="text" onChange={handleusername} className="form-control" placeholder="user name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={handleemail} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={handlepassword} className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }