import React, {useState} from 'react'
import axios from 'axios'

const AddUser = props => {

    const someForm = {data: {name: ''}}
    const [user, setUser] = useState(someForm)

    const handleInputChange = event => {
        const  { value } = event.target
        setUser({...user, data: {name:value}})
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        if (!user.data.name) return
        axios.post(`http://178.128.196.163:3000/api/records/`, user)
            .then(res=>{
            })
            .catch(err=>console.error(err.toString()))

    }

    return(
        <div>
            <form onSubmit={handleSubmit}/>
            <label>User Name</label>
            <input
                type='text' name='name' value={user.data.name} onChange={handleInputChange}
            />
            <button type='submit'> Add User</button>

        </div>

    )
}
export default AddUser
