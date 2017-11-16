import React from 'react';
import { shallow } from 'enzyme';
import Layout from 'containers/Layout';
import { Pawnfield } from '../index';

describe('<Pawnfield/>', () => {
  it('should render Layout', () => {
    const pawnfield = shallow(<Pawnfield/>);
    expect(pawnfield.find(Layout).length).toEqual(1);
  });
});
