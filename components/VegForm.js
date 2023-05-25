import React, { useEffect, useState } from 'react';
import {
  Header, Segment, Form, Input, Button, TextArea,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const initialState = {
  description: '',
  name: '',
  img: '',
};

function VegForm({ obj, setEdit, edit }) {
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    const { value } = e.tagret;
    console.warn(value);
    // setInput((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
  };

  useEffect(() => {
    if (obj.id) {
      setInput(obj);
    }
  }, [obj]);

  return (
    <Segment>
      <Header content={obj.id ? 'Edit Vegetable' : 'Add Vegetable'} />
      <Form>
        <Form.Input
          label="Name"
          id="name"
          onChange={handleChange}
          value={input.name}
          required={input.name}
        />
        <Form.Input
          label="Image"
          onChange={handleChange}
          value={input.img}
          required={input.img}
        />
        <Form.TextArea
          label="Description"
          value={input.description}
          rows={8}
          onChange={handleChange}
          control={TextArea}
          required={input.description}
        />
        <Button type="submit" content="Submit" positive />
        <Button negative content="Cancel" onClick={() => setEdit(!edit)} />
      </Form>
    </Segment>
  );
}

VegForm.propTypes = {
  edit: PropTypes.bool.isRequired,
  setEdit: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default VegForm;
