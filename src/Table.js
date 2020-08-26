import React from 'react';

export default class Table extends React.Component {
    render() {
        return (
            <Table>
                <thead>
                    <th></th>
                    <th>id</th>
                    <th>name</th>
                    <th>language</th>
                    <th>description</th>
                    <th>initRelease</th>
                </thead>
            </Table>
        )
    }
}