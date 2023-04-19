import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const [ displayedProducts, setDisplayedProducts ] = useState(props.products)

  const onPriceInputChange = (name, value) => {
    setPrice(prevPrice => {
      return {
        ...prevPrice,
        [name]: value
      }}
    )
  }

  const onCheckboxClick = (name, checked) => {
    setColumns(prevColumns => {
      return {
        ...prevColumns,
        [name]: !checked
      }
    })
  }

  // const testFunction = () => {
  //   let a = 10;
  //   let b = 3 ;
  //   if(a === 10 || b === 3) {
  //     console.log('a or b have exact values')
  //     if(a === 10 && b === 3) {
  //       console.log('a is = 10 and b is = 3')
  //     }
  //     else if(b === 3) {
  //       console.log('b is = 3')
  //     } else  {
  //       console.log('a is = 10')
  //     }
  //   }
  // }


  const filterProducts = (event) => {
    event.preventDefault()
    if(price.priceFrom || price.priceTo) {
      let filteredProducts = []

      if(price.priceFrom && price.priceTo) {
        for(let i = 0; i < props.products.length; i++) {
          if(props.products[i].price > price.priceFrom && props.products[i].price < price.priceTo) {
            filteredProducts.push(props.products[i])
          }
        }
        setDisplayedProducts(filteredProducts)
      } else if(price.priceFrom) {
          for(let i = 0; i < props.products.length; i++) {
            if(props.products[i].price > price.priceFrom) {
              filteredProducts.push(props.products[i])
            }
          }
          setDisplayedProducts(filteredProducts)
      } else {
          for(let i = 0; i < props.products.length; i++) {
            if(props.products[i].price < price.priceTo) {
              filteredProducts.push(props.products[i])
            }
          }
          setDisplayedProducts(filteredProducts)
      } 
    } 
  }

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        filterProducts={filterProducts}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={displayedProducts}
        columns={columns} />
    </div>
  );
}

export default Search;
