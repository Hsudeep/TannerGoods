import React from 'react'
import style from "./bags.module.css"

const Bags = () => {
  return (
    <div>
      <div className={style.topImage}>
        <img src="https://cdn.shopify.com/s/files/1/0044/9802/collections/Tanner-Goods-M81-Lifestyle-Hero-01_1800x.jpg?v=1650690600" alt="" />
        <div className={style.topImageText}>
          <p>TANNER GOODS</p>
          <h1>Bags</h1>
        </div>
      </div>
    </div>
  )
}

export default Bags