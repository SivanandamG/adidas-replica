import { useEffect, useState } from "react"
import "./sample.css"
export default function Sample (){
     const [data,setData] = useState([]);
     useEffect(()=>{
          fetch("http://localhost:2345/products").then((res)=>res.json()).then((res)=>{console.log(res);setData(res)})
     },[]);
     return(
          <div id="sample">
               {data.map((a)=>{
                    // consol.log(a);
                   return( <div key={a._id}>
                         <h4> {a.title}</h4>
                         <img src={a.imageUrls[0]} alt="" />
                         <p>Price: {a.price}</p>
                         <p>category: {a.category}</p>
                    </div>);
               })}
          </div>
     )
}