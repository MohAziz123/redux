import { HANDLEADD,HANDLEDELETE,HANDLEDONE } from "./ActionsTypes"

export const handleAdd=(paylod)=>{
    return(
        {
            type : HANDLEADD,
            paylod
        }
    )
}

export const handledelete=(paylod)=>{
    return(
        {
            type : HANDLEDELETE,
            paylod
        }
    )
}

export const handledone=(paylod)=>{
    return(
        {
            type : HANDLEDONE,
            paylod
        }
    )
}