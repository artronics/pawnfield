import React from 'react';
import PropTypes from 'prop-types';
import MdPaper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingBottom: 8,
  }),
});

const Paper = (props) => {
  const { classes } = props;

  return (
    <MdPaper className={classes.root} {...props}>
      {props.children}
    </MdPaper>
  );
};

Paper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default withStyles(styles)(Paper);
