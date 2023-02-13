import { useSelector } from "react-redux"
import CardTask from "./CardTask"

const ListTask = () => {
    const tasks = useSelector(state => state.tasks)

    return (
        <div>
            <div id="tasks">
                {
                    tasks.map(el => <CardTask el={el} />)
                }

            </div>

        </div>
    )
}
export default ListTask