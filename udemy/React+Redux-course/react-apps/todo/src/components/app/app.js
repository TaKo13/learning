import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';
export default class App extends Component {
  nextID = 100;
  state = {
    todoData: [
      this.createToDoItem('Drink coffee'),
      this.createToDoItem('Make Awesom App'),
      this.createToDoItem('Have a lunch'),
    ],
  };

  createToDoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.nextID++,
    };

    deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const newArray = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1),
        ];

        return {
          todoData: newArray,
        };
      });
    };

    addItem = (text) => {
      const newItem = this.createToDoItem(text);

      this.setState(({ todoData }) => {
        const newArr = [...todoData, newItem];
        return {
          todoData: newArr,
        };
      });
    };

    onToggleImpotrant = (id) => {};
    onToggleDone = (id) => {};
  }

  render() {
    return (
      <div class="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <ToDoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImpotrant={this.onToggleImpotrant}
        />

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
