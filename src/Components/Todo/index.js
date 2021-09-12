import React from "react";
import { useState, useEffect } from "react";
import Api from "../../Api/Api";
import Apiresponse from "../../Api/Api";
import { Input } from "../AddTodo.js/AddTodoStyled";
import LineTodo from "../TodoList";
import { Button } from '@material-ui/core';
import { ButtonSend } from "../../styles/appStyle";

const SingleTodo = (props) => {
  const [todos, setTodos] = useState([]);
  const [errors, setErrors] = useState({})
  const [changeInput, setChangeinput] = useState('')
  const [checked, setChecked] = useState(false)
  
  const handleChanges = (e) =>{
    const{value} = e.target
    setChangeinput(value)
    
  }
  
console.log(todos.completed)

  const handleDeleteTodo = async (id) =>{
    await Apiresponse.deleteSingleTodo(id) 
    console.log(`item ${id} deleted`)
    fetchData()
   }
  



  
  async function createData(){
    
    try {
      const createTodo = await Apiresponse.postTodo({
        title: `${changeInput}`,
        completed: false

      })
      fetchData()
      setChangeinput('')
      
    } catch (error) {
      console.error(error)
    }
  }


  async function fetchData(){
  try {
    const allTodos = await Apiresponse.getAllTodos()
    setTodos(allTodos)
    
  } catch (error) {
    setErrors(error)
  }} 
  
  useEffect(() =>{
    fetchData()
  },[])

  useEffect(()=>{
    createData()
  }, [])
  
  return (
      <>
        <form  className='d-flex' onSubmit={e => {
          e.preventDefault()  
          e.target.reset()}}>
        <Input className='ms-4' onChange={(e) => handleChanges(e)}/>
        <ButtonSend onClick ={createData} variant="contained">Send New To-do</ButtonSend>
        </form>

      

      {todos.map((element, index) =>{
        return  <LineTodo key = {element._id} _id={element._id} title={element.title} completed={element.completed} className= { element.completed === true ? 'text-decoration-line-through text-white p-2 text-wrap text-break': 'text-white p-2 text-wrap  text-break'} deleteTodo = {(id) => handleDeleteTodo(id)}/>
          
        })}
        
      </>
    )
  }
      
      
      





export default SingleTodo