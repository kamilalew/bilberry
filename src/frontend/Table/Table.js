import React from 'react';
import './Table.scss'

export default class Table extends React.Component {
    render() {
        return (
            <table className='main-table'>
                <thead>
                    <tr className='head-row'>
                        <th>Record #</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Description</th>
                        <th>InitRelease</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>placeholder number</th>
                        <th>placeholder1</th>
                        <th>placeholder2</th>
                        <th>placeholder3</th>
                        <th>placeholder4</th>
                        <th>placeholder5</th>
                    </tr>
                </tbody>
            </table>
        )
    }
}