/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import {
  Modal, Image, Button, Header, Confirm,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import VegForm from './VegForm';
import { deleteVeg } from '../utils/data/veg';

function AdminVegModal({ obj, open, setOpen, onUpdate }) {
  const [edit, setEdit] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const deleteVegetable = () => {
    deleteVeg(obj.id).then(() => {
      onUpdate();
      setOpen(!open);
    });
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        {edit ? (
          <VegForm obj={obj} edit={edit} showForm={open} setShowForm={setOpen} setEdit={setEdit} onUpdate={onUpdate} />
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
              <Button color="blue" onClick={() => setEdit(true)}>
                Edit
              </Button>
              <Button onClick={() => setOpen(!open)} color="green">
                Close
              </Button>
              <Button negative onClick={() => setConfirm(!confirm)}>
                Delete
              </Button>
            </Modal.Actions>
          </>
        )}
      </Modal>
      <Confirm
        open={confirm}
        onCancel={() => setConfirm(!confirm)}
        onConfirm={() => deleteVegetable()}
        color="red"
        header="Delete Vegetable From Database"
        content={`Are you sure you want to delete ${obj.name} ?`}
      />
    </>
  );
}

AdminVegModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default AdminVegModal;
