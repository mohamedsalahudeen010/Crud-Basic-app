


import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthPage from './components/AuthPage';
import Dashboard from './components/dashboard';
import StudentDetails from './components/Students';
import NoPage from './components/noPage';
import WelcomePage from './components/welcomePage';
import StudentProfile from './components/profile';
import { useEffect, useState } from 'react';
import AddStudents from './components/addStudents';
import EditStudents from './components/editStudents';
import FeedBack from './components/FeedBack';


function App() {

  const[studentsData,setStudents]=useState([])

  useEffect(()=>{
    const getStudents=async()=>{
      try {
        const response=await fetch("https://basic-crud-back-end.vercel.app/students",{
          method:"GET"
        });
        const data=await response.json();
        console.log(data)
        setStudents(data.data)
        
      } catch (error) {
        console.log("error")
      }

     
    }
    getStudents();
  },[])
  
  return (
    <div className="App">

<Switch>
  <Route exact path="/">
    <AuthPage/>
  </Route>
  <Route exact path="/home">
    <WelcomePage/>
  </Route>
  <Route path="/dashboard">
    <Dashboard/>
  </Route>
  <Route path="/register">
   <AuthPage/>
  </Route>

  <Route path="/details">
    <StudentDetails 
    studentsData={studentsData} 
    setStudents={setStudents} />
  </Route>
  <Route path="/students">
    <Redirect to ="/details"/>
    <StudentDetails/>
  </Route>

<Route path="/student/:id">
<StudentProfile 
studentsData={studentsData} 
setStudents={setStudents}/>
</Route>

<Route path="/addStudent">
<AddStudents
studentsData={studentsData} 
setStudents={setStudents}/>
</Route>

<Route path="/editStudent/:id">
<EditStudents
studentsData={studentsData} 
setStudents={setStudents}/>
</Route>

<Route path="/feedbacks">
   <FeedBack/>
  </Route>

<Route path="**"> 
<NoPage/>
</Route>

</Switch>



    </div>
  );
}

export default App;


