import React from 'react';
import axios from 'axios';
import './Table.scss'

export default class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            technologies: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/technologies')
            .then(response => {
                console.log(response.data)
                this.setState({
                    technologies: response.data
                })
            })
    }
       

    render() {
        return (
            <table className='main-table'>
                <thead>
                    <tr className='head-row'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Description</th>
                        <th>InitRelease</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.technologies
                            .map(technology => (
                    <tr>
                        <th>{technology.id}</th>
                        <th>{technology.name}</th>
                        <th>{technology.language}</th>
                        <th>{technology.description}</th>
                        <th>{technology.initRelease}</th>
                    </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        )
    }
}