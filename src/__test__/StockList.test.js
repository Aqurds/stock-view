import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import StockList from '../components/StockList';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('StockList component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      stocks: {
        stocks: ['AAPL', 'GOOGL', 'AMZN'],
        loading: false,
      },
    });
  });

  it('renders the component with initial stock symbols', () => {
    const { container } = render(
      <Provider store={store}>
        <StockList />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  // Add more test cases as needed
});
