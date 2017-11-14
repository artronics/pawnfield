import React from 'react';
import PropTypes from 'prop-types';
import MdCard, { CardContent, CardHeader } from 'material-ui/Card';

const Card = (props) => {
  const {title, children} = props;

  return (
    <MdCard>
      {title && <CardHeader title={title}></CardHeader>}
      <CardContent>
        {children}
      </CardContent>
    </MdCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
