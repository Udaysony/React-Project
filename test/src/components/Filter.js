import React, {useState} from 'react'
import {FilterView} from './FilterView'
import { Button } from "@blueprintjs/core";

export const Filter = ({data, changeFilterId}) => {
    // i = 0 , for loop for 6 elements,
    // for i in range(7):
    // display for data[page + i]
    // i = i+6 , 6,7
    const INCREMENT = 6
    const filteredData = []
    const [Limit, setLimit] = useState(0)
    var i;

    for(i=0 ; i<6;i++){
        // check i
        if( Limit + i > data.length-1){
            
        }
        else{
        filteredData.push(data[Limit + i])
        }
    }
    console.log(filteredData);
    return (
        <div>
            {
            filteredData.map((d) => < FilterView key= {d._id} data={d} changeFilterId={changeFilterId} />)
            }
            <>
            <Button onClick={() =>  {
                //setLimit(Limit+INCREMENT)}>
                if(Limit + INCREMENT < data.length){
                    setLimit(Limit+INCREMENT)
                }

            }}>INC</Button>

            <Button onClick={() => 
            {
                if(Limit - INCREMENT >= 0 ){
                    setLimit(Limit - INCREMENT)
                }
            }}>DEC</Button>
            </>
        </div>
    )
}
