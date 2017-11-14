import React from 'react';
import { mount, shallow } from 'enzyme';
import { TextField as MdTextField } from 'redux-form-material-ui';
import TextField from '../TextField';

describe('<TextField/>', () => {
  it('should set props for MdTextField', () => {
    const label = 'foo';
    const textfield = shallow(<TextField label={label} required/>);
    const props = textfield.find(MdTextField).props();
    expect(props.fullWidth).toEqual(true);
    expect(props.margin).toEqual('normal');
    expect(props.label).toEqual(label);
    expect(props.required).toEqual(true);
  });
  it('should add art-capitalize-input class if capitalized prop is set', () => {
    let wrapper = shallow(<TextField />);
    expect(wrapper.find('.art-capitalized-input').length).toEqual(0);
    wrapper = shallow(<TextField capitalized/>);
    expect(wrapper.find('.art-capitalized-input').length).toEqual(1);
  });
});
