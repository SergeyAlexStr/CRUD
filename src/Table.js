import React from 'react'

const Table = props => {
    return(
        <table>
            <thead>
            <tr>
                <th>Name</th>

            </tr>
            </thead>
            <tbody>
            {props.people.length > 0 ? (
                props.people.map(user=> (
                    <tr key={user._id}>
                        <td>{user.data.name}</td>
                        <td>
                            <button className='button muted-button'>Edit</button>&nbsp;
                            <button className='button muted-button'>Delete</button>
                        </td>
                    </tr>
                ))
            ):(
                <tr>
                    <td colSpan={3}>no user</td>
                </tr>
            )
            }
            </tbody>
        </table>
    )
}

export default Table
