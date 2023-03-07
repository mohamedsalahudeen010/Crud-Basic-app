import React from "react";
import { useParams } from "react-router-dom";
import Base from "./base";


const StudentProfile=({studentsData,setstudentsData})=>{
    const {id}=useParams();
    console.log(studentsData)
    const student=studentsData[id];
    return (

        <Base
        title="Student Profile"
        description="Individual Student Details">

            <div>

                <h2>Student Profile </h2>
                <div>
                    <img src={student.image} className="Profile-img" alt=""></img>
                </div>
                <h3>Student Name : {student.name} </h3>
                <p>Gender : {student.gender}</p>
                <p>House : {student.house} </p>
                <p>Species : {student.species}</p>
            </div>
        
        
        </Base>
    )
}

export default StudentProfile