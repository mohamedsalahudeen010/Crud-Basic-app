import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Base from "./base";
const Dashboard=()=>{
    const history=useHistory()
    return (<Base
    title="Welcome to students app"
    description="please click the below button to navigate to home page">
        <Button
        variant="outlined"
        color="secondary"
        size="large"
        onClick={()=>history.push("/")}>
                Home
        </Button>
    </Base>)
}

export default Dashboard