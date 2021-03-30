import React from 'react'
import '../App.css';
import { Button } from "@blueprintjs/core";
export const FilterView = ({data, changeFilterId}) => {
    return (
        <div>
            <p></p>
            <Button onClick={() => changeFilterId(data._id)}> {data.title} </Button>
        </div>
    )
}
