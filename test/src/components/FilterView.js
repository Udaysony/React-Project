import React from 'react'
import { Button } from "@blueprintjs/core";
export const FilterView = ({data, changeFilterId}) => {
    return (
        <div>
            <Button onClick={() => changeFilterId(data._id)}> {data.title} </Button>
        </div>
    )
}
