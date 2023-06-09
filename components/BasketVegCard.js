/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import {
  Card, Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BsktAdminVegModal from './BaskAdminVegModal';

function BasketVegCard({ obj, bsktId, onUpdate, setSelected, disabled }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card
        onClick={() => setOpen(!open)}
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
      <BsktAdminVegModal open={open} setOpen={setOpen} setSelected={setSelected} disabled={disabled} bsktId={bsktId} obj={obj} onUpdate={onUpdate} />
    </>
  );
}

BasketVegCard.propTypes = {
  onUpdate: PropTypes.func,
  bsktId: PropTypes.string,
  setSelected: PropTypes.func,
  disabled: PropTypes.bool,
  obj: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

BasketVegCard.defaultProps = {
  bsktId: null,
  setSelected: null,
  onUpdate: null,
  disabled: false,
};

export default BasketVegCard;
