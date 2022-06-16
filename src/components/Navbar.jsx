import React from 'react'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
import style from "./navbar.module.css"
const Navbar = () => {
  return (
    <div className={style.navbarcss}>
        <div className={style.nav1}>
            <img src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052" alt="" />
        </div>
        <div className={style.nav2}>
            <Link to="" > Tanner Goods</Link>
            <Link to="/mazmawares">Mazma Wares</Link>
            <Link to="/bags">Bags</Link>
            <Link to="/Wallets">Wallets</Link>
            <Link to="/finalsale">Final Sale</Link>
        </div>
        <div className={style.nav2}>
            <Link to="/login"><PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon></Link>
            <SearchOutlinedIcon></SearchOutlinedIcon>
            <Link to="/cart"><ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon></Link>
        </div>
    </div>
  )
}

export default Navbar