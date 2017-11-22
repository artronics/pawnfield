import React from 'react';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import RefreshIcon from 'material-ui-icons/Refresh';

const RefreshButton = (props) => (
    <div>
      <Tooltip placement='bottom' title='Refresh'>
        <IconButton {...props}>
          <RefreshIcon/>
        </IconButton>
      </Tooltip>
    </div>
);

export default RefreshButton;