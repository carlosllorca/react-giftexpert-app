import React,{useState} from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategory})=>{
    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue){
            setCategory(cats=>[inputValue,...cats]);
            setInputValue('')
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add category</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}
AddCategory.propTypes={
    setCategory:PropTypes.func.isRequired
}