import { render, screen } from '@testing-library/react';
import Login from '../../page/Login.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../../app/store'
 
test('Testing Login Page', () => {
  render(
   <Router>
    <Provider store={store}>
     <Login />
    </Provider>
   </Router>
  );
  const inputElement = screen.getByPlaceholderText(/Email/ && /Password/i);
  const linkElement = screen.findAllByText(/Register/i);
  // test login button
  const buttonElement = screen.getByText(/Login/i);

  expect(inputElement).toBeTruthy();
  expect(linkElement).toBeTruthy();
});