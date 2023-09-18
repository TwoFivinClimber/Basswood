import React, { useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import PublicVegModal from './PublicVegModal';

function PublicVegCard({ obj }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className="publicVegCard"
        onClick={() => setOpen(!open)}
        raised
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40%',
          backgroundColor: '#a7c28b40',
        }}
      >
        <div className="vegCardImgDiv">
          <Image size="small" src={obj.img} style={{ }} />
        </div>
        <Card.Content style={{ border: 'none' }}>
          <Card.Header style={{ display: 'inline-block' }} content={obj.name} />
          <Card.Description content={`${obj.description?.slice(0, 75)}...`} />
        </Card.Content>
      </Card>
      <PublicVegModal obj={obj} open={open} setOpen={setOpen} />
    </>
  );
}

PublicVegCard.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default PublicVegCard;
