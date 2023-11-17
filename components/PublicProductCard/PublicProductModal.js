import React from 'react';
import {
  Button, Header, Image, Label, Modal,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

function PublicProductModal({ obj, open, setOpen }) {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Content image style={{ backgroundColor: '#DEDCCC' }}>
        <Image size="medium" src={obj.img} wrapped />
        <Modal.Description>
          <Header>{obj.name}</Header>
          <p>{obj.description}</p>
          <Label color="green">Available</Label>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions style={{ backgroundColor: '#DEDCCC' }}>
        <Button onClick={() => setOpen(!open)} color="green">
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

PublicProductModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default PublicProductModal;
