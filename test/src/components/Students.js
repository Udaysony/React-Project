import React from 'react'
import {StudentView} from './StudentView'

export const Students = ({data, FilterId}) => {
    //
    return (
        <div className='flex-row-container'>
            {
            data.filter((d) => d.filterIds.includes(FilterId))
                .map( (d) => < StudentView key={d._id} data={d} />)
            }
        </div>
    )
}
