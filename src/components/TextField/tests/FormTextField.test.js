import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form/immutable';
import TextField from '../TextField';
import FormTextField from '../FormTextField';

describe('<FormTextField/>', () => {
  const formTextField = shallow(<FormTextField name={'foo'}/>);
  it('should create Field', () => {
    expect(formTextField.find(Field).length).toEqual(1);
  });
  it('should set props for Field', () => {
    const props = formTextField.find(Field).at(0).props();
    expect(props.component).toBe(TextField);
    expect(props.name).toEqual('foo');
  });
});
