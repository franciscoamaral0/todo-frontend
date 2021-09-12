import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Content } from "../../styles/appStyle";
import Apiresponse from '../../Api/Api'

const LineTodo = ({completed, className, title, deleteTodo, _id, fetchData}) => {

    const [checked, setChecked] = useState(false)
    const [changeInput, setChangeInput]= useState(false)
    const [changeInputTitle, setChangeInputTitle] = useState('')




useEffect(() => {
    setChecked(completed)
    setChangeInputTitle(title)
},[])

const handleChecked = async ()=> {
    await Apiresponse.putEditSingleTodo(_id, {completed: checked})
    fetchData()
}
useEffect(()=>{
    handleChecked()
},[checked])



    return(
        
        
        <Content className= {`border border-warning m-3 bg-dark p-2 rounded-pill d-flex justify-content-between align-items-center text-white text-wrap text-break ${checked && 'text-decoration-line-through'}` }>
        <div>
        <input onChange={() => setChecked(!checked)} className='ms-2 me-4' type ='checkbox'  checked={checked}/> 
        {changeInput ? <input  onChange={e => setChangeInputTitle(e.target.value)}  value= {changeInputTitle}/> : <span className={className}>{title}</span>}
        
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