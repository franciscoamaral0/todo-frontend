import axios from 'axios'


class Apiresponse {
    api = axios.create({
        baseURL: 'http://localhost:5000'
    })



    getAllTodos = async () => {
        try {
            const {data} = await this.api.get('/todo')
            return data
            
        } catch (error) {
            throw error
        }
    }

    postTodo = (newTodo) => {
        return this.api.post(`/todo/`, newTodo)
    }

    putEditSingleTodo = (id, todo) => {
        console.log(todo)
        return this.api.put(`/todo/${id}`, todo)
    }

    deleteSingleTodo = (id) => {
        return this.api.delete(`/todo/${id}`)
    }
}

export default new Apiresponse()