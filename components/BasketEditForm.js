import React from 'react';
import {
  Form, Header, Button, Card,
} from 'semantic-ui-react';
import AsyncSelect from 'react-select';
import PropTypes from 'prop-types';
import { createBasketVeg } from '../utils/data/basketVeg';
import { updateBasket } from '../utils/data/basket';
import BasketVegCard from './BasketVegCard';

const initialState = {
  description: '',
  title: '',
};

function BasketEditForm({
  onUpdate, edit, setEdit, currentBasket, filteredVeggies, input, setInput, setPhoto,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const writeBasketVeg = (e) => {
    const obj = {
      basket: currentBasket.id,
      veg: e.id,
    };
    createBasketVeg(obj).then(() => onUpdate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const basketObj = {
      ...currentBasket,
      ...input,
    };
    updateBasket(basketObj).then(() => onUpdate());
    setEdit(!edit);
    setInput(initialState);
    setPhoto(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {edit ? (
        <>
          <Form.Input label="Basket Title" name="title" onChange={handleChange} value={input.title} />
          <Form.TextArea label="Basket Description" name="description" onChange={handleChange} value={input.description} />
          <Form.Field hidden={!edit}>
            <label htmlFor="veggieSelect">Select Veggies</label>
            <AsyncSelect
              id="veggiesSelect"
              options={filteredVeggies}
              getOptionValue={(i) => i.id}
              getOptionLabel={(i) => i.name}
              onChange={writeBasketVeg}
              value=""
            />
          </Form.Field>
        </>
      ) : (
        <>
          <Header style={{ fontSize: '1.75em', display: 'inline-block', marginRight: '1rem' }} content={currentBasket.title} />
          <span>{`Week ${currentBasket.week}`}</span>
          <Header as="h4" textAlign="center" content={currentBasket.description} />
        </>
      )}
      <br />
      <Header textAlign="center" content="Veggies" />
      <Card.Group centered>
        {currentBasket.veg?.map((veg) => (
          <BasketVegCard key={veg.id} bsktId={currentBasket.id} obj={veg} onUpdate={onUpdate} />
        ))}
      </Card.Group>
      <br />
      {edit ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button disabled={!input.description} size="large" type="submit" positive content="Publish" />
          <Button size="large" type="button" onClick={() => setEdit(!edit)} negative content="Cancel" />
        </div>
      ) : '' }
    </Form>
  );
}

BasketEditForm.propTypes = {
  edit: PropTypes.bool.isRequired,
  setEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  setPhoto: PropTypes.func.isRequired,
  currentBasket: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    week: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    veg: PropTypes.arrayOf([
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ]),
  }).isRequired,
  filteredVeggies: PropTypes.arrayOf([
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ]).isRequired,
  input: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    week: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  setInput: PropTypes.func.isRequired,
};

export default BasketEditForm;
