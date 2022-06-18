import React from 'react'
import Products from '../components/Products'
import style from "./mazmawares.module.css"
const MazmaWares = () => {
  return (
    <div>
      <div className={style.topImage}>
        <img src="https://cdn.shopify.com/s/files/1/0044/9802/collections/Mazama-Onyx-Slider_1800x.jpg?v=1650562638" alt="" />
        <div className={style.topImageText}>
          <p>TANNER GOODS</p>
          <h1>Ceramic Mug's</h1>
        </div>
      </div>
      <div className={style.productDiv}>
        <h1>Products</h1>
        <Products></Products>
      </div>
    </div>
  )
}

export default MazmaWares