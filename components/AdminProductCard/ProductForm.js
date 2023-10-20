/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import {
  Header, Segment, Form, Button, Image, Grid, Checkbox,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import deleteCloudImage from '../../utils/data/ cloudinary';
import { createProduct, updateProduct } from '../../utils/data/product';

const initialState = {
  description: '',
  name: '',
  img: '',
};

function ProductForm({ obj, setEdit, edit, onUpdate, showForm, setShowForm }) {
  const [input, setInput] = useState(initialState);
  const [image, setImage] = useState(null);
  const [randomKey, setRandomKey] = useState('random');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAvailable = (e, bool) => {
    const { checked } = bool;
    setInput((prev) => ({
      ...prev,
      available: checked,
    }));
  };

  const handleImage = (e) => {
    // Deletes from cloudinary if new image is uploaded //
    if (input.cloudId) {
      deleteCloudImage(input.cloudId);
      setInput((prevState) => ({
        ...prevState,
        cloudId: '',
      }));
    }
    const file = e.target.files[0];
    setImage(file);
  };

  const cancleFunc = () => {
    if (edit) {
      setEdit(!edit);
    }
    setRandomKey(Math.random().toString(16));
    setImage(null);
    setInput(initialState);
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateProduct(input, image).then(() => onUpdate());
      setEdit(!edit);
    } else {
      createProduct(input, image).then(() => {
        setInput(initialState);
        onUpdate();
        cancleFunc();
      });
    }
  };

  useEffect(() => {
    if (obj?.id) {
      setInput(obj);
    }
  }, [obj]);

  return (
    <Segment style={{ display: showForm ? 'block' : 'none' }}>
      <Header content={obj?.id ? 'Edit Vegetable' : 'Add Vegetable'} />
      <Form onSubmit={handleSubmit} key={randomKey}>
        <Form.Input
          label="Name"
          name="name"
          onChange={handleChange}
          value={input.name}
          required
        />
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Input
                label="Image"
                name="img"
                type="file"
                key={randomKey}
                onInput={handleImage}
                required={!edit}
              />
            </Grid.Column>
            <Grid.Column textAlign="center" verticalAlign="middle">
              {image || input.img ? <Image verticalAlign="middle" centered size="small" src={image ? URL.createObjectURL(image) : input.img} /> : <Header as="h4" content="Image will display here" />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <Form.TextArea
          label="Description"
          name="description"
          value={input.description}
          rows={6}
          onChange={handleChange}
          required
        />
        <br />
        <Form.Field>
          <Checkbox checked={input.available} onChange={handleAvailable} toggle label="Available" />
        </Form.Field>
        <br />
        <Button type="submit" content="Submit" positive />
        <Button type="button" negative content="Cancel" onClick={() => cancleFunc()} />
      </Form>
    </Segment>
  );
}

ProductForm.propTypes = {
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
  onUpdate: PropTypes.func.isRequired,
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

ProductForm.defaultProps = {
  edit: null,
  setEdit: null,
  showForm: null,
  setShowForm: null,
};

export default ProductForm;
