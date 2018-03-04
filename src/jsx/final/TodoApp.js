'use strict';

import JSXComponent from 'metal-jsx';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoButton from './TodoButton';


import '../../todo.scss';

class TodoApp extends JSXComponent {
	render() {
		return (
			<div class="todo">
				<ul>
					{this.state.todos.map((todo, index) => {
						return (
							<TodoItem
								events={{
									todoClick: this.handleTodoClick.bind(this)
								}}
								index={index}
								todo={todo}
							/>
						);
					})}
				</ul>


				<TodoForm
					events={{
						todoAdd: this.handleTodoAdd.bind(this)
					}}
				 />
			</div>
		);
	}

	addTodo(title) {
		this.state.todos = [...this.state.todos, {
			done: false,
			title
		}];
	}

	handleTodoAdd(event) {
		this.addTodo(event.title);
	}

	handleTodoClick(event) {
		this.toggleTodo(event.index);
	}

	toggleTodo(todoIndex) {
		this.state.todos = this.state.todos.map((todo, index) => {
			if (todoIndex == index) {
				todo = Object.assign({}, todo, {
					done: !todo.done
				});
			}
			return todo;
		});
	}
}

TodoApp.STATE = {
	todos: {
		value: [
			{
				done: false,
				title: 'Get up!'
			},
			{
				done: false,
				title: 'Make the app'
			}
		]
	}
};

export {TodoApp}
export default TodoApp;
