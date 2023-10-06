function ManageReducer(state,action){
    switch(action.type){
        case "ADDUSER":
            return {
                ...state,FinalInfo:[...state.FinalInfo,action.newInfo]
            }
        case "SEARCH-ITEM":
            return {
                ...state,
               Items:[...state.Items2].filter((item)=>item.name===state.search) 
            }
        default:
            return state;
    }
}
export default ManageReducer;