import React, {useState} from 'react'
import {FilterView} from './FilterView'
import { Button } from "@blueprintjs/core";
import { Col, Row, Grid } from 'react-flexbox-grid'

export const Filters = ({data, changeFilterId}) => {

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
    
    //

    return (
        <div >
            <div className='flex-row-container'>
           {
            filteredData.map((d) => < FilterView key= {d._id} data={d} changeFilterId={changeFilterId} /> )
            }

            </div>
            <div>
                <Button  onClick={() => 
                    {
                        if(Limit - INCREMENT >= 0 ){
                            setLimit(Limit - INCREMENT)
                        }
                }}>{'<'}</Button>
                
                <Button onClick={() =>  {
                    //setLimit(Limit+INCREMENT)}>
                    if(Limit + INCREMENT < data.length){
                        setLimit(Limit+INCREMENT)
                    }
                    
                }}>{'>'}</Button>

                
            </div>
            
        </div>
    )
}
