import { createStore } from "redux";

const store = createStore(
    function (state, action) {
        if(action.type=="ADD"){
            return [ action.payload, ...state]
        }
        if (action.type=="DELETE") {
            let list = state.filter((el)=>el==action.payload)
            return list
        }
        return state
    },
    []
)

export default store