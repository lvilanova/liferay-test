'use strict';

import JSXComponent from 'metal-jsx';
import TodoButton from './TodoButton';



class TodoItem extends JSXComponent {
	render() {
		let elementClasses = `todo-item${this.props.todo.done ? ' todo-item-done' : ''}`;
		let checkClass = `${this.props.todo.done ? ' fas fa-check-circle' : 'far fa-check-circle'}`;
		//let removeElement = `${this.props.todo.done ? ' fas fa-check-circle' : 'far fa-check-circle'}`;

		
		return [
			<button
				class="check-item"
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
			</li>,
			<button
				class="delete-item"
				data-onclick={this.handleRemoveElement.bind(this)}
			>
				<i 
					class="fa fa-trash">
				</i>
			</button>,
				
		];
	}

	handleClick(event) {
		this.emit('todoClick', {
			index: this.props.index
		});
	}

	handleRemoveElement(event){
		return function(){
			alert("asdasd");
		}
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

