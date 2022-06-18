import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./product.module.css"

const SingleProduct = () => {
  const [data, setdata] = useState([])
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(()=>{
    if(id){
      fetch( `http://localhost:8080/Products/${id}`)
      .then((r)=>r.json())
      .then((r)=>setdata(r));
    }
    if(id>23){
      navigate("/error")
    }
  },[id])
  return (
    <div>
        <h1>Product Details</h1>
        <div>
          <img src={data.imageSrc} alt="" />
          <h1>{data.name}</h1>
          <p>{data.compName}</p>
          <p>${data.price}</p>
          <button className={style.singleProBtn}>Add to Cart</button>
        </div>
    </div>
  )
}

export default SingleProduct