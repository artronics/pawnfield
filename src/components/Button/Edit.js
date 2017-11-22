import React from 'react';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';

const EditButton = (props) => (
    <div>
      <Tooltip placement='bottom' title='Edit'>
        <IconButton {...props}>
          <EditIcon/>
        </IconButton>
      </Tooltip>
    </div>
);

export default EditButton;