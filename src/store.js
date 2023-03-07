import {combineReducers,createStore,applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { feedbackReducers } from "./Reducers/FeedbackReducer"
import { studentsReducers } from "./Reducers/FeedbackReducer"


const reducer = combineReducers({
    Feedback:feedbackReducers,
    Students:studentsReducers
 
})

const initialState={};

const middleware=[thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store