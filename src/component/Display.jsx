import React, { useEffect, useState } from 'react'
import image from "./images"
import styles from "./Display.module.css"

export default function Display() {
    const [ind,setInd]=useState(Math.floor(Math.random()*image.length))
    return (
        <div className={styles.bigbox}>
            <div>
            <img src={image[ind]} className={styles.imgs} alt={`img${ind}`}/>
            </div>
            <div>
                <button className={styles.btn} onClick={()=>setInd(Math.floor(Math.random()*11))}>Change Image</button>
            </div>
        </div>

    )
}
