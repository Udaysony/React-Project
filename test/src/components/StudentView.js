import React from 'react'
import { Button, Card, Elevation } from "@blueprintjs/core";

export const StudentView = ({data}) => {
    // data.filterIds

    return (
        <Card interactive={true} elevation={Elevation.TWO}>
        <h5><a href="#">{data.name}</a></h5>
        <p>{data._id}</p>
    </Card>
    )
}
