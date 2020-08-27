import React from 'react';
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
        this.setState({[e.target.id]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        const { id, name, language, description, initRelease} = this.state;

        return (
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
        )
    }
}