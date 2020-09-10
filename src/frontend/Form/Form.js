import React from 'react';
import axios from 'axios';
import './Form.scss'



export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            language: '',
            description: '',
            initRelease: ''

        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3001/api/technologies', this.state)
            .then(response => {
                console.log(response)
                
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { id, name, language, description, initRelease} = this.state;

        return (
            <div>
                <div className='formHeading'>Add new technology</div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='id' placeholder='id' defaultValue = {id} onChange={this.changeHandler}>
                    </input>
                    <input type='text' name='name' placeholder='name' defaultValue = {name} onChange={this.changeHandler}>
                    </input>
                    <input type='text' name='language' placeholder='language' defaultValue = {language} onChange={this.changeHandler}>
                    </input>
                    <input type='text' name='description' placeholder='description' defaultValue = {description} onChange={this.changeHandler}>
                    </input>
                    <input type='text' name='initRelease' placeholder='initRelease' defaultValue = {initRelease} onChange={this.changeHandler}>
                    </input>
                    <button className='add-button button' type='submit'>Add record</button>
                </form>
            </div>
        )
    }
}