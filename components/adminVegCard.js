import React from 'react';
import {
  Card, Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

function AdminVeg({ obj }) {
  return (
    <Card style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '30em',
    }}
    >
      <Image size="tiny" src={obj.img} style={{ paddingLeft: '1em' }} />
      <Card.Content>
        <Card.Header content={obj.name} />
        <Card.Description content={`${obj.description.slice(0, 75)}...`} />
      </Card.Content>
    </Card>
  );
}

AdminVeg.propTypes = {
  obj: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default AdminVeg;
