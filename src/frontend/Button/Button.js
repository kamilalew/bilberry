import React from 'react';
import './Button.scss'

export default class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button className='add-button button'>Add record</button>
                <button className='delete-button button'>Delete record</button>
            </div>
        )
    }
}