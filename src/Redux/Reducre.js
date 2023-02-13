import { HANDLEADD,HANDLEDELETE,HANDLEDONE } from "./ActionsTypes"
const initialState={
    tasks : [
        {title : "Mamino",isDone:false,id : Math.random()},
        {title : "Raslen",isDone:false,id : Math.random()},
        {title : "Aziz",isDone:false,id : Math.random()}
    ]
}

const Reducre=(state=initialState,action)=>{
    switch (action.type) {
        case HANDLEADD : return {...state,tasks : [...state.tasks,action.paylod]}
        case HANDLEDELETE : return {...state,tasks : state.tasks.filter(el=>el.id !== action.paylod)}
        case HANDLEDONE : return {...state,tasks : state.tasks.map(el=>el.id === action.paylod? {...el,isDone : !el.isDone} : el)}
        default: return state
          
    }
}
export default Reducre