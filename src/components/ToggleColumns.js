import React from 'react'

export const ToggleColumns = (props) => {
  const onCheckboxClick = (e) => {
    const {name, checked} = e.target
    props.onCheckboxClick(name, checked)
  }

  return (
    <div className="toggle-columns">
      { 
        Object.keys(props.columns).map((column, index) => {
          return ( 
            <div key={index}>
                
                <input
                  id={column}
                  name={column}
                  type="checkbox" 
                  checked={(props.columns).column} 
                  onChange={onCheckboxClick}
                />
                <label className="label-column" htmlFor={column}>
                  {column}
                </label>
            </div>)
        })
      }
    </div>
  );
}
