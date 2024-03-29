/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import {
  Modal, Image, Button, Header, Confirm, Label,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProductForm from './ProductForm';
import { deleteProduct } from '../../utils/data/product';

function AdminProductModal({ obj, open, setOpen, onUpdate }) {
  const [edit, setEdit] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const deleteRemoveFunc = () => {
    deleteProduct(obj.id, obj.cloudId).then(() => {
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
          <ProductForm obj={obj} edit={edit} showForm={open} setShowForm={setOpen} setEdit={setEdit} onUpdate={onUpdate} />
        ) : (
          <>
            <Modal.Content image>
              <Image size="medium" src={obj.img} wrapped />
              <Modal.Description>
                <Header>{obj.name}</Header>
                <p>{obj.description}</p>
                {obj.available ? <Label color="green">Available</Label>
                  : <Label color="red">Unavailable</Label>}
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
        onConfirm={() => deleteRemoveFunc()}
        color="red"
        header={`Delete ${obj.name} From Database`}
        content="Are you sure ?"
      />
    </>
  );
}

AdminProductModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    available: PropTypes.bool,
    cloudId: PropTypes.string,
  }).isRequired,
};

export default AdminProductModal;
