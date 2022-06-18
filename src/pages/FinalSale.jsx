import React from 'react'
import Products from '../components/Products'
import style from "./finalsale.module.css"

const FinalSale = () => {
  return (
    <div>
      <div className={style.topImage}>
        <img src="https://cdn.shopify.com/s/files/1/0044/9802/files/1002-BTSKonbuBagLifestyle-18-Hero_5fe07716-9da1-4688-9e20-f74d36fa4fa6_1512x.jpg?v=1652466433" alt="" />
        <div className={style.topImageText}>
          <p>TANNER GOODS</p>
          <h1>FinalSale</h1>
        </div>
      </div>
      <div className={style.productDiv}>
        <h1>Products</h1>
        <Products></Products>
      </div>
    </div>
  )
}

export default FinalSale