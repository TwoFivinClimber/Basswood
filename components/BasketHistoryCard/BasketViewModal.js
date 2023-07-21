import React from 'react';
import {
  Modal, Button, Header, Card,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BasketVegCard from '../BasketVegCard';

function BasketViewModal({ obj, open, setOpen }) {
  // const openFunc = () => {
  //   getBasketById
  // }
  return (

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
      </Modal.Actions>
    </Modal>
  );
}

BasketViewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  obj: PropTypes.shape({
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
