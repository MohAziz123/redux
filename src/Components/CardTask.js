import { useDispatch } from "react-redux"
import { handledelete, handledone } from "../Redux/Actions"


const CardTask=({el})=>{
    const dispatch = useDispatch()
    return(
        <div>
            <h3 className="aziz">{el.title}</h3>
            <h4 >{el.isDone ? "TRUE" : "FALSE"}</h4>
            <button onClick={()=>dispatch(handledone(el.id))}>done</button>
            <button onClick={()=>dispatch(handledelete(el.id))}>delete</button>
        </div>
    )
}
export default CardTask