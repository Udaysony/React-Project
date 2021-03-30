import React, {useState} from 'react'
import '../App.css';
import { Button } from "@blueprintjs/core";
export const FilterView = ({data, FilterId, changeFilterId}) => {
    // set background:'MediumSeaGreen' onClick
    var bgColor = 'white'
    if (data._id === FilterId){
        bgColor = 'MediumSeaGreen'
    }
    // bgColor = 'MediumSeaGreen'
    return (
        <div className='flex-row-item' >
            <p></p>
            <Button style={{ background: bgColor, width:'300px' , height:'50px' }} className='bp3-button' 
                onClick={() => {
                    // console.log(bgColor);
                    changeFilterId(data._id)
                   
                }
                }>
                {data.emoticon} {data.title}
            </Button>
        </div>
    )
}
