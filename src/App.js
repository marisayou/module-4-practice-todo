import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Category from './Category'
import Task from './Task'
import Form from './Form'

class App extends React.Component {

  state = {
    selectedCategory: 'All',
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }

  renderCategories = () => {
    return CATEGORIES.map((category, index) => {
      if (this.state.selectedCategory === category) {
        return <Category key={index} category={category} selected={true} selectCategory={this.selectCategory}/>
      } else {
        return <Category key={index} category={category} selected={false} selectCategory={this.selectCategory}/>
      }
    })
  }

  selectCategory = (category) => {
    this.setState({
      selectedCategory: category
    })
  }

  renderTasks = () => {
    let filteredTasks
    if (this.state.selectedCategory === 'All') {
      filteredTasks = this.state.tasks
    } else {
      filteredTasks = this.state.tasks.filter(task => task.category === this.state.selectedCategory)
    }
    
    return filteredTasks.map((task, index) => <Task key={index} index={index} label={task.category} text={task.text} removeTask={this.removeTask}/>)
  }

  addNewTask = (text, category) => {
    const newTask = { text, category}
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }))
  }

  removeTask = (index) => {
    const updatedTasks = [...this.state.tasks].slice(0, index).concat([...this.state.tasks].slice(index + 1))
    this.setState({
      tasks: updatedTasks
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <div key="categories" className="categories">
          <h5>Category filters</h5>
          {this.renderCategories()}
        </div>
        <div key="tasks" className="tasks">
          <h5>Tasks</h5>
          <Form categories={ CATEGORIES.slice(1) } addNewTask={this.addNewTask}/>
          {this.renderTasks()}
        </div>
      </div>
    );
  }
}


export default App;
