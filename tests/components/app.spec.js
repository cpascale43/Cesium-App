import React from 'react';
import { shallow } from './enzyme';

import App from '../../client/App';

describe('App component', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    // Expect the wrapper object to be defined
    expect(wrapper.exists()).toBe(true);
  });
});
