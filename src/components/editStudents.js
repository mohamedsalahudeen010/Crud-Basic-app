import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "./base";
import * as yup from "yup"
import{useFormik} from "formik"


const studentValidationSchema=yup.object({
  name:yup.string().required("please fill the name"),
 gender:yup.string().required("please mention your gender").min(5,"you need minimum five values"),
  house: yup.string().required("Enter your House"),
  species:yup.string().required("enter species")
})


function EditStudents({studentsData,setStudents}){

    //setting data
    const [editID, setEditID] = useState("");
  const[edit,setEdit]=useState([])

const history=useHistory();
const {id} =useParams();
// const selectedStudentData=studentsData.filter((stu,idx)=>stu._id===id)

useEffect(()=>{

  console.log(id)
async function ak(){
  const selectedStudentData=await studentsData.filter((stu,idx)=>{
    console.log(stu._id)
    return stu._id==id
  })
  
    console.log(selectedStudentData)
    setEditID(selectedStudentData._id)
    setEdit(selectedStudentData)
}
ak()
 
},[studentsData])

//     const{values,handleChange, handleSubmit,handleBlur,errors,touched}=useFormik({
//       initialValues:{
//         name:selectedStudentData.name,
//         gender:selectedStudentData.gender,
//        house:selectedStudentData.house,
//         species:selectedStudentData.species
//       },
//       validationSchema:studentValidationSchema,
//       onSubmit:(editedStudent)=>{
//         console.log("onSubmit triggered",editedStudent)
//         editandSelectStudent(editedStudent);
//       }
//     })
  




// const editandSelectStudent=async(editedStudent)=>{
// try {

 
  
//   const response= await fetch(`https://basic-crud-back-end.vercel.app/students/${editID}`,{
//     method : "PUT",
//     body : JSON.stringify(editedStudent),
//     headers : {
//      "Content-Type" : "application/json"}
//   });

//     const data = await response.json();
//     console.log(data)

//     if(data){
//   const studentIndex=studentsData.findIndex((stud)=>stud._id===editID)
//   studentsData[studentIndex]=data

// setStudents([...studentsData])
 
//  history.push("/details")

//     }
    
// } catch (error) {
//   console.log("error")
// }
 
//   }
console.log(edit)
console.log(edit.length>=0)
return(<div>
  {edit.length>=0?<Dummy
  selectedStudentData= {edit}
  editID={editID}
  studentsData={studentsData}
  setStudents={setStudents}/>:<h1>Loading..</h1>}
</div>
//   <Base
//   title = "Edit A Student"
//   description= "You can a Edit a student data here"
//   >
//             <div className="input-section">

//             <form onSubmit={handleSubmit}>
//    <TextField 
//    fullWidth 
//    label="Enter the Name"
//    onChange={handleChange}
//    onBlur= {handleBlur}
//    value= {values.name}
//    name= "name"
//     id="fullWidth" />
//    {touched.name && errors.name ? <p style={{color:"red"}}> {errors.name} </p>: ""}

//    <TextField 
//    fullWidth 
//    label="Enter the Gender"
//    onChange={handleChange}
//    value = {values.gender}
//    onBlur= {handleBlur}
//    name= "gender"
//     id="fullWidth" />
//  {touched.batch && errors.batch?<p style={{color:"red"}}> {errors.batch} </p> : ""}
//    <TextField 
//    fullWidth 
//    label="Enter the House"
//    onChange={handleChange}
//    value = {values.house}
//    onBlur= {handleBlur}
//    name= "house"
//     id="fullWidth" />

//  {touched.house && errors.house ? <p style={{color:"red"}}> {errors.house} </p> : ""}

//    <TextField 
//    fullWidth 
//    label="Enter the Species"
   
//    onChange={handleChange}
//    value = {values.species}
//    onBlur= {handleBlur}
//    name="species"
//     id="fullWidth" />
//  {touched.experience && errors.experience ? <p style={{color:"red"}}> {errors.experience} </p> : ""}
//    <Button
//      className="add-btn"
//      type="submit"
//      color="secondary"
//      variant="contained"
//    >
//      Update Data
//    </Button>
//    </form>


//  </div>
//   </Base>
)

}


export default EditStudents

function Dummy({selectedStudentData,editID,studentsData,setStudents}){
  console.log(selectedStudentData)
  const{values,handleChange, handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues:{
      name:selectedStudentData[0]?.name,
      gender:selectedStudentData[0]?.gender,
     house:selectedStudentData[0]?.house,
      species:selectedStudentData[0]?.species
    },
    validationSchema:studentValidationSchema,
    onSubmit:(editedStudent)=>{
      console.log("onSubmit triggered",editedStudent)
      editandSelectStudent(editedStudent);
    }
  })




  const history=useHistory();
const editandSelectStudent=async(editedStudent)=>{
try {



const response= await fetch(`https://basic-crud-back-end.vercel.app/students/${editID}`,{
  method : "PUT",
  body : JSON.stringify(editedStudent),
  headers : {
   "Content-Type" : "application/json"}
});

  const data = await response.json();
  console.log(data)

  if(data){
const studentIndex=studentsData.findIndex((stud)=>stud._id===editID)
studentsData[studentIndex]=data

setStudents([...studentsData])

history.push("/details")

  }
  
} catch (error) {
console.log("error")
}

}

  return ( <Base
    title = "Edit A Student"
    description= "You can a Edit a student data here"
    >
              <div className="input-section">
  
              <form onSubmit={handleSubmit}>
     <TextField 
     fullWidth 
     label="Enter the Name"
     onChange={handleChange}
     onBlur= {handleBlur}
     value= {values.name}
     name= "name"
      id="fullWidth" />
     {touched.name && errors.name ? <p style={{color:"red"}}> {errors.name} </p>: ""}
  
     <TextField 
     fullWidth 
     label="Enter the Gender"
     onChange={handleChange}
     value = {values.gender}
     onBlur= {handleBlur}
     name= "gender"
      id="fullWidth" />
   {touched.batch && errors.batch?<p style={{color:"red"}}> {errors.batch} </p> : ""}
     <TextField 
     fullWidth 
     label="Enter the House"
     onChange={handleChange}
     value = {values.house}
     onBlur= {handleBlur}
     name= "house"
      id="fullWidth" />
  
   {touched.house && errors.house ? <p style={{color:"red"}}> {errors.house} </p> : ""}
  
     <TextField 
     fullWidth 
     label="Enter the Species"
     
     onChange={handleChange}
     value = {values.species}
     onBlur= {handleBlur}
     name="species"
      id="fullWidth" />
   {touched.experience && errors.experience ? <p style={{color:"red"}}> {errors.experience} </p> : ""}
     <Button
       className="add-btn"
       type="submit"
       color="secondary"
       variant="contained"
     >
       Update Data
     </Button>
     </form>
  
  
   </div>
    </Base>)
}