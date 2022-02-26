
import { CREATE_JOB, SET_JOB, DELETE_JOB } from './constant';


const initState = {
    setJob: '',
    jobs: []
}

function reducer (state, action) {
    switch(action.type) {
        case SET_JOB : 
            return {
                ...state,
                setJob: action.payload
            }
        case CREATE_JOB : 
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }    
        case DELETE_JOB :
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1) 
            return {
                ...state,
                jobs: newJobs
            }
        default :
            new Error('invalid Action')         
    }
}

export { initState }
export default reducer