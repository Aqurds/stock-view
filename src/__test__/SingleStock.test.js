import React from 'react';
import { render } from '@testing-library/react';
import SingleStock from '../components/SingleStock';

describe('SingleStock component', () => {
  it('matches snapshot', () => {
    const { container } = render(<SingleStock />);
    expect(container).toMatchSnapshot();
  });
});
