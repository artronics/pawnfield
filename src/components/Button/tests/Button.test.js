import React from 'react';
import { shallow } from 'enzyme';
import MdButton from 'material-ui/Button';
import Button from '../Button';

describe('<Button/>', () => {
  const button = shallow(<Button raised>foo</Button>);
  it('should render MdButton', () => {
    expect(button.find(MdButton).length).toEqual(1);
  });
  it('should pass the props', () => {
    expect(button.find(MdButton).props().raised).toEqual(true);
  });
});
