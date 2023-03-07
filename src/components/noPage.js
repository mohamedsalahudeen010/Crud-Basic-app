import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Base from "./base";

const NoPage=()=>{
    const history=useHistory();
    return(
        <div>
            <Base
            title="You Lost Your Way"
            description="Please click the below button to Home Page">
               <Button onClick={()=>history.push("/")}>Home</Button>     
            </Base>
        </div>      
    )
}

export default NoPage