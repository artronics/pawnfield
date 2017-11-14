import React from 'react';
import { shallow } from 'enzyme';
import MdCard, { CardContent, CardHeader } from 'material-ui/Card';
import Card from '../Card';

describe('<Card/>', () => {
  it('should create MdCard', () => {
    const root = shallow(<Card/>);
    expect(root.find(MdCard).length).toEqual(1);
  });
  it('should render title if present', () => {
    let root = shallow(<Card title={'foo'}/>);
    expect(root.find(CardHeader).length).toEqual(1);
    root = shallow(<Card/>);
    expect(root.find(CardHeader).length).toEqual(0);
  });
  it('should render Card content', () => {
    const root = shallow(
      <Card>
        <p id={'text'}>some text</p>
        <p id={'text'}>some text</p>
      </Card>
    );
    const cardContent = root.find(CardContent);
    expect(cardContent.length).toEqual(1);
    expect(cardContent.children().length).toEqual(2);
  });
});
