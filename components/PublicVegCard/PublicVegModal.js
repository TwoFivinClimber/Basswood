import React from 'react';
import {
  Button, Header, Image, Modal,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

function PublicVegModal({ obj, open, setOpen }) {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Content image>
        <Image size="medium" src={obj.img} wrapped />
        <Modal.Description>
          <Header>{obj.name}</Header>
          <p>{obj.description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(!open)} color="green">
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

PublicVegModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default PublicVegModal;
