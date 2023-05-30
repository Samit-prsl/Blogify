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
            case "UPDATE_START" : 
            return {
               ...state,
                isFetching : true,
                
            }
            case "UPDATE_SUCCESS" :
                return {
                    User : action.payload,
                    isFetching : false,
                    error : false
                }
             case "UPDATE_FAILURE" :
                return {
                    User : state.User,
                    isFetching : false,
                    error : true
                }   
            case "LOGOUT" :
            return {
                User : null,
                isFetching : false,
                error : false
            }   
         default : return state   
    }
};

export default reducer;