import React, { useState } from 'react';
import fake from '../../FakeImg';
import Comment from '../Comment/Comment';

const Image = (props) => {
   const id = props.id;
   const element = fake.find(pic=> pic.id ===id);
   const image = element.img;

    return (
        <div> 
            <img src={image} style={{height:'40px',borderRadius:'20px'}}/>
                    
        </div>
    );
};

export default Image;