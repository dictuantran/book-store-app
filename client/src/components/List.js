import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

class List extends Component {
    constructor () {
        super();
        this.state = { users: [] }                
    }

    // get the users data from backend
    componentDidMount () {
        axios.get('http://localhost:5001/list')
            .then((response) => {
                console.log(response.data)
                this.setState({
                    users: this.state.users.concat(response.data)
                })
            });
    }

    render(){
        let details = this.state.users.map((user) => {
            return (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.studentID}</td>
                    <td>{user.department}</td>
                    <td>
                        <input type="submit" name="btnDelete" className="btn btn-danger" value="Delete" />
                    </td>
                </tr>
            )
        })

        return( <div>            
                <div className="container">
                    <h3 align="center">User Report</h3>
                    <ul className="nav nav-pills">
                        <h4><a style={{float: "right"}} href="#" onClick = {this.logout} >Logout</a></h4>
                    </ul>
                </div>
                <div className="container">
                    <table className="table" style={{outline: "thin solid"}} border="1px solid black">
                        <thead>
                            <tr style={{outline: "thin solid"}}>
                                <th bgcolor="yellow">Name</th>
                                <th bgcolor="yellow">Student ID</th>
                                <th bgcolor="yellow">Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*Display the Table row based on data recieved*/}
                            { details }
                        </tbody>
                    </table>   
                </div> 
            </div>
        )
    }
}

export default List;