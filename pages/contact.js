import React, { useState } from 'react';
import {
  Grid, Image, Header, Form, Container, Button,
} from 'semantic-ui-react';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(input);
  };

  return (
    <>
      <Container style={{ marginTop: '2em' }}>
        <Grid textAlign="center" verticalAlig="middle" columns="2">
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Header as="h1" style={{ fontSize: '4em' }} content="Get In Touch" />
          </Grid.Column>
          <Grid.Column style={{ display: 'flex', justifyContent: 'center' }}>
            <Image size="medium" rounded src="/images/garlic.jpg" />
          </Grid.Column>
        </Grid>
      </Container>
      <Container style={{ width: '75%' }}>
        <Form onSubmit={handleSubmit}>
          <Header as="h1" content="We'd Love To Hear From You" />
          <Form.Group widths="equal">
            <Form.Input name="name" value={input.name} onChange={handleChange} fluid label="Name" placeholder="Name" required />
            <Form.Input name="email" value={input.email} onChange={handleChange} fluid type="Email" label="Email" placeholder="Email" required />
          </Form.Group>
          <Form.Input name="subject" value={input.subject} onChange={handleChange} fluid label="Subject" placeholder="Subject" required />
          <Form.TextArea name="message" value={input.message} onChange={handleChange} fluid label="Message" placeHolder="Message" required />
          <Button style={{ backgroundColor: 'forestgreen' }} size="large" content="Send" />
        </Form>
      </Container>
    </>
  );
}

export default Contact;
