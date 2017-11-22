import React from 'react';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const DeleteButton = (props) => (
    <div>
      <Tooltip placement='bottom' title='Delete'>
        <IconButton {...props}>
          <DeleteIcon/>
        </IconButton>
      </Tooltip>
    </div>
);

export default DeleteButton;