import { Accordion, AccordionSummary, Button, TextField , Typography, AccordionDetails} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Base from './base'

function FeedBack() {
  const[feedbacks,setFeedbacks]=useState("");
  
  const dispatch=useDispatch();
  
  const feeds=useSelector((state)=>state.Feedback.feedbacks)
  // console.log(feeds)

  const handleFeedback=()=>{
   
    dispatch({type:"add-feedback",payload:feedbacks})
    setFeedbacks("")
  }
  return (
    <Base
    title="FeedBack"
    description="Enter Your Feedbacks Here">
    <div><TextField fullWidth label="fullWidth" id="fullWidth"
    onChange={(event)=>setFeedbacks(event.target.value)} 
    value={feedbacks}/></div>
    <div><Button
     variant="outlined"
    onClick={handleFeedback}>
      Add Feedback</Button></div>
    <div>  
      
      
      {feeds && (feeds.map((feed,index)=>(<Accordion key={index}>
        <AccordionSummary
    
          expandIcon={"▼"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Feedbacks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {feed}
          </Typography>
        </AccordionDetails>
      </Accordion>)))
      } </div>
    </Base>
  )
}

export default FeedBack