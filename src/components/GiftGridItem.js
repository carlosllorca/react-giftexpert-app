import React from "react";
import PropTypes from "prop-types";
import 'animate.css'
export const GiftGridItem = ({title,url})=>{
    return <div className='card animate__animated animate__fadeIn'>
        <img alt={title} title={title} src={url} />
        <p>{title}</p>
    </div>;
}
GiftGridItem.prototype={
    url:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}