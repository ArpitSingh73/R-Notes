import NoteContext from "./noteContext"

import { useState } from "react"

export default NoteState = (props)=>{
const s = {

    "name" : "Arpit",
    "role" : "developer"

}

    return(
        <NoteContext.Provider >
            {props.children};
        </NoteContext.Provider>

    )
}