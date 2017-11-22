import React from 'react';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import ViewIcon from 'material-ui-icons/RemoveRedEye';

const ViewButton = (props) => (
    <div>
      <Tooltip placement='bottom' title='View'>
        <IconButton {...props}>
          <ViewIcon/>
        </IconButton>
      </Tooltip>
    </div>
);

export default ViewButton;