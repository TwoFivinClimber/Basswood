import React from 'react';
import {
  Form, Grid, Header, Button, Card, Image,
} from 'semantic-ui-react';
import AsyncSelect from 'react-select';
import PropTypes from 'prop-types';
import { createBasketVeg } from '../utils/data/basketVeg';
import { updateBasket } from '../utils/data/basket';
import BasketVegCard from './BasketVegCard';
import { deleteCloudImage } from '../utils/data/ cloudinary';

const initialState = {
  description: '',
  title: '',
  photo: '',
};

function BasketEditForm({
  onUpdate, edit, setEdit, currentBasket, filteredVeggies, input, setInput, photo, setPhoto,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
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
    if (photo) {
      deleteCloudImage(basketObj.cloudId);
    }
    updateBasket(basketObj, photo).then(() => onUpdate());
    setEdit(!edit);
    setInput(initialState);
    setPhoto(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {edit ? (
        <>
          <Form.Input label="Basket Title" name="title" onChange={handleChange} value={input.title} />
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Input type="file" label="Basket Photo" name="photo" onChange={handlePhoto} />
              </Grid.Column>
              <Grid.Column textAlign="center" verticalAlign="middle">
                <Image verticalAlign="middle" centered size="small" src={photo ? URL.createObjectURL(photo) : input.photo} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
        <Grid columns={2}>
          <Grid.Column>
            <Header style={{ fontSize: '1.75em', display: 'inline-block', marginRight: '1rem' }} content={currentBasket.title} />
            <span>{`Week ${currentBasket.week}`}</span>
            <Header as="h4" content={currentBasket.description} />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Header content="Basket Photo" />
            <Image centered size="medium" src={currentBasket.photo} />
          </Grid.Column>
        </Grid>
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
  photo: PropTypes.string,
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

BasketEditForm.defaultProps = {
  photo: null,
};

export default BasketEditForm;
