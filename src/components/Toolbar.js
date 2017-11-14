import React from 'react';
import PropTypes from 'prop-types';
import MdToolbar from 'material-ui/Toolbar';

const Toolbar = ({children}) => (
  <MdToolbar>{children}</MdToolbar>
);

Toolbar.propTypes = {
  children: PropTypes.node,
}

export default Toolbar;
