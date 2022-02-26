
import { CREATE_JOB, SET_JOB, DELETE_JOB } from './constant';

export const inputJob = (payload) => {
    return{
        type: SET_JOB,
        payload
    }
}
export const createJob = (payload) => {
    return{
        type: CREATE_JOB,
        payload
    }
}
export const deleteJob = (payload) => {
    return{
        type: DELETE_JOB,
        payload
    }
}