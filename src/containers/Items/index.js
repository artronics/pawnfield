import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withTabs } from 'containers/Tab';

const New = () => (
  <div>new item</div>
);

const Home = () => (
  <div>item home</div>
);

export class Items extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/app/items' component={Home} />
          <Route path='/app/items/new' component={New} />
        </Switch>
      </div>
    );
  }
}
const tabs = {
  home: {to: '/app/items', label: 'Items'},
  new: {to: '/app/items/new', label: 'New Item'}
};
export default withTabs('items', tabs)(Items);
