import React from 'react'

export default class Category extends React.Component {

    render() {
        if (this.props.selected) {
            return <button className="selected" onClick={() => this.props.selectCategory(this.props.category)}>{this.props.category}</button>
        } else {
            return <button onClick={() => this.props.selectCategory(this.props.category)}>{this.props.category}</button>
        }
    }
}