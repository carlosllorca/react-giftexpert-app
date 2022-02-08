import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GiftGridItem} from "./GiftGridItem";
// import {GiftGridItem} from "./GiftGridItem";
// import {getGifts} from "../helpers/GetGifts";


export const GiftGrid = ({category}) => {
  //  const [images,setImages]= useState([])
    const {data,loading} = useFetchGifs(category);


    // useEffect(()=>{
    //     getGifts(category).then((img)=>setImages(img));
    // }
    //
    // ,[category])
    return <>
        <h4>{category}</h4>
        {
            loading&&<p>Cargando...</p>
        }
        <div className='card-grid'>

            {
                data.map((img)=>{
                    return <GiftGridItem  {...img} key={img.id}/>
                })
            }

        </div>
    </>
}
GiftGrid.prototype = {
    category: PropTypes.string.isRequired
}