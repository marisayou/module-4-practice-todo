import React from 'react'

export default class Task extends React.Component {

    render() {
        return <div className="task">
            <div className="label">{this.props.label}</div>
            <div className="text">{this.props.text}</div>
            <button className="delete" onClick={() => this.props.removeTask(this.props.index)}>X</button>
        </div>
    }
}