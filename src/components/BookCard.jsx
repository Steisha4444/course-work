import React, { Component } from 'react';


const BookCard = (props) => {
    
    return (
      
      <div className="card-container">
       
        <img src={props.image} className='pictures' alt=""/>
        <div className="desc">
          <h2>Title: {props.title}</h2>
          <h3>Author: {props.author}</h3>                  
        </div>
       
      </div>
      
      
    );
}
export default BookCard;