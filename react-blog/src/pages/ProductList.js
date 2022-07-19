import React from "react"
import "../styles/ProductList.css"
import { Link } from "react-router-dom"

const productList = [
  { id: 0, name: "car", value: 8500 },
  { id: 1, name: "cycle", value: 560 },
  { id: 2, name: "skateboard", value: 30 },
]

const ProductList = () => {
  const products = productList.map(({ name, id, value }) => (
    <li key={id}>
      <Link to={`/product/${name}`}>{name}</Link>
      <span>Cena: {value}</span>
    </li>
  ))

  return (
    <div className="products">
      <h2>Products</h2>
      <div>
        <ul>{products}</ul>
      </div>
    </div>
  )
}

export default ProductList
