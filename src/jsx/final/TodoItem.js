'use strict';

import JSXComponent from 'metal-jsx';
import TodoButton from './TodoButton';



class TodoItem extends JSXComponent {
	render() {
		let elementClasses = `todo-item${this.props.todo.done ? ' todo-item-done' : ''}`;
		let checkClass = `${this.props.todo.done ? ' fas fa-check-circle' : 'far fa-check-circle'}`;
		return [
			<button
				data-onclick={this.handleClick.bind(this)}
				>
					<i 
						class={checkClass}>
					</i>
				</button>,
			<li
				class={elementClasses}
			>
				{this.props.todo.title}
			</li>
				
		];
	}

	handleClick(event) {
		this.emit('todoClick', {
			index: this.props.index
		});
	}
	
}


TodoItem.PROPS = {
	index: {
		value: null
	},

	todo: {
		value: null
	}
};

export {TodoItem}
export default TodoItem;

