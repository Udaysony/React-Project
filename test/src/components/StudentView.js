import React from 'react'
import { Button, Card, Elevation } from "@blueprintjs/core";

export const StudentView = ({data}) => {
    // data.filterIds
    /*
    name: 'Student 1',
        university: 'Uni-Syd-1',
        gpa: 3.4,
        enroledPrograms: [
            'Program X',
        ],
        completedPrograms: [],
        intent: 100,
        skillPoints: 89,
    */


    return (
        <Card interactive={true} elevation={Elevation.TWO}>
        <h5><a href="#">{data.name}</a></h5>
        <p>{data.university}</p>
        <p>GPA: {data.gpa}</p>
        <p>Enrolled Programs: {data.enroledPrograms}</p>
        <p>Completed Programs: {data.completedPrograms}</p>
        <p>Intent Score: {data.intent}</p>
        <p>Skill Score: {data.skillPoints}</p>
    </Card>
    )
}
