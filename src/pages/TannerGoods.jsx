import React from 'react'
import style from "./tannergoods.module.css"
const TannerGoods = () => {
  return (
    <div>
      <div className={style.topImage}>
        <img src="https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Fathers-Day-22-Header-01_1512x.jpg?v=1653662775" alt="" />
        <div className={style.topImageText}>
          <p>TANNER GOODS</p>
          <h1>Father's Day Gift Shop</h1>
        </div>
      </div>
    </div>
  )
}

export default TannerGoods