import React from 'react'

export const FilterForm = (props) => {

  const onPriceInputChange = (e) => {
    const {name, value} = e.target 
    props.onPriceInputChange(name, value)
  }

  return (
    <form onSubmit={props.filterProducts}>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        onChange={onPriceInputChange}
        id="priceFrom"
        name="priceFrom"
        value={props.priceFrom}
        placeholder="Price from..." />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        onChange={onPriceInputChange}
        id="priceTo"
        name="priceTo"
        value={props.priceTo}
        placeholder="Price to..." />

      <input type="submit" value="Filter"/>
    </form>
  )
}
