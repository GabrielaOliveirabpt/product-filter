import React from 'react'
import { TableRow } from './TableRow'

export const ProductList = (props) => {

  const productsElement = props.products.map((product, item) => (
    <TableRow 
      key={item}
      columns={props.columns}
      id={product.id}
      name={product.name}
      department={product.department}
      price={product.price}
      currency={product.currency}
    />
  ))
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {props.columns.id && <th>ID</th>}
            {props.columns.name && <th>Name</th>}
            {props.columns.department && <th>Department</th>}
            {props.columns.price && <th>Price</th>}
          </tr>
        </thead>
        <tbody>
        {productsElement}
        </tbody>
      </table>
    </div>
  )
}
