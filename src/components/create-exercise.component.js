import React, { Component } from 'react';

export default class CreateExercises extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this); 
        this.onChangeDescription = this.onChangeDescription.bind(this); 
        this.onChangeDuration = this.onChangeDuration.bind(this); 
        this.onChangeDate = this.onChangeDate.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 

        //How to create variables in react
        this.state = {
            username: '',
            description:'',
            duration:0,
            date: new Date(),
            users:[],
        }
    }

    onChangeUsername(e){
        //Target = textbox
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        //Target = textbox
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        //Target = textbox
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        //Target = textbox
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }

        console.log(exercise);

        //Takes user back to homepage
        window.location= '/';
    }

    render() {
        return (
            <div>
                <p>You are on Create Exercises Component!</p>
            </div>
        )
    }
}

    