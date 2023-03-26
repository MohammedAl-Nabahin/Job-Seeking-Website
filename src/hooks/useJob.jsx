import axios from 'axios';
import { useReducer } from 'react';
import {API_URL} from '../config/api';

const initialState = {
  count: 0,
  jobs: [],
};

const ACTIONS = {
  SAVE_JOB: 'save',
  REMOVE_JOB: 'remove',
};

const Reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.SAVE_JOB:
      return { ...state, jobs: [...state.jobs, action.payload], count: state.count + 1 };
    case ACTIONS.REMOVE_JOB:
      return { ...state, jobs: state.jobs.filter((job) => job.id !== action.payload), count: state.count - 1 };
    default:
      return state;
  }
};

const useJob = () => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  const saveJob = async (job) => {

    try {
      const res =await axios.post(`${API_URL}savedJobs` , {...job});

      if (res) {
        dispatch({ type: ACTIONS.SAVE_JOB, payload: job });
      }
    
    } catch (e) {
      console.log(e)
      dispatch({ type: 'error', payload: e });
    }
    
  }; 

  const removeJob =async (jobId) =>{
    try {
        const res =await axios.delete(`${API_URL}savedJobs/${jobId}`);
        if (res) {
            dispatch({ type: ACTIONS.REMOVE_JOB, payload: jobId });
        }
      } catch (e) {
        dispatch({ type: 'error', payload: e });
      }
    }
  
  return { state, saveJob, removeJob };
};

export default useJob;