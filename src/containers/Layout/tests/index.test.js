import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../index';

describe('<Layout/>', () => {
  it('should render Layout', () => {
    expect(shallow(<Layout/>)).toBeDefined();
  });
});
