
import { createStore } from "redux";
import Reducre from "./Reducre";

const store = createStore(Reducre, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store