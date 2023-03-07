export const feedbackReducers=(state={feedbacks:["firstFeedback","secondFeedback"]},action)=>{
    switch(action.type){
        case "add-feedback":
            return {
                ...state,feedbacks:[...state.feedbacks,action.payload]
            }
        default:return state
    }
}



export const studentsReducers=(state={student:[]},action)=>{
switch(action.type){
    case "add-students":return {state}
    default: return state
}
}