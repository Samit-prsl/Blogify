const reducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_START" : 
        return {
            User : null,
            isFetching : true,
            error : false
        }
        case "LOGIN_SUCCESS" :
            return {
                User : action.payload,
                isFetching : false,
                error : false
            }
         case "LOGIN_FAILURE" :
            return {
                User : null,
                isFetching : false,
                error : true
            }   
         default : return state   
    }
};

export default reducer;