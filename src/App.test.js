import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import { AppRoute } from './App';

const propsAt = (com, index) => com.find(Route).at(index).props();

describe('<App />', () => {
  describe('<AppRoute/>', () => {
    const renderedComponent = shallow(<AppRoute/>);
    it('should have all routes', () => {
      expect(renderedComponent.find(Route).length).toBe(4);
    });
    it('should render home page at 0 index', () => {
      const props = propsAt(renderedComponent, 0);
      expect(props.exact).toBe(true);
      expect(props.path).toBe('/');
      // TODO find a way to test component to be rendered
      // expect(props.component).toBe(HomePage);
    });
    it('should render login page at 1 index', () => {
      const props = propsAt(renderedComponent, 1);
      expect(props.exact).toBe(true);
      expect(props.path).toBe('/login');
      // TODO find a way to test component to be rendered
      // expect(props.component).toBe(HomePage);
    });
    it('should render pawnfield at 2 index', () => {
      const props = propsAt(renderedComponent, 2);
      expect(props.exact).toBeUndefined();
      expect(props.path).toBe('/app');
      // TODO find a way to test component to be rendered
      // expect(props.component).toBe(HomePage);
    });
    it('should render not found', () => {
      const props = propsAt(renderedComponent, 3);
      expect(props.exact).toBeUndefined();
      expect(props.path).toBeUndefined();
      // TODO find a way to test component to be rendered
      // expect(props.component).toBe(LoginPage);
    });
  });
});
