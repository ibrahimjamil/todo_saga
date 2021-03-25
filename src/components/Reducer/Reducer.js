
import produce from "immer"

const initialState=[
    {
        name:"",
        task:""
    }
]

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "submit":
            return produce(state,draftstate=>{
                draftstate.push({name:action.payload.name,task:action.payload.task})
            })
        default:
            return state
    }
}
export default reducer