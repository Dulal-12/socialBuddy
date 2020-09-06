import React from 'react';
import './HeaderInfo.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const HeaderInfo = (props) => {
    const post = props.post;
    const {title,id,body} = post;//destructure data which coming from Head
    return (
        <div className="headerInfo">
            <h3>Title:{title}</h3>
            <br/>
            <Link to={`/user/${id}`} ><Button variant="contained" color="secondary" >See More</Button></Link>
        </div>
    );
};

export default HeaderInfo;