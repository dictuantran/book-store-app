import React, {Component} from 'react';
import axios from 'axios';

class Users extends Component {
    constructor () {
        super();
        this.state = { users: [] }                
    }

    // get the users data from backend
    componentDidMount () {
        axios.get('http://localhost:3000/users')
            .then((response) => {
                console.log(response);
                this.setState({
                    users: this.state.users.concat(response.data["data"])
                })
            });
    }

    logout = () => {        
        window.location = "/"
    }

    render(){
        let details = this.state.users.map((user) => {
            return (
                <tr>
                    <td>{user.username}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                        <input type="submit" name="btnDelete" className="btn btn-danger" value="Delete" />
                    </td>
                </tr>
            )
        })        

        return (            
            <div>                
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
                                <th bgcolor="yellow">user name</th>
                                <th bgcolor="yellow">first name</th>
                                <th bgcolor="yellow">last name</th>
                                <th bgcolor="yellow">email</th>
                            </tr>
                        </thead>
                        <tbody>                            
                            { details }
                        </tbody>
                    </table>   
                </div> 
            </div>
        )
    }
}

export default Users;