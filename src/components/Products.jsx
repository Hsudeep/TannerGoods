import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./product.module.css"
import { Link } from 'react-router-dom'
const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/Products")
        .then((r)=>setproducts(r.data))
    },[])

  return (
    <div className={style.productsDiv}>
        {products.map((data)=>(
            <div>
                <Link to={`/product/${data.id}`}>
                <img src={data.imageSrc} alt="" />
                <h1>{data.name}</h1>
                <p>{data.compName}</p>
                <p>${data.price}</p>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Products