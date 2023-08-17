/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import {
  Header, Segment, Form, Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { createVeg, updateVeg } from '../../utils/data/veg';

const initialState = {
  description: '',
  name: '',
  img: '',
};

function VegForm({ obj, setEdit, edit, onUpdate, showForm, setShowForm }) {
  const [input, setInput] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateVeg(input).then(() => onUpdate());
      setEdit(!edit);
    } else {
      createVeg(input).then(() => onUpdate());
      setInput(initialState);
    }
  };

  const cancleFunc = () => {
    if (edit) {
      setEdit(!edit);
    }
    setShowForm(!showForm);
    setInput(initialState);
  };

  useEffect(() => {
    if (obj?.id) {
      setInput(obj);
    }
  }, [obj]);

  return (
    <Segment style={{ display: showForm ? 'block' : 'none' }}>
      <Header content={obj?.id ? 'Edit Vegetable' : 'Add Vegetable'} />
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Name"
          name="name"
          onChange={handleChange}
          value={input.name}
          required
        />
        <Form.Input
          label="Image"
          name="img"
          onChange={handleChange}
          value={input.img}
          required
        />
        <Form.TextArea
          label="Description"
          name="description"
          value={input.description}
          rows={6}
          onChange={handleChange}
          required
        />
        <Button type="submit" content="Submit" positive />
        <Button type="button" negative content="Cancel" onClick={() => cancleFunc()} />
      </Form>
    </Segment>
  );
}

VegForm.propTypes = {
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

VegForm.defaultProps = {
  edit: null,
  setEdit: null,
  showForm: null,
  setShowForm: null,
};

export default VegForm;
