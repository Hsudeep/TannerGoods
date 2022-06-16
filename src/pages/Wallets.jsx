import React from 'react'
import style from "./wallets.module.css"
const Wallets = () => {
  return (
    <div>
      <div className={style.topImage}>
        <img src="https://cdn.shopify.com/s/files/1/0044/9802/collections/Tanner-Goods-Wallet-Collection_1800x.jpg?v=1647381639" alt="" />
        <div className={style.topImageText}>
          <p>TANNER GOODS</p>
          <h1>Wallets</h1>
        </div>
      </div>
    </div>
  )
}
export default Wallets