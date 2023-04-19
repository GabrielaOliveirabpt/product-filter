import React from 'react'

export const TableRow = (props) => {
    return(
        
        <tr>
            {props.columns.id && <td>{props.id}</td> }
            {props.columns.name && <td>{props.name}</td> }
            {props.columns.department && <td>{props.department}</td> }
            {(props.columns.price) && <td>{props.columns.currency && props.currency}{props.price}</td> }
        </tr>
        
    )
}