import React,{useState} from "react";
import Base from "./base";
import { authData } from "../data/authData";
import { useHistory } from "react-router-dom";


const AuthPage=()=>{
    const history=useHistory();
const[auth,setAuthData]=useState(authData);
const[email,setEmail]=useState();
const[password,setPassword]=useState()
const [show,setShow]=useState(false)

const logInUser=()=>{
  

    if(email===auth[0].email && password===auth[0].password){
        setShow(false) 
      localStorage.setItem("email-input",email);
      localStorage.setItem("password",password);
    
      history.push("/details")
    }
    else {setShow(true) 
        console.log("wrong")}
}

return (
<div>

<div class="main">
        <form action="">
            <div>
                <h1>Sign In</h1>
            </div>

            
            <div class="input">
                <label class="textlabel" for="email">E.mail</label>
                <input type="email" name="email" id="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}></input>
            </div>
            <div class="input">
                <label class="textlabel" for="password">Password</label>
                <input type="password" name="password" id="password" minlength="8"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}></input>
                <h4>email : abc@gmail.com ||
          password : password</h4>
            </div>
            
               
                
                <div class="btn">
                    <button type="submit" onClick={logInUser}>Submit</button>
                </div>
                {show?<h6>Please Enter Valid UserName and Password</h6>:""}

        </form>
    </div>



</div>)

}

export default AuthPage