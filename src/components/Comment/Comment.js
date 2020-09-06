import React, { useState } from 'react';
import Image from '../Image/Image';

const Comment = (props) => {
    const comment = props.comment;
    const {name,email,body,id} = comment;

    const number =[1];
    return (
        <div className="headerInfo">
            <h3 style={{color:'green'}}>{name}</h3>
            {
                number.map(element=><Image id={element}></Image>)
            }
          
            <p style={{fontFamily: 'cursive',}}>Email:{email}</p>
            <p ><small style={{fontFamily: 'cursive',}}>{body}</small></p>

            
        </div>
    );
};

export default Comment;