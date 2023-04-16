import * as api from '../api';
import { setCuttentUser } from './currentUser';

export const signup=(loginData, navigate) => async(dispatch) => {
    try {
        const {data}=await api.signUp(loginData);
        dispatch({type:'LOGIN', data});
        dispatch(setCuttentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};

export const login=(loginData, navigate) => async(dispatch) => {
    try {
        const {data}=await api.logIn(loginData);
        dispatch({type:'LOGIN', data});
        dispatch(setCuttentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};