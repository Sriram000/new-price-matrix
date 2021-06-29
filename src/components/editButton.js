import { React } from 'react';
import context from '../core/context';

const EditButton = () =>
	<button
		disabled={ context.state.editing === null }
		onClick={ context.actions.editItem }
	>
		Ok
	</button>;

export default EditButton;
