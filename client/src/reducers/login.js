const loginReducer=(state={data:null}, action) => {
    switch(action.type){
        case 'LOGIN':
                     localStorage.setItem('Profile', JSON.stringify({ ...action?.data }))
                     return {...state, data:action?.data}
        case 'LOGOUT':
                     localStorage.clear()
                     return {...state, data:null}
        default:
                     return state
    }
};

export default loginReducer;