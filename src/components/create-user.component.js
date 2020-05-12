import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //How to create variables in react
        this.state = {
            username: '',
        }
    }

    onChangeUsername(e) {
        //Target = textbox
        //Value = value of text box
        this.setState({
            username: e.target.value
        });
    }

    //Submit button
    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        //Backend endpont (URL)
        axios.post('http://localhost:5000/users/add',user) //<< user = JSON object
        .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" 
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange= {this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}