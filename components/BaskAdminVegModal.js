/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import {
  Modal, Image, Button, Header, Confirm,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { deleteThisBasketVeg } from '../utils/data/mergedData';

function BsktAdminVegModal({ obj, bsktId, setSelected, open, setOpen, onUpdate }) {
  const [confirm, setConfirm] = useState(false);

  const deleteRemoveFunc = () => {
    if (bsktId) {
      deleteThisBasketVeg(bsktId, obj.id).then(() => onUpdate());
      setOpen(!open);
    } else {
      setSelected((prev) => {
        const copy = [...prev];
        const existing = copy.filter((x) => x.id !== obj.id);
        return existing;
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
          <Button negative onClick={bsktId ? () => setConfirm(!confirm) : () => deleteRemoveFunc()}>
            Remove From Basket
          </Button>
        </Modal.Actions>
      </Modal>
      <Confirm
        open={confirm}
        onCancel={() => setConfirm(!confirm)}
        onConfirm={() => deleteRemoveFunc()}
        color="red"
        header={`Remove ${obj.name} from the current basket`}
        content="Are you sure ? This will modify the current live basket"
      />
    </>
  );
}

BsktAdminVegModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  bsktId: PropTypes.string,
  setSelected: PropTypes.func,
  obj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

BsktAdminVegModal.defaultProps = {
  bsktId: null,
  setSelected: null,
};

export default BsktAdminVegModal;
