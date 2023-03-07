import React from "react"
import {useState} from "react"

import Button from '@mui/material/Button';

import {  TextField } from "@mui/material";
import Base from "./base";
import { useHistory } from "react-router-dom";
import * as yup from "yup"
import{useFormik} from "formik"
import { textAlign } from "@mui/system";


const studentValidationSchema=yup.object({
  name:yup.string().required("please fill the name"),
  gender:yup.string().required("please fill the batch"),
  house: yup.string().required("please mention your gender"),
  species:yup.string().required("tell your experience")
})

const AddStudents=({studentsData,setStudents})=>{



  const{values,handleChange, handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues:{
      name:"",
      gender:"",
      house:"",
      species:""
    },
    validationSchema:studentValidationSchema,
    onSubmit:(newStudent)=>{
      console.log("onSubmit triggered",newStudent)
      addNewStudent(newStudent);
    }
  })

const history=useHistory();
    
// const[name,setName]=useState("");
// const[batch,setBatch]=useState("");
// const[gender,setGender]=useState("");
// const[experience,setExperience]=useState("");




async function addNewStudent(newStudent){

  try {
   
     const response=await fetch("https://basic-crud-back-end.vercel.app/students",{
      method:"POST",
      body:JSON.stringify(newStudent),
      headers:{
        "Content-Type":"application/json"
      }
     });
     const data=await response.json();

    setStudents([...studentsData,data])

  
   
    // setName("");
    // setBatch("");
    // setGender("");
    // setExperience("");
    history.push("/details")
  } catch (error) {
    
  }

    
  
  };
  


    return(
        <Base
        title="Add student details here"
        description="Enter details of students to add ">

<div className="containers">
    <div className="input-section">
    <form onSubmit={handleSubmit}>
    <TextField fullWidth label="Enter The Name"
     id="fullWidth" 
     onChange={handleChange}
     value={values.name}
     onBlur={handleBlur}
     name= "name"
     />
     {touched.name && errors.name?<p style={{color:"red"}}>{errors.name}</p>:""}

    <TextField fullWidth label="Enter Gender"
     id="fullWidth" 
     onChange={handleChange}
     value={values.gender}
     onBlur={handleBlur}
     name= "gender"
     />
     {touched.gender && errors.gender?<p style={{color:"red"}}>{errors.gender}</p>:""}

    <TextField fullWidth label="Enter The House"
     id="fullWidth"
     onChange={handleChange}
     value={values.house}
     onBlur={handleBlur}
     name= "house"
      />
      {touched.house && errors.house?<p style={{color:"red"}}>{errors.house}</p>:""}

    <TextField fullWidth label="Enter The Species" 
    id="fullWidth"
    onChange={handleChange}
     value={values.species}
     onBlur={handleBlur}
     name= "species" />
     {touched.species && errors.species?<p style={{color:"red"}}>{errors.species}</p>:""}

  
    <Button
          className="add-btn"
          color="success"
          type="submit"
          variant="contained"
          // onClick={addNewStudent}
        >
          Add Data
        </Button>
        </form>
    </div>

       </div> 
        </Base>
    )
}



export default AddStudents