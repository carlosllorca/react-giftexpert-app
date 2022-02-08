import React,{useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GiftGrid} from "./components/GiftGrid";
const GiftExpertApp = ()=>{

    const [categories, setCategories] = useState(['Emma watson']);


    return(
      <>
          <h2>Gift Expert App</h2>
          <AddCategory setCategory={setCategories}/>
          <hr/>
          <ol>

              {
                  categories.map(category=>{
                      return <GiftGrid

                          key={category}
                          category={category}
                      />;
                  })
              }
          </ol>
      </>
  )
};
export default GiftExpertApp;
