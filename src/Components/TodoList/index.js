import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Content } from "../../styles/appStyle";

const LineTodo = ({completed, className, title, deleteTodo, _id}) => {

// const [deleteTodo, setDeleteTodo] = useState





    return(
        // <div className='border border-warning m-3 bg-dark p-2 rounded-pill d-flex justify-content-between align-items-center '>
        <Content className='border border-warning m-3 bg-dark p-2 rounded-pill'>
        <div>
        <input  className='ms-2 me-4' type ='checkbox'  checked={completed}/> <span className={className}>{title}</span>
        </div>
        <div>
        <IconButton edge= 'end' onClick={()=> deleteTodo(_id)} aria-label="delete" color='secondary'>
            <DeleteIcon edge= 'end' fontSize="small"/>
        </IconButton>
        </div>
        </Content>
       
    )
}

export default LineTodo