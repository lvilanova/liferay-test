'use strict';

import JSXComponent from 'metal-jsx';

class TodoButton extends JSXComponent {
	render() {
        return(
            <span>
                <i class="fa fa-trash"></i>
            </span>
         );
	}

	handleClick(event) {
        event.preventDefault();

	}
}

export {TodoButton}
export default TodoButton;