/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import {
  Modal, Image, Button, Header, Confirm,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import VegForm from './VegForm';
import { deleteVeg } from '../../utils/data/veg';
import { deleteThisBasketVeg } from '../../utils/data/mergedData';

function AdminVegModal({ obj, bsktId, open, setOpen, onUpdate }) {
  const [edit, setEdit] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const router = useRouter();

  const deleteRemoveFunc = () => {
    if (router.route === '/basketAdmin') {
      deleteThisBasketVeg(bsktId, obj.id).then(() => onUpdate());
      setOpen(!open);
    } else {
      deleteVeg(obj.id).then(() => {
        onUpdate();
        setOpen(!open);
      });
    }
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
              {router.route === '/basketAdmin' ? (
                <>
                  <Button color="blue" onClick={() => setEdit(true)}>
                    Edit Veg
                  </Button>
                  <Button onClick={() => setOpen(!open)} color="green">
                    Close
                  </Button>
                  <Button negative onClick={() => setConfirm(!confirm)}>
                    Remove From Basket
                  </Button>
                </>
              ) : (
                <>
                  <Button color="blue" onClick={() => setEdit(true)}>
                    Edit
                  </Button>
                  <Button onClick={() => setOpen(!open)} color="green">
                    Close
                  </Button>
                  <Button negative onClick={() => setConfirm(!confirm)}>
                    Delete
                  </Button>
                </>
              )}
            </Modal.Actions>
          </>
        )}
      </Modal>
      <Confirm
        open={confirm}
        onCancel={() => setConfirm(!confirm)}
        onConfirm={() => deleteRemoveFunc()}
        color="red"
        header={router.route === '/basketAdmin' ? (`Remove ${obj.name} from the current basket`) : (`Delete ${obj.name} From Database`)}
        content="Are you sure ?"
      />
    </>
  );
}

AdminVegModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  bsktId: PropTypes.number,
  obj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

AdminVegModal.defaultProps = {
  bsktId: null,
};

export default AdminVegModal;
