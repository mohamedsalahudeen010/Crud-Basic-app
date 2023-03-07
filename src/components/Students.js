import React, { useEffect } from "react"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup } from "@mui/material";
import Base from "./base";
import { useHistory } from "react-router-dom";




function StudentDetails({studentsData,setStudents}){


const history=useHistory();

useEffect(()=>{
  if(!localStorage.getItem("email-input") ){

    history.replace("/")
  }
},[])

const  deleteStudent=async(id)=>{
  try {
    const response= await fetch(`https://basic-crud-back-end.vercel.app/students/${id}`,{
      method:"DELETE",
      headers:{
        "content-type":"application/json"
      }
    })
    const data=await response.json();
    console.log(data)
   const removeStudent= studentsData.filter((stud,idx)=>(stud._id!==id));
   setStudents(removeStudent)
    
  } catch (error) {
    console.log("error")
  }
 
}







    return(
      <Base
      title="Batch Details"
      description="All Students Details">

<div className="containers">
   


        <div className="card-containers"> 



      {studentsData.map((stu,idx)=>(

// "_id": "63f9aa17d3938a3832b78269",
// "id": "1",
// "name": "Harry Potter",
// "species": "human",
// "gender": "Male",
// "house": "Gryffindor",
// "birth": "31-07-1980",
// "wand": "dragon heartstring",
// "image": "https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg"
// }
        

         <Card className="card" sx={{ maxWidth: 345 }} key={stu.id}>
         
         <CardContent>
           <Typography gutterBottom variant="h5" component="div" >
             {stu.name}
           </Typography>
           <Typography variant="body2" color="text.secondary">
          Gender : {stu.gender}
           </Typography>
           <Typography variant="body2" color="text.secondary">
          House : {stu.house}
           </Typography>
           <Typography variant="body2" color="text.secondary">
          Species : {stu.species} 
           </Typography>
         </CardContent>
         <ButtonGroup variant="contained" aria-label="outlined primary button group">
         <Button variant="contained" color="secondary" className="btn btn-edit" onClick={()=>history.push(`/editStudent/${stu._id}`)}>Edit</Button>
           <Button variant="contained" color="secondary" className="btn btn-delete" onClick={()=>deleteStudent(stu._id)}>Delete</Button>    
           <Button variant="contained" color="secondary" className="btn btn-delete" onClick={()=>history.push(`/student/${idx}`)} >View Student</Button>    
     
          </ButtonGroup>
         
       </Card>
      ))}      
        </div>
        </div>
        </Base>
    )
}

export default StudentDetails