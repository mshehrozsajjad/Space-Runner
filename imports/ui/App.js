import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
import Task from './Task.js';


// App component - represents the whole app
class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }



  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    return (
      <section  id="hero" className="hero hero-home bg-gray">
      
        <div className="container">
          <div className="row block">
            <div className="col-lg-12">
              <h1>Welcome</h1>
              <p className="lead">Thank you for taking the time to help me with some research. I’m trying to get an idea of where people click on a page.
                All of that information is being recorded but you’ll note that at no point will we ask you for your personal information.
              </p>
            </div>
          </div>
        </div>
    <div className="container">
      <div className="row block">
        <div className="col-md-9">
          <div className="container">
            <header>
              <h1>Todo List</h1>
            </header>
            <div className="col-sm-12">
              <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                <div className="form-group">
                   <input
                   type="text"
                   ref="textInput"
                   placeholder="Type to add new tasks"
                 />
                </div>

             </form>
            </div>
            <div className="col-sm-12">
              <ul>
                {this.renderTasks()}
              </ul>
            </div>


          </div>
        </div>
      </div>
    </div>


  </section>
    );
  }
}

export default withTracker(() => {
  return {
     tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(App);
