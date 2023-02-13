import { useState } from "react"
import { useDispatch } from "react-redux"
import { handleAdd } from "../Redux/Actions"

const AddTask = () => {
    const [text, settext] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <div class="container">
                <div id="newtask">
                    <input type="text" placeholder="Add Tasks" onChange={(e) => settext(e.target.value)} />
                    <button id="push" onClick={() => dispatch(handleAdd({ title: text, isDone: false, id: Math.random() }))}>Add</button>
                </div>
                
            </div>
            
        </div>
    )
}
export default AddTask