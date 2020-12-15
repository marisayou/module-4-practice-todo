import React from 'react'

export default class Form extends React.Component {

    state = {
        category: 'Code',
        text: ''
    }

    renderSelectOptions = () => {
        return this.props.categories.map((category, index) => <option key={index}>{ category }</option>)
    }

    handleInputOnChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleFormOnChange = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    handleFormOnSubmit = (e) => {
        e.preventDefault()
        this.props.addNewTask(this.state.text, this.state.category)

        e.target.reset()
        this.setState({
            category: 'Code',
            text: ''
        })
    }

    render() {
        return <form className="new-task-form" onSubmit={this.handleFormOnSubmit}>
            <input placeholder="New task details" type="text" value={this.state.text} onChange={this.handleInputOnChange}/>
            <select onChange={this.handleFormOnChange}>
                {this.renderSelectOptions()}
            </select>
            <input type="submit" value="Add task"/>
        </form>
    }
}