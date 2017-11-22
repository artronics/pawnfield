import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toolbar from 'material-ui/Toolbar';
import RefreshButton from 'components/Button/Refresh';
import EditButton from 'components/Button/Edit';
import DeleteButton from 'components/Button/Delete';
import ViewButton from 'components/Button/View';
import Add from 'components/Button/AddToReceipt';
import Typography from 'material-ui/Typography';

const TitleWrapper = styled(Typography)`
  flex: 1 auto;
`;

const Title = ({title}) => (
    <TitleWrapper type='title' color='inherit'>
      {title}
    </TitleWrapper>
);

const ResourceToolbar = (props) => {
  const {title} = props;
  return (
      <div style={{width: '100%'}}>
        <Toolbar>
          <Title title={title}/>
          <RefreshButton/>
          <EditButton/>
          <DeleteButton/>
          <ViewButton/>
          <Add onClick={() => {
            console.log('add');
          }}/>
        </Toolbar>
      </div>
  );
};

ResourceToolbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ResourceToolbar;