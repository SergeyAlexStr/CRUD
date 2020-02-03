import React, {Component} from 'react'
import axios from 'axios'
import Table from './Table'
import AddUser from "./AddUser";

export default class App extends Component {

  state = {
    people: [],
    handleButtonEdit: false
  }

  async componentDidMount() {
    await  axios.get(`http://178.128.196.163:3000/api/records`)
        .then(response => {
          const people  = response.data
          this.setState({people})
          console.log(people)
        })
        .catch(err=> console.error(err.toString()))
  }

  render() {
    return (
        <div className="container">
          <h1>CRUD</h1>
          <div className="flex-row">
            <div className="flex-large">
              <h2>Add user</h2>
              <AddUser/>
            </div>
            <div className="flex-large">
              <h2>View users</h2>
              <Table
                  people = {this.state.people}
              />
            </div>
          </div>
        </div>
    )
  }
}

