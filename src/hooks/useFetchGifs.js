import {useEffect, useState} from "react";
import {getGifts} from "../helpers/GetGifts";

export const useFetchGifs=(category)=>{
  const [state,setState] = useState({
      data:[],
      loading:true
  });
  useEffect(()=>{
      getGifts(category).then((img)=>{
          setState({
             data:img,
             loading: false
          });
      })
  },[])
  return state;
};