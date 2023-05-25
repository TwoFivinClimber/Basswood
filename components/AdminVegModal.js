import React, { useState } from 'react';
import {
  Modal, Image, Button, Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import VegForm from './VegForm';

function AdminVegModal({ obj, open, setOpen }) {
  const [edit, setEdit] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      {edit ? (
        <VegForm obj={obj} edit={edit} setEdit={setEdit} />
      ) : (
        <>
          <Modal.Content image>
            <Image size="medium" src={obj.img} wrapped />
            <Modal.Description>
              <Header>{obj.name}</Header>
              <p>{obj.description}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="blue" onClick={() => setEdit(!edit)}>
              Edit
            </Button>
            <Button onClick={() => setOpen(!open)} color="green">
              Close
            </Button>
            <Button negative>
              Delete
            </Button>
          </Modal.Actions>
        </>
      )}
    </Modal>

  );
}

AdminVegModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default AdminVegModal;
