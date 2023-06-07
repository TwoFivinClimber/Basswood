import React, { useState } from 'react';
import {
  Card, Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AdminVegModal from './AdminVegModal';

function BasketVegCard({ obj, onUpdate }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card
        onClick={setOpen}
        style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '30em',
        }}
      >
        <Image size="tiny" src={obj.img} style={{ paddingLeft: '1em' }} />
        <Card.Content>
          <Card.Header style={{ display: 'inline-block' }} content={obj.name} />
          <Card.Description content={`${obj.description?.slice(0, 75)}...`} />
        </Card.Content>
      </Card>
      <AdminVegModal open={open} setOpen={setOpen} obj={obj} onUpdate={onUpdate} />
    </>
  );
}

BasketVegCard.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default BasketVegCard;
