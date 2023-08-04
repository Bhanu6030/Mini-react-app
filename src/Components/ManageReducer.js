

function ManageReducer(state,action){
    switch(action.type){
        case "ADDUSER":
            return {
                ...state,FinalInfo:[...state.FinalInfo,action.newInfo]
            }
            default:
                return state;
    }
}
export default ManageReducer