import { render, screen } from '@testing-library/react';
import Register from '../../page/Register.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

test('Testing Register Page', () => {
	render(
		<Router>
			<Provider store={store}>
				<Register />
			</Provider>
		</Router>,
	);
	const inputElement = screen.getByPlaceholderText(
		/First name/ && /Last name/ && /Email/ && /Password/ && /Confirm password/i,
	);
	const linkElement = screen.findAllByText(/Login/i);
	// test Register button
	const buttonElement = screen.getByText(/Submit/i);

	expect(inputElement).toBeTruthy();
	expect(linkElement).toBeTruthy();
	expect(buttonElement).toBeTruthy();
});
