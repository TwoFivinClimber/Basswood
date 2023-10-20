import React, { useState } from 'react';
import {
  Card, Image, Label,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AdminProductModal from './AdminProductModal';

function AdminProductCard({ obj, onUpdate }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card onClick={setOpen}>
        <Card.Content style={{ display: 'flex', alignItems: 'center', minHeight: '62%' }}>
          <Image fluid style={{ maxHeight: '300px', objectFit: 'cover' }} src={obj.img} />
        </Card.Content>
        <Card.Content>
          <Card.Header>{obj.name}</Card.Header>
          <Card.Description className="productCardDescription">
            {obj.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {obj.available ? <Label color="green">Available</Label>
            : <Label color="red">Unavailable</Label>}
        </Card.Content>
      </Card>

      <AdminProductModal open={open} setOpen={setOpen} obj={obj} onUpdate={onUpdate} />
    </>
  );
}

AdminProductCard.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    available: PropTypes.bool,
  }).isRequired,
};

export default AdminProductCard;
