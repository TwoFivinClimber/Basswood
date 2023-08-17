import React, { useState } from 'react';
import {
  Modal, Button, Header, Card, Confirm,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BasketVegCard from '../BasketVegCard';
import { deleteFullBasket } from '../../utils/data/mergedData';

function BasketViewModal({
  obj, open, setOpen, onUpdate,
}) {
  const [confirm, setConfirm] = useState(false);

  const deleteFunc = (id) => {
    deleteFullBasket(id).then(() => {
      setConfirm(!confirm);
      setOpen(!open);
      onUpdate();
    });
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header as="h2">Week {obj.week}
          <Header as="h3" floated="right">{obj.title}</Header>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Card.Group>
              {obj.veg?.map((veg) => (
                <BasketVegCard key={veg.id} obj={veg} disabled />
              ))}
            </Card.Group>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" content="Done" onClick={() => setOpen(false)} />
          <Button color="red" content="Delete From History" onClick={() => setConfirm(!confirm)} />
        </Modal.Actions>
      </Modal>

      <Confirm
        open={confirm}
        onCancel={() => setConfirm(!confirm)}
        onConfirm={() => deleteFunc(obj.id)}
        color="red"
        header={`Delete Week: ${obj.week} ${obj.title} Basket From History?`}
        content="Are you sure ?"
      />
    </>
  );
}

BasketViewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    week: PropTypes.number,
    description: PropTypes.string,
    veg: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  }),
};

BasketViewModal.defaultProps = {
  obj: {},
};

export default BasketViewModal;
