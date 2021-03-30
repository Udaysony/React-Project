import React, {useState} from 'react'
import '../App.css';
import { Button } from "@blueprintjs/core";
export const FilterView = ({data, changeFilterId}) => {
    // set background:'MediumSeaGreen' onClick
    const [bgcolor, setbgcolor]  = useState("white")
    return (
        <div className='flex-row-item' >
            <p></p>
            <Button style={{ background: {bgcolor} ,width:'50%' , height:'50px' }} className='bp3-button' 
                onClick={() => {
                    
                    changeFilterId(data._id)
                    
                   
                }
                }>
                {data.emoticon} {data.title}
            </Button>
        </div>
    )
}
