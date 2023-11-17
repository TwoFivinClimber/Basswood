import React, { useState } from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import PublicProductModal from './PublicProductModal';

function PublicProductCard({ obj }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card onClick={setOpen} className="publicProductCard">
        <Card.Content style={{ display: 'flex', alignItems: 'center', minHeight: '62%' }}>
          <Image fluid style={{ maxHeight: '300px', objectFit: 'cover' }} src={obj.img} />
        </Card.Content>
        <Card.Content>
          <Card.Header>{obj.name}</Card.Header>
          <Card.Description className="publicProductCardDescription">
            {obj.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="publicProductLabelDiv">
          <Label color="green">Available</Label>
        </Card.Content>
      </Card>
      <PublicProductModal open={open} setOpen={setOpen} obj={obj} />
    </>
  );
}

PublicProductCard.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default PublicProductCard;
