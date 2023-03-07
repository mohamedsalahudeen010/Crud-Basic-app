import { AppBar, Button, Toolbar } from "@mui/material"
import React from "react"
import { useHistory } from "react-router-dom"

function Base({title,description,children}){
    const history=useHistory();

    const logOutFunc=()=>{
            
        localStorage.removeItem("email-input")
        localStorage.removeItem("password")
        history.push("/")
    }
    return(
        

        

        <div className="main-component">
            <AppBar position="static" >
            <Toolbar>
                <Button color="inherit" onClick={()=>history.push("/home")}>
                home
                </Button>
                <Button color="inherit" onClick={()=>history.push("/details")}>
                  Student List
                </Button >
                <Button color="inherit" onClick={()=>history.push("/dashboard")}>
                 Dashboard 
                </Button>
                <Button color="inherit" onClick={()=>history.push("/addStudent")}>
                 Add Students
                </Button>
                <Button color="inherit" onClick={()=>history.push("/feedbacks")}>
                  Feedbacks
                </Button>
                <Button color="inherit" onClick={logOutFunc}>
                   Logout
                </Button>
            </Toolbar>
            </AppBar>
           <header>
            <h1 className="heading"> {title} </h1>
           </header> 

            <main className="main-segment">
            <h2> 
            {description} 
            </h2>
        
            <div className="children-segment">
                {children}
            </div>
            </main>
        </div>
    )
}

export default Base