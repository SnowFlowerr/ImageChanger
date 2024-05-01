import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from "./Display.module.css"

export default function Display() {
    const [img,setImg]=useState()
    const [ind,setInd]=useState(0)
    useEffect(()=>{
        async function handleChange(){
            try{
                const res=await axios.get("https://dog.ceo/api/breeds/image/random");
                setImg(res.data.message);
            }
            catch(err){
                console.log(err)
            }
        }
        handleChange();
    },[ind])
    return (
        <div className={styles.bigbox}>
            <div>
            <img src={img} className={styles.imgs} alt='img'/>
            </div>
            <div>
                <button className={styles.btn} onClick={()=>setInd(ind+1)}>Change Manas</button>
            </div>
        </div>

    )
}
